import React from "react";

interface Props {
  id: string;
  placeholder: string;
  name: string;
  changeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        className="form-control"
        type="text"
        name={props.name}
        id={props.id}
        onChange={props.changeEvent}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
