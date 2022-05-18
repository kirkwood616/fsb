import axios from "axios";
import Student from "../models/Student";

export function fetchStudents(): Promise<Student[]> {
  return axios.get("https://apiendpoint.something/api").then((res) => res.data.students);
}
