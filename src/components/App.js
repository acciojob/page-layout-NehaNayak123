
import React from "react";
import './../styles/App.css';

import {PageLayout} from "./PageLayout"

function App() {
    
  return <div>
      
      <PageLayout 
             header="Welcome to my Website" 
             children="This is the content of my website."
             footer="© 2023 My Website. All rights reserved." 
      />
    </div>
}
export default App
