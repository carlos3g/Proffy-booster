import { StatusBar } from "expo-status-bar";
import React from "react";

import Landing from "./src/screens/Landing";

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}
