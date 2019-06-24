import React, { Component } from "react";
import B from "../Components/B";
import C from "../Components/C";

const options = [
  { label: "rock", value: "Rock" },
  { label: "folk", value: "Folk" },
  { label: "pop", value: "Pop" },
  { label: "blues", value: "Blues" }
];

class Board extends Component<{}> {
  state = {
    name: "",
    surname: "",
    genre: "",
    whatever: false
  };

  // constructor(props: {}) {
  //   super(props);

  //   this.state = {
  //     name: "",
  //     surname: "",
  //     genre: ""
  //   };

  //   const t = []; // chodzi o zasięg
  // }

  // changeName = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
  //   type k = keyof HTMLInputElement;
  //   type t = Pick<HTMLInputElement, "accept" | "align">;
  //   this.setState({ name: value });
  // };

  // changeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({ surname: e.target.value });
  // };

  setProperty = (name: string, value: string) => {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
    console.log(this.state);
  };

  setCheckbox = (name: string, checked: boolean) => {
    var obj = {};
    obj[name] = checked;
    this.setState(obj);
    console.log(this.state);
  };

  // componentDidMount() {}

  render() {
    return (
      <div className="row m-1">
        <div className="col-12 card">
          qwerty
          <div className="row m-1">
            <B setProperty={this.setProperty} options={options} setCheckbox={this.setCheckbox} />
            <C
              name={this.state.name}
              surname={this.state.surname}
              genre={this.state.genre}
              whatever={this.state.whatever}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
