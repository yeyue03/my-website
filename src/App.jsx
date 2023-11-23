import React, { Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import './mock';

import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    );
  }
}

export default App;
