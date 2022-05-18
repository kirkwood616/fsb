import "./StudentsList.css";
import { useCallback, useEffect, useState } from "react";
import Student from "../models/Student";
import SingleStudent from "./SingleStudent";
import Search from "./Search";
import getAverage from "../utils/GradeAverage";
import data from "../db/data.json";
import ResultsBar from "./ResultsBar";

function StudentsList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [nameSearch, setNameSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");

  useEffect(() => {
    if (!students.length) {
      let copy = [...data.students] as Student[];
      copy.forEach((student) => {
        student.average = getAverage(student);
        student.tags = [];
      });
      setStudents(copy);
    } else {
      return;
    }
  }, [students]);

  const listOfStudents = useCallback(() => {
    const studentNameSearch: Student[] = students.filter((student) => (student.firstName + student.lastName).toLowerCase().includes(nameSearch.replace(/\s+/g, "")));

    const studentTagSearch: Student[] = students.filter((student) => {
      if (!tagSearch) {
        return student;
      } else {
        return student.tags.some((tag) => tag.toLowerCase().includes(tagSearch.toLowerCase()));
      }
    });

    const sharedResults = studentNameSearch.filter(({ id: id1 }) => studentTagSearch.some(({ id: id2 }) => id2 === id1));

    return sharedResults.map((student) => {
      return <SingleStudent key={student.id} student={student} students={students} setStudents={setStudents} />;
    });
  }, [nameSearch, students, tagSearch]);

  return (
    <div className="StudentsList">
      <Search nameSearch={nameSearch} setNameSearch={setNameSearch} tagSearch={tagSearch} setTagSearch={setTagSearch} />
      <ResultsBar length={listOfStudents().length} nameSearch={nameSearch} tagSearch={tagSearch} />
      {listOfStudents()}
    </div>
  );
}

export default StudentsList;
