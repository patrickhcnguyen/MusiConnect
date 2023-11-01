import React, { useState, useEffect, useContext, createContext } from "react"
import { FirebaseContext } from "./FirebaseContext";

const AuthContext = createContext();

export function ProvideAut({children}) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}