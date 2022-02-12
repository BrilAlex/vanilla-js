const ages = [18, 20, 22, 1, 100, 90, 14];

// > 90
export const predicate = (age: number) => {
  return age > 90;
};

type CourseType = {
  title: string
  price: number
};

const courses = [
  {title: "CSS", price: 110},
  {title: "JS", price: 200},
  {title: "React", price: 150}
];

// > 160
export const cheapPredicate = (course: CourseType) => {
  return course.price < 160;
};