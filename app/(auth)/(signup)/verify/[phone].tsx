import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { OtpInput } from "react-native-otp-entry";
import CustomLayout from "@/components/CustomLayout";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Colors from "@/constants/Colors";
import {
  useSignUp,
  useSignIn,
  isClerkAPIResponseError,
} from "@clerk/clerk-expo";

const CELL_COUNT = 6;

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();
  const [code, setCode] = useState("");
  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();

  useEffect(() => {
    if (code.length === 6) {
      if (signin === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleResendCode = () => {
    // Add your resend code logic here
    setTimer(30);
    setCanResend(false);
    setIsError(false);
  };

  const verifyCode = async () => {
    try {
      await signUp!.attemptPhoneNumberVerification({
        code,
      });
      await setActive!({ session: signUp!.createdSessionId });
    } catch (err) {
      console.log("error", JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert("Error", err.errors[0].message);
      }
    }
  };

  const verifySignIn = async () => {
    try {
      await signIn!.attemptFirstFactor({
        strategy: "phone_code",
        code,
      });

      await setActive!({ session: signIn!.createdSessionId });
    } catch (err) {
      console.log("error", JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert("Error", err.errors[0].message);
      }
    }
  };

  const resendCode = async () => {
    try {
      if (signin === "true") {
        const { supportedFirstFactors } = await signIn!.create({
          identifier: phone,
        });

        const firstPhoneFactor: any = supportedFirstFactors!.find(
          (factor: any) => {
            return factor.strategy === "phone_code";
          }
        );

        const { phoneNumberId } = firstPhoneFactor;

        await signIn!.prepareFirstFactor({
          strategy: "phone_code",
          phoneNumberId,
        });
      } else {
        await signUp!.create({
          phoneNumber: phone,
        });
        signUp!.preparePhoneNumberVerification();
      }
    } catch (err) {
      console.log("error", JSON.stringify(err, null, 2));
      if (isClerkAPIResponseError(err)) {
        Alert.alert("Error", err.errors[0].message);
      }
    }
  };

  return (
    <SafeAreaView className="p-[20px]">
      <Stack.Screen options={{ headerTitle: phone }} />
      <CustomLayout title="Enter OTP" subtitle="Please enter OTP to sign up">
        <View className="w-full mt-2">
          {/* <OtpInput
            numberOfDigits={6}
            onTextChange={handleOTPChange}
            focusColor={isError ? "#EF4444" : "#640D6B"}
            theme={{
              containerStyle: {
                borderColor: isError ? "#EF4444" : "#640D6B",
              },
            }}
          />
          {isError && (
            <Text className="text-red-500 text-sm mt-1">
              Invalid verification code. Please try again.
            </Text>
          )}
          <View className="mt-4 ">
            {canResend ? (
              <TouchableOpacity onPress={handleResendCode}>
                <Text className="text-[#640D6B] font-semibold">
                  Resend Code
                </Text>
              </TouchableOpacity>
            ) : (
              <Text className="text-[#716C6C]">
                Resend code in{" "}
                <Text className="font-bold text-[#640D6B]">0:{timer}s</Text>
              </Text>
            )}
          </View> */}

          <CodeField
            ref={ref}
            {...props}
            value={code}
            onChangeText={setCode}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <TouchableOpacity onPress={resendCode}>
            <Text>Didn't receive a verification code?</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </CustomLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  legal: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 18,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 260,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 4,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    paddingBottom: 4,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});

export default Page;
