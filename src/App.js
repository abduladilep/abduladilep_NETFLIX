import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Action,Orginals } from "./urls";
import "./app.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div>
   <NavBar/>
   <Banner/>
   <RowPost url={Orginals} title='netflix Orginals'/>
   <RowPost url={Action}  title='Action' isSmall />
   
   </div>
  );
}

export default App;
