import React from "react";
class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.component2 = React.createRef();
  }

  changeColor = () => {
    this.component2.current.changeColor();
  };
  render() {
    return (
      <div>
        <h2>Page1...</h2>
        <Component1 onColorChange={this.changeColor}></Component1>
        <Component2 ref={this.component2}></Component2>
      </div>
    );
  }
}

class Component1 extends React.Component {
  changeColor = () => {
    this.props.onColorChange();
  };

  render() {
    return (
      <div>
        <h3>Component1...</h3>
        <button onClick={this.changeColor}>Change Color</button>
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
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <h3>Component2...</h3>
      </div>
    );
  }
}
export default Page1;
