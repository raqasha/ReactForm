import React from "react";
import E from "../Components/E";

interface Props {
  name: string;
  surname: string;
  genre: string;
  whatever: boolean;
}

const C = (props: Props) => {
  return (
    <div className="col-6 card">
      <div className="row m-1">
        <E {...props} />
      </div>
    </div>
  );
};

export default C;
