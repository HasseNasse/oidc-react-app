import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ContextProvider>
          <BrowserRouter>
            <div className="App">
              <header className="App-header">
                    <Routes />
              </header>
            </div>
          </BrowserRouter>
        </ContextProvider>
      </React.Fragment>
    );
  }
}

export default App;
