function StudentList(props) {
  return (
    <div className="student-list">
      <h1>Students: </h1>
      {props.children}
    </div>
  );
}

export default StudentList;
