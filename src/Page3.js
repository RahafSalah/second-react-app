import React from "react";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";

const page3Data = {
  color: "",
};

const reducer = (state = page3Data, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};
const store = createStore(reducer);

function Page3() {
  return (
    <div>
      <h2>Page3...</h2>
      <Provider store={store}>
        <Component1></Component1>
        <Component2></Component2>
      </Provider>
    </div>
  );
}

function Component1(props) {
  function changeColor() {
    store.dispatch({ type: "CHANGE_COLOR" });
  }

  return (
    <div>
      <h3>Component1...</h3>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

function Component2(props) {
  return (
    <div style={{ backgroundColor: useSelector((state) => state.color) }}>
      <h3>Component2...</h3>
    </div>
  );
}
export default Page3;
