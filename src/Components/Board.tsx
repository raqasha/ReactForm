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

  setProperty = <State, P extends keyof State>(name: P, value: State[P]) => {
    this.setState(prev => ({ ...prev, [name]: value }));
    console.log(this.state);
  };

  render() {
    return (
      <div className="row m-1">
        <div className="col-12 card">
          qwerty
          <div className="row m-1">
            <B setProperty={this.setProperty} options={options} />
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
