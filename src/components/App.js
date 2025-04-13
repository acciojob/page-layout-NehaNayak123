
import React from "react";
import './../styles/App.css';

import {PageLayout} from "./PageLayout"

function App() {
    
  return <div>
      
      <PageLayout 
             header="Welcome to my Website" 
             footer="All rights reserved" 
             children="This is the content of my website."/>
      
    </div>
}
export default App
