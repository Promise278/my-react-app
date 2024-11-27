import React, { useState } from 'react';

function App() {
  const [name, setName] = useState(''); 


  function handleButtonClick() {
    alert(`Hello, ${name}!`);
  }

  return (
    <div>
      <h1>My First React App</h1>
      <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleButtonClick}>Say Hello</button>
    </div>
  );
}

export default App;
