import React from "react";

const ThemeContext = React.createContext("light");
class ThemeButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    return <button theme={this.context}>子按钮</button>;
  }
}

export default ThemeButton;
