import React from "react";
class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component2Color: "",
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({ component2Color: "blue" });
  }
  render() {
    return (
      <div>
        <h2>Page1...</h2>
        <Component1 onColorChange={this.changeColor}></Component1>
        <Component2 color={this.state.component2Color}></Component2>
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
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        <h3>Component2...</h3>
      </div>
    );
  }
}
export default Page1;
