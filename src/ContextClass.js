import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default class ContextClass extends Component {
  static contextType = ThemeContext;

  render() {
    const {
      isThemeLight,
      dark,
      light,
      tastesLikeChicken,
      toggleTheme,
      toggleChicken
    } = this.context;

    return (
      <div
        style={{
          backgroundColor: isThemeLight ? light.background : dark.background,
          color: isThemeLight ? light.foreground : dark.foreground
        }}
      >
        <h2>
          Class context: theme is {isThemeLight ? "light" : "dark"} and it does{" "}
          {!tastesLikeChicken && "not"} taste like chicken
        </h2>
        <button onClick={toggleChicken}>Toggle chicken</button>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    );
  }
}
