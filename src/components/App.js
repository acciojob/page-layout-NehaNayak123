import React from 'react';
import PageLayout from './PageLayout';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <PageLayout
      header={<Header />}
      footer={<Footer />}
    >
      <div>This is the content of my website.</div>
    </PageLayout>
  );
};

export default App;



// import React from "react";
// import './../styles/App.css';

// import {PageLayout} from "./PageLayout"

// function App() {
    
//   return <div>
      
//       <PageLayout 
//              header="Welcome to my Website" 
//              children="This is the content of my website."
//              footer="© 2023 My Website. All rights reserved." 
//       />
//     </div>
// }
// export default App
