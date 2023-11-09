import React from 'react';

function App() {
// Create a simple GUI in React with the following elements:
//    1. A title
//    2. A text input to write a Image URL to analize
//    3. A button to analize the image
//    4. A button to generate the image

  return (
    <div className="App">
      <h1>Computer vision</h1>
      <p>Inser URL or type prompt</p>
      <input type="text" placeholder="Enter URL to analize" />
      <button>Analize</button>
      <button>Generate</button>
    </div>
  );
}

export default App;
