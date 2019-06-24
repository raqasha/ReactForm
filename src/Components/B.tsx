import React from "react";
import D from "../Components/D";
import { SelectElement } from "../Components/SelectInput";

interface Props {
  setProperty: (name: string, value: string) => void;
  setCheckbox: (name: string, checked: boolean) => void;
  options: SelectElement[];
}

const B = (props: Props) => {
  return (
    <div className="col-6 card">
      <div className="row m-1">
        <D setProperty={props.setProperty} options={props.options} setCheckbox={props.setCheckbox} />
      </div>
    </div>
  );
};

export default B;
