import {StudentType} from "../02_objects/02";

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  });
};

export const makeStudentActive = (st: StudentType) => {
  st.isActive = true;
};

export const doesStudentLiveIn = function(st: StudentType, cityName: string) {
  return st.address.city.title === cityName;
};