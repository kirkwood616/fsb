import Student from "../models/Student";

export default function getAverage(student: Student): number {
  let total: number = 0;
  student.grades.forEach((grade: string) => (total += parseInt(grade)));
  return total / student.grades.length;
}
