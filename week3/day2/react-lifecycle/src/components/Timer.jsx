import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  /* useEffect(() => {

    return () => {}

  }, []); */
  //useEffect takes two arguments,
  // the first one is the function we want to call
  // the second one is the dependency Array - allows us to time the useEffect

  useEffect(() => {
    console.log("Mounting Phase");
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      console.log("Unmounting phase");
      clearInterval(intervalId);
    };
    // Cleanup -  clear intervals, resseting values
  }, []);
  //if we want to call the function in the mounting phase, we leave the array empty

  useEffect(() => {
    document.title = count;
  }, [count]);

  //axios

  return (
    <div className="Timer">
      <h2>Timer</h2>
      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
