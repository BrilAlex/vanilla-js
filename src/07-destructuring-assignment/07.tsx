import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: number; name?: string}>
    address: {street: {title: string}}
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {brand: string; model: string}
}

function useDimychState(m: string) {
    return [m, function() {}]
}

function useDimychState2(m: string) {
    return {message: m, setMessage: function() {}}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    //const {title, man, ...restProps} = props;

    const [message, setMessage] = useState<string>("Hello world!");

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.brand}</div>
        </div>
    );
}