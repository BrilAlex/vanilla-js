import {StudentType} from "../02_objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: "Alex",
    age: 34,
    isActive: false,
    address: {
      streetTitle: "Mickevicha 12",
      city: {
        title: "Fanipol",
        countryTitle: "Belarus"
      }
    },
    technologies: [
      {id: 1, title: "HTML"},
      {id: 2, title: "CSS"},
      {id: 3, title: "React"}
    ]
  }
});

test("New tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, "JS");

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();
});

test("Student should be made active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);
});

test("Does student live in city?", () => {
  let result1 = doesStudentLiveIn(student, "Moscow");
  let result2 = doesStudentLiveIn(student, "Fanipol");

  expect(result1).toBeFalsy();
  expect(result2).toBeTruthy();
});