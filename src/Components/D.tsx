import React from "react";
import Input from "../Components/Input";
import SelectInput, { SelectElement } from "../Components/SelectInput";
import CheckboxInput from "../Components/CheckboxInput";

interface Props {
  setProperty: (name: string, value: string) => void;
  setCheckbox: (name: string, checked: boolean) => void;
  options: SelectElement[];
}

const D = ({ setProperty, options, setCheckbox }: Props) => {
  // const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setProperty(e.target.name, e.target.value);
  // };

  const changeValue = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setProperty(name, value);
  };

  const selectOnChange = ({ target: { name, value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setProperty(name, value);
  };

  const changeCheckbox = ({ target: { name, checked } }: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(name, checked);
    console.log(checked);
  };

  return (
    <div className="col-12 card">
      <Input id="name" placeholder="Wpisz imię" name="name" changeEvent={changeValue} />

      <Input
        id="surname"
        placeholder="Wpisz nazwisko"
        name="surname"
        changeEvent={({ target: { name, value } }) => {
          setProperty(name, value);
        }}
      />

      <SelectInput id="genre" name="genre" options={options} onChange={selectOnChange} />

      <CheckboxInput id="whatever" name="whatever" label="No elo!" onChange={changeCheckbox} />
    </div>
  );
};

export default D;
