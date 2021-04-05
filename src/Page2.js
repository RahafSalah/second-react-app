import React, { useState, useContext } from "react";

const page2Context = React.createContext();
function Page2() {
  const [color, changeColor] = useState();

  return (
    <div>
      <h2>Page2...</h2>
      <page2Context.Provider
        value={{ data: color, onChangeColor: changeColor }}
      >
        <Component1></Component1>
        <Component2></Component2>
      </page2Context.Provider>
    </div>
  );
}

function Component1() {
  let context = useContext(page2Context);
  function changeColor() {
    context.onChangeColor("blue");
  }

  return (
    <div>
      <h3>Component1...</h3>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

function Component2() {
  let context = useContext(page2Context);
  return (
    <div style={{ backgroundColor: context.data }}>
      <h3>Component2...</h3>
    </div>
  );
}
export default Page2;
