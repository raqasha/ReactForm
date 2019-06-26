import React from "react";
import { Field, FieldProps } from "formik";

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
      <Field
        name={props.name}
        render={({ field }: FieldProps) => (
          <input {...field} type="text" id={props.id} placeholder={props.placeholder} />
        )}
      />
    </div>
  );
};

export default Input;
