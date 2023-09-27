import React, { createContext, useState, useEffect } from "react";

const HabitContext = createContext();

export const CryptoProvider = ({ children }) => {
  return <HabitContext.Provider value={{}}>{children}</HabitContext.Provider>;
};

export default HabitContext;
