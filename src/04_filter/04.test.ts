import {cheapPredicate, predicate} from "./04";

test("Should take men older than 90 years", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];

  const resultAges = ages.filter(predicate);

  expect(resultAges.length).toBe(1);
  expect(resultAges[0]).toBe(100);
});

test("Should take courses cheaper than 160", () => {
  const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
  ];

  const cheapCourses = courses.filter(cheapPredicate);

  expect(cheapCourses.length).toBe(2);
  expect(cheapCourses[0].title).toBe("CSS");
  expect(cheapCourses[1].title).toBe("React")
});

test("Should get ony completed tasks", () => {
  const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Salt", isDone: false},
    {id: 4, title: "Sugar", isDone: true},
  ];

  const completedTasks = tasks.filter(t => t.isDone);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].id).toBe(2);
  expect(completedTasks[1].id).toBe(4);
  expect(completedTasks[0].title).toBe("Milk");
  expect(completedTasks[1].title).toBe("Sugar");
});

test("Should get ony uncompleted tasks", () => {
  const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Salt", isDone: false},
    {id: 4, title: "Sugar", isDone: true},
  ];

  const uncompletedTasks = tasks.filter(t => !t.isDone);

  expect(uncompletedTasks.length).toBe(2);
  expect(uncompletedTasks[0].id).toBe(1);
  expect(uncompletedTasks[1].id).toBe(3);
});