import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. aleraly save
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React i am fine
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    const { add, decr } = this.props;
    return (
      <div className="App">
        <div>count: {this.props.count}</div>
        <button onClick={add}>+</button>
        <button onClick={decr}>-</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        count:state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch({type: 'INCREMENT'}),
        decr: () => dispatch({type: 'DECREMENT'})
    }
}

// 连接组件
export default App = connect(mapStateToProps, mapDispatchToProps)(App);

