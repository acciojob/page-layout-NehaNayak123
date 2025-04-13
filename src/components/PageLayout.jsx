import React from 'react';

const PageLayout = ({ header, children, footer }) => {
  return (
    <div className="page-layout">
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default PageLayout;
