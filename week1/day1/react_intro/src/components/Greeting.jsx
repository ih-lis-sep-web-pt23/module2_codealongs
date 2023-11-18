const student = {
  firstName: "bibek",
  lastName: "karki",
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const theme = "dark";

//Embedding

function Greeting() {
  return (
    <div
      id="main"
      //class and for are reserved keywords, use className and htmlFor
      className={`${theme} greeting`}
      /* 
   methods need to be camel case
   onClick={}
      onKeyDown={} */
    >
      {/* <label htmlFor=""></label> */}
      <h2>
        Hello {student.firstName.toUpperCase()} {capitalize(student.lastName)}
      </h2>
    </div>
  );
}

export default Greeting;
