import React, { createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: {
        foreground: "gray",
        background: "lightblue"
      },
      dark: {
        foreground: "white",
        background: "blue"
      },
      isThemeLight: true,
      tastesLikeChicken: true
    };
  }

  toggleTheme = () => {
    this.setState({ isThemeLight: !this.state.isThemeLight });
  };

  toggleChicken = () => {
    this.setState({ tastesLikeChicken: !this.state.tastesLikeChicken });
  };

  render() {
    const { light, dark, isThemeLight, tastesLikeChicken } = this.state;

    return (
      <ThemeContext.Provider
        value={{
          light,
          dark,
          isThemeLight,
          tastesLikeChicken,
          toggleTheme: this.toggleTheme,
          toggleChicken: this.toggleChicken
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
