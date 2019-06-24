import React from "react";

interface Props {
  name: string;
  surname: string;
  genre: string;
  whatever: boolean;
}

const E = (props: Props) => {
  return (
    <div className="col-12 card">
      Hello {props.name} {props.surname} {props.genre} {props.whatever.toString()}
    </div>
  );
};

export default E;
