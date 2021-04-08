import React, { useState } from "react";

function Page2() {
  const [component2Color, setColor] = useState();
  function changeColor() {
    setColor("blue");
  }
  return (
    <div>
      <h2>Page2...</h2>
      <Component1 onColorChange={changeColor}></Component1>
      <Component2 color={component2Color}></Component2>
    </div>
  );
}

function Component1(props) {
  return (
    <div>
      <h3>Component1...</h3>
      <button onClick={props.onColorChange}>Change Color</button>
    </div>
  );
}

function Component2(props) {
  return (
    <div style={{ backgroundColor: props.color }}>
      <h3>Component2...</h3>
    </div>
  );
}
export default Page2;
