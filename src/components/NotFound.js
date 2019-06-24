import React from 'react'

const NotFound = () => {
    return <NoContent />;
  };
  
const NoContent = () => {
    const data = 'No data found!';
  
    return <h1>{data}</h1>;
  };

export default NotFound;