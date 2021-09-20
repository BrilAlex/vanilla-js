import {StudentType} from "../02-objects/02";

export const addSkill = (st: StudentType, skillName: string) => {
    st.technologies.push(
        {id: 10000, title: skillName}
    );
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const checkAddressCity = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName;
}