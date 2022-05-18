import "./AddTag.css";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Student from "../models/Student";

interface Props {
  students: Student[];
  student: Student;
  setStudents: Dispatch<SetStateAction<Student[]>>;
}

function AddTag({ students, student, setStudents }: Props) {
  const [tagText, setTagText] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!tagText.length) {
      return;
    }
    const index = students.findIndex((person) => person.id === student.id);
    if (index === -1) {
      return;
    } else {
      setStudents((prev) => {
        let newArray = prev.slice();
        newArray[index].tags = [...newArray[index].tags, tagText];
        return newArray;
      });
    }
    setTagText("");
  }

  return (
    <div className="AddTag">
      {student.tags.length > 0 &&
        student.tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a tag" value={tagText} onChange={(e) => setTagText(e.target.value)} />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default AddTag;
