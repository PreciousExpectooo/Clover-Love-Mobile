import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  phoneNumber: string;
  otp: string;
  name: string;
  email: string;
  mobileNo: string;
  dateOfBirth: string;
  employmentStatus: "employed" | "unemployed" | "student" | "retired" | "";
  courseId: string;
  location: string;
  university: string;
  occupation: string;
  address: string;
  gender: "male" | "female" | "";
  nickname: string;
  interests: string[];
  match: string;
  skill: string[];
  business: string;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    otp: "",
    name: "",
    email: "",
    mobileNo: "",
    dateOfBirth: "",
    employmentStatus: "",
    courseId: "",
    location: "",
    university: "",
    occupation: "",
    address: "",
    gender: "",
    nickname: "",
    interests: [],
    match: "",
    skill: [],
    business: "",
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
