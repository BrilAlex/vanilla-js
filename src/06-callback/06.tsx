import React, {ChangeEvent, MouseEvent, FocusEvent} from "react";
import {HouseType} from "../02-objects/02_02";

export const createMessageForStreet = (houses: HouseType[]) => {
    const callbackFn = (h: HouseType) => {
        return `Hello guys from ${h.address.street.title}!`
    };
    let newArray = houses.map(callbackFn);
    return newArray;
}

/*const callback = (): number => {
    alert("Hello world");
    return 12;
};
window.setTimeout(callback, 1000)*/

export const User = () => {
    const deleteUser = () => {
        alert("User deleted");
    }
    const saveUser = () => {
        alert("User saved");
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Textarea changed. New value: " + event.currentTarget.value);
    }
    function onFocusHandler(e: FocusEvent<HTMLInputElement>) {
        console.log(`Input focused. Value: ${e.currentTarget.value}`);
    }
    function onBlurHandler(e: FocusEvent<HTMLInputElement>) {
        console.log(`Input lost focus. Value: ${e.currentTarget.value}`);
    }
    function onClickHandler(e: MouseEvent<HTMLButtonElement>) {
        console.log(e.currentTarget.name);
    }

    return <div>
        <textarea onChange={onChangeHandler}>Dimych</textarea>
        <input type="number" onFocus={onFocusHandler} onBlur={onBlurHandler}/>
        <button onClick={deleteUser}>Delete</button>
        <button onClick={saveUser}>Save</button>
        <button name="Delete" onClick={onClickHandler}>X</button>
        <button name="Save" onClick={onClickHandler}>X</button>
    </div>
}