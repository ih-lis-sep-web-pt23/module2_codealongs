//import spinner from "./assets/cat_spinner.gif";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import ReactPlayer from "react-player";

function App() {
  return (
    <>
      <Navbar />
      {/*  <img
        src={spinner}
        alt="loading cat spinner"
      /> */}
      <h1>Hello world</h1>
      <Greeting></Greeting>
      <Greeting />
      <hr />

      {/*  <StudentCard firstName="Carolina" /> */}
      <StudentList>
        <StudentCard
          student={{
            firstName: "Carolina",
            lastName: "Rodrigues",
            info: {
              course: "Webdev",
              week: 8,
              campus: "Lisbon",
            },
          }}
        />
        <StudentCard
          student={{
            firstName: "Mary",
            lastName: "Brooks",
            info: {
              course: "Webdev",
              week: 8,
              campus: "Berlin",
            },
          }}
        />
      </StudentList>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=IzluNxh-8_o"
        width="1000px"
      />
    </>
  );
}
export default App;

/* const myApp = () => {
  return (
  <div>
    <h1>Hello</h1>
  </div>)
} */
