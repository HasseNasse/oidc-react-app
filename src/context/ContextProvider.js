import React, { Component } from "react";

// CONTEXT
export const AppContext = React.createContext();

class ContextProvider extends Component {
  state = {
    isAuthenticated: false,
    authToken: ""
  };

  // ACTIONS
  setIsAuthenticated = isAuth => {
    this.setState(() => {
      return { isAuthenticated: isAuth };
    });
  };

  setAuthToken = token => {
    this.setState({ authToken: token });
  };

  render() {
    const store = {
      ...this.state,
      setIsAuthenticated: this.setIsAuthenticated,
      setAuthToken: this.setAuthToken
    };

    return (
      <AppContext.Provider value={store}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;