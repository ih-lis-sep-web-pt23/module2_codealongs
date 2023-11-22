import { useState } from "react";
//useState is a hook - a special function from react that allows us to control and declare state

function Counter() {
  // Declare state
  // state variable + updater function
  // the useState function returns an array with 2 items
  // the first item is the state variable (count)
  // the second item is the updater function (setCount)
  // inside the parenthesis of useState we can pass an initial value
  // if you don't know the initial value yet, use null

  const [count, setCount] = useState(0);

  //you can have more than one state variable if you need
  //const [username, setUsername] = useState("André");

  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/*       The method below is called a functional update (used when there'sm multiple state operations with the same variable )
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button> */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;

/* 
let startBtn = document.getById('start')

startBtn.addEventListener('click', () => {
  
})

*/
