import React from "react";

interface Props {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput = (props: Props) => {
  return (
    <div>
      <input type="checkbox" id={props.id} name={props.name} onChange={props.onChange} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default CheckboxInput;
