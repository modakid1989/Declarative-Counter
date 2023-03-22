import React, { useState } from 'react'

function App() {
  // Declare a state variable named "counter" and a function to update it named "changeCounter".
  // The initial value of "counter" is 1.
  let [ counter, changeCounter ] = useState(1)

  // Add the "changeCounter" function to the global "window" object so that it can be accessed from the browser console.
  window.changeCounter = changeCounter

  // Render a div containing two headings with the value of "counter".
  return (
    <div>
      <h1>{ counter }</h1>
      <h4>{ counter }</h4>
    </div>
  )
}

export default App;


