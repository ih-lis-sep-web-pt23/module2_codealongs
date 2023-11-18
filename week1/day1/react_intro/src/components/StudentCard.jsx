function StudentCard(props) {
  // props is an object that contains all the data that was passed down to the component
  console.log(props);
  return (
    <div>
      <p>Student: {props.student.firstName}</p>
      <p>Course: {props.student.info.course} </p>
      <p>Campus: {props.student.info.campus}</p>
      <p>Week: {props.student.info.week}</p>
    </div>
  );
}

export default StudentCard;
