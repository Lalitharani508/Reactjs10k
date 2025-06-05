import React from "react";
// import Senarioonoff from "./components/Scenariobased";
// import { SetTheme,InputColor,Randombgcolor,FindTotal,FakeApi } from "./components/Scenariobased";
// import { FilterCatAddtoCart1 } from "./components/Scenariobased";
// import CategorySubcategoryCards from "./components/day31reacttask";
// import React from "react";
import App1 from "./usecontext/app1";
import { Counter } from "./usereducer/usereducer";
// import { Reactmemo } from "./reactmemo/parent";
// import Use from "./usemomo/use";
import App12 from "./usecallback/use";
import A from "./usecallback/realtimeexample/u";
const App=()=>{
  return(
    <>
    {/* <Use/> */}
    <A/>
    <App12/>
    <App1/>
    <Counter/>
    {/* <Reactmemo/> */}
    {/* hello */}
    {/* <Senarioonoff/>
    <SetTheme/>
    <InputColor/>
    <Randombgcolor/>
    <FindTotal/>
    <FakeApi/> */}
    {/* <CategorySubcategoryCards/> */}
    {/* <FilterCatAddtoCart1/> */}
    </>
  )
}
export default App;