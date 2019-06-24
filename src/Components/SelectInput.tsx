import React from "react";

export interface SelectElement {
  label: string;
  value: string;
}

interface Props {
  id: string;
  name: string;
  options: SelectElement[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ id, name, options, onChange }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <select id={id} name={name} onChange={onChange}>
        {options.map((element, index) => (
          <option key={index} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
