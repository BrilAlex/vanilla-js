import {ChangeEvent, MouseEvent} from "react";

// const callbackFn = (): void => {
//   console.log("Yo!");
// };
// window.setTimeout(callbackFn, 1000);

export const User = () => {
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const nameValue = event.currentTarget.name;
    if (nameValue === "save") console.log("User was saved");
    if (nameValue === "delete") console.log("User was deleted");
  };
  const onNameChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Name was changed to: " + event.currentTarget.value);
  };
  const onAgeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Age was changed to: " + event.currentTarget.value);
  };
  const onBlurHandler = () => {
    console.log("Textarea lost focus");
  };
  const onFocusHandler = () => {
    console.log("Input was focused");
  };

  return (
    <div>
      <div>
        <textarea onChange={onNameChangeHandler} onBlur={onBlurHandler}>Alex</textarea>
      </div>
      <div>
        <input onChange={onAgeChangeHandler} onFocus={onFocusHandler} type={"number"}/>
      </div>
      <button name={"save"} onClick={onClickHandler}>+</button>
      <button name={"delete"} onClick={onClickHandler}>x</button>
    </div>
  );
};