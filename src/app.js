// import loadAbout from 'bundle-loader?lazy!./loadAbout';
// import loadDashboard from 'bundle-loader?lazy!./loadDashboard';
// import { BrowserRouter, Route, Link } from 'react-router-dom'

// // components load their module for initial visit
// const About = props => (
//   <Bundle load={loadAbout}>{About => <About {...props} />}</Bundle>
// );

// const Dashboard = props => (
//   <Bundle load={loadDashboard}>{Dashboard => <Dashboard {...props} />}</Bundle>
// );

// export default class App extends React.Component {
//   componentDidMount() {
//     // preloads the rest
//     loadAbout(() => {});
//     loadDashboard(() => {});
//   }

//   render() {
//     return (
//       <div>
//         <h1>Welcome!</h1>
//         <Route path="/about" component={About} />
//         <Route path="/dashboard" component={Dashboard} />
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from './container/home/components';
const Home = () => <div>Home</div>

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}
export default App;
