import "./SingleStudent.css";
import { Dispatch, memo, SetStateAction, useState } from "react";
import Student from "../models/Student";
import AddTag from "./AddTag";

interface Props {
  student: Student;
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>>;
}

function SingleStudent({ students, student, setStudents }: Props) {
  const [isScoresActive, setIsScoresActive] = useState(false);

  return (
    <div className="SingleStudent">
      <img src={`/fsb/images/${student.pic}`} alt={`${student.firstName} ${student.lastName}'s Avatar`} />
      <div className="info-container">
        <h1>
          {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
        </h1>
        <div className="icon" onClick={() => setIsScoresActive((prevState) => !prevState)}>
          <button>{isScoresActive ? "-" : "+"}</button>
        </div>
        <p>Email: {student.email}</p>
        <p>Company: {student.company}</p>
        <p>Skill: {student.skill}</p>
        <p>Average: {student.average}%</p>
        <div className={isScoresActive ? "test-scores" : "hidden"}>
          {student.grades.map((score, index) => (
            <p key={score && index}>
              Test {index + 1}: {score}%
            </p>
          ))}
        </div>
        <AddTag students={students} student={student} setStudents={setStudents} />
      </div>
    </div>
  );
}

export default memo(SingleStudent);
