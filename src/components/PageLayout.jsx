// import React from 'react';

// const PageLayout = ({ header, children, footer }) => {
//   return (
//     <div className="page-layout">
//       {header}
//       <main>{children}</main>
//       {footer}
//     </div>
//   );
// };

// export default PageLayout;

// PageLayout.js
import React from "react";

const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      <header>{header}</header>
      <br />
      <main>{children}</main>
      <br />
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;
