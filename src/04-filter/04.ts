const ages = [18, 20, 22, 1, 100, 90, 14];

// >90
export const predicateAge = (age: number) => {
    return age >90;
}

const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
];

// < 160
export const predicateCheap = (course: CourseType) => {
    return course.price < 160;
};

const cheapCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150}
];