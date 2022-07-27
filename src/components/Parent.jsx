import React from "react";
import Child from "./Child";
import Children from "./Children";
class Parent extends React.Component {
  printVal = (val) => {
    console.log(val);
  };

  //  toCelsius(fahrenheit) {

  //   }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <Child fun={this.printVal} />
        <Children children={<p>hello</p>} />
      </div>
    );
  }
}
export default Parent;
