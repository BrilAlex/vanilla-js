import {ManType} from "./07";

let props: ManType;

beforeEach(() => {
    props = {
        name: "Alex",
        age: 34,
        lessons: [{title: 1}, {title: 2}, {title: 3}, {title: 4, name: "React"}, {title: 5}],
        address: {street: {title: "Mickevicha"}}
    }
});

test("Object destructuring", () => {

    //const age = props.age;
    //const lessons = props.lessons;
    //const {name, age, lessons, address: {street: {title}}} = props;
    const {name, age, lessons} = props;
    const {title} = props.address.street;

    expect(name).toBe("Alex")
    expect(age).toBe(34);
    expect(lessons.length).toBe(5);
    expect(title).toBe("Mickevicha");
});

test("Array destructuring", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons;
    const [ , , ls3] = props.lessons;
    const [ , , , ...restLessons] = props.lessons

    expect(l1.title).toBe(1);
    expect(l2.title).toBe(2);

    expect(ls1.title).toBe(1);
    expect(ls2.title).toBe(2);
    expect(ls3.title).toBe(3);
    expect(restLessons.length).toBe(2);
    expect(restLessons[0].title).toBe(4);
    expect(restLessons[0]).toStrictEqual({title: 4, name: "React"})
});