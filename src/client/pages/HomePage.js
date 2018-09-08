import React from 'react';

const Home = () => {
  return (
    <div>
      <div>
        Home Component Here!!!
      </div>
      <button onClick={() => console.log('CLICKED') }>Button</button>
    </div>
  );
}

export default {
  component: Home,
  
}
