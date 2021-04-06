import React from "react";
class Page1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Page1...</h2>
        <Component1 onColorChange={() => this.colorChange()}></Component1>
        <Component2
          setColorChange={(change) => (this.colorChange = change)}
        ></Component2>
      </div>
    );
  }
}

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h3>Component1...</h3>
        <button onClick={this.props.onColorChange}>Change Color</button>
      </div>
    );
  }
}

class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
    this.changeColor = this.changeColor.bind(this);
    this.props.setColorChange(this.changeColor);
  }

  changeColor() {
    this.setState({ color: "blue" });
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <h3>Component2...</h3>
      </div>
    );
  }
}
export default Page1;