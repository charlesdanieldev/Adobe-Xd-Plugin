import React, { Component } from "react";

class BoxFurniture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {angle,x,y} = this.props;
    let test = `translate(${x} ${y})`;
    return (
      <g>
        <path
          fill="#39353d"
          d="M20.992 7.766v-.008a.449.449 0 0 0-.027-.147c0-.012-.009-.023-.014-.034a.45.45 0 0 0-.078-.124l-.006-.009a.454.454 0 0 0-.092-.075.4.4 0 0 0-.038-.017c-.006 0-.01-.009-.016-.011L4.292.039A.456.456 0 0 0 3.9.048L.252 1.874c-.005 0-.008.008-.014.01s-.021.009-.031.016a.475.475 0 0 0-.093.082C.109 1.987.1 1.994.1 2a.457.457 0 0 0-.067.119c0 .01-.008.02-.012.03A.471.471 0 0 0 0 2.282v10.952a.456.456 0 0 0 .271.417l5.483 2.437 5.475 2.433 5.471 2.432h.021a.45.45 0 0 0 .164.035.456.456 0 0 0 .115-.013c.012 0 .023-.008.034-.012a.436.436 0 0 0 .052-.019l3.651-1.825a.457.457 0 0 0 .252-.408zM4.119.96l15.348 6.822-2.594 1.3-5.286-2.35L6.111 4.3 1.525 2.258zm2.27 8.94V5.418l4.564 2.028v4.478zm4.564 3.026V17.4l-4.564-2.028v-4.478zM.913 2.984l4.563 2.028V9.49L.913 7.461zm10.952 4.867l4.564 2.029v4.478l-4.564-2.028zM.913 8.46l4.564 2.028v4.478L.913 12.937zm10.953 9.345v-4.477l4.564 2.028v4.478zm8.214.623L17.342 19.8V9.865L20.08 8.5zm0 0"
          transform = {test}
        />
      </g>
    );
  }
}

export default BoxFurniture;