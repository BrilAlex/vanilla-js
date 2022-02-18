import {FC, useState} from "react";

export type ManPropsType = {
  name: string
  age: number
  lessons: Array<{title: string; name?: string}>
  address: {
    street: {title: string}
  }
};

type ManComponentPropsType = {
  title: string
  man: ManPropsType
  food: Array<string>
  car: {model: string}
};

function altUseState(m: string) {
  return [m, function() {}];
}

export const ManComponent: FC<ManComponentPropsType> = ({title, man, ...props}) => {
  // const {title, man, ...restProps} = props;

  const [message, setMessage] = useState<string>("Hello");

  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      <div>{man.name}</div>
      <div>{props.car.model}</div>
    </div>
  );
};