import {ManPropsType} from "./Destructuring";

let props: ManPropsType;

beforeEach(() => {
  props = {
    name: "Alex",
    age: 34,
    lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
    address: {
      street: {title: "Mickevicha 12"}
    }
  };
});

test("Object destructuring should be correct", () => {
  // const age = props.age;
  // const lessons = props.lessons;

  const {age, lessons} = props;
  const {title} = props.address.street;

  expect(age).toBe(34);
  expect(lessons.length).toBe(3);
  expect(title).toBe("Mickevicha 12");
});

test("Array destructuring should be correct", () => {
  // const ls1 = props.lessons[0];
  // const ls2 = props.lessons[1];

  // const [ls1, ...restLessons] = props.lessons;
  const [, ls2, ...restLessons] = props.lessons;

  expect(ls2.title).toBe("2");
  expect(restLessons.length).toBe(1);
  expect(restLessons[0].title).toBe("3");
  expect(restLessons[0].name).toBe("react");
  expect(restLessons[0]).toStrictEqual({title: "3", name: "react"});
});