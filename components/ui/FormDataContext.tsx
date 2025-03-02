import React, { createContext, useState, ReactNode } from "react";

type FormDataContextType = {
  projectDescription: string;
  setProjectDescription: (desc: string) => void;
};

export const FormDataContext = createContext<FormDataContextType>({
  projectDescription: "",
  setProjectDescription: () => {},
});

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [projectDescription, setProjectDescription] = useState("");

  return (
    <FormDataContext.Provider
      value={{ projectDescription, setProjectDescription }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
