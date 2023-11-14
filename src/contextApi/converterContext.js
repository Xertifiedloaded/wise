import React, { createContext } from "react";
export const UserConverterContext = createContext();
export default function converterContext({ children }) {
  const value = {};
  return (
    <UserConverterContext.Provider value={value}>
      {children}
    </UserConverterContext.Provider>
  )
}
