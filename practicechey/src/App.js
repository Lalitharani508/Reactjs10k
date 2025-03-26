import React from "react";
import Senarioonoff from "./components/Scenariobased";
import { SetTheme,InputColor,Randombgcolor,FindTotal } from "./components/Scenariobased";
const App=()=>{
  return(
    <>
    {/* hello */}
    <Senarioonoff/>
    <SetTheme/>
    <InputColor/>
    <Randombgcolor/>
    <FindTotal/>
    </>
  )
}
export default App;