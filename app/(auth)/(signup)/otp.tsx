import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import CustomLayout from "@/components/CustomLayout";
import { StatusBar } from "expo-status-bar";

export default function SignUpOTP({ updateFormData }: any) {
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOTPChange = (otp: any) => {
    setIsError(false);
    updateFormData({ otp });
    // Validate OTP when length is 6
    if (otp.length === 6) {
      // Check if OTP matches 123456
      setIsError(otp !== "123456");
    }
  };

  const handleResendCode = () => {
    // Add your resend code logic here
    setTimer(30);
    setCanResend(false);
    setIsError(false);
  };

  return (
    <CustomLayout title="Enter OTP" subtitle="Please enter OTP to sign up">
      <View className="w-full mt-2">
        <OtpInput
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
              <Text className="text-[#640D6B] font-semibold">Resend Code</Text>
            </TouchableOpacity>
          ) : (
            <Text className="text-[#716C6C]">
              Resend code in{" "}
              <Text className="font-bold text-[#640D6B]">0:{timer}s</Text>
            </Text>
          )}
        </View>
      </View>
      <StatusBar style="auto" />
    </CustomLayout>
  );
}
