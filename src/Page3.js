import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

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

store.subscribe(function () {
  if (store.getState().color === "blue") {
    const div = document.getElementById("component2");
    div.style.background = "blue";
  }
});

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
    const changeColorAction = {
      type: "CHANGE_COLOR",
    };
    store.dispatch(changeColorAction);
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
    <div id="component2">
      <h3>Component2...</h3>
    </div>
  );
}
export default Page3;