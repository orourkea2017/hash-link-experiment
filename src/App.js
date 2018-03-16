import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Link,
  browserHistory,
} from 'react-router';
import Shapes from './shapes';
import Colours from './colours';
import './App.css';

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

const Container = (props) => <div className='app'>
  <Nav />
  {props.children}
</div>

const Nav = () => (
  <div className='nav'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shapes">Shapes</Link>
        <ul>
          <li><Link to="/shapes#square">Square</Link></li>
          <li><Link to="/shapes#triangle">Triangle</Link></li>
          <li><Link to="/shapes#circle">Circle</Link></li>
          <li><Link to="/shapes#semicircle">Semicircle</Link></li>
          <li><Link to="/shapes#hexagon">Hexagon</Link></li>
          <li><Link to="/shapes#heptagon">Heptagon</Link></li>
          <li><Link to="/shapes#octagon">Octagon</Link></li>
          <li><Link to="/shapes#decagon">Decagon</Link></li>
          <li><Link to="/shapes#dodecagon">Dodecagon</Link></li>
          <li><Link to="/shapes#parallelogram">Parallelogram</Link></li>
          <li><Link to="/shapes#rhombus">Rhombus</Link></li>
          <li><Link to="/shapes#dodecahedron">Dodecahedron</Link></li>
        </ul>
      </li>
      <li><Link to="/colours">Colours</Link>
        <ul>
          <li><Link to="/colours#about">About</Link></li>
          <li><Link to="/colours#lots">Lots</Link></li>
        </ul>
      </li>
    </ul>
  </div>
)

const Home = () => (
  <div>
    <h2>This is an app.</h2>
    <p>It doesn't do anything.</p>
    <p>But it will take you exactly where you wish to go.</p>
    <p>Try the menu. It tastes a bit too digital if you ask me.</p>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router onUpdate={hashLinkScroll} history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home}/>
          <Route path="/shapes" component={Shapes}/>
          <Route path="/colours" component={Colours}/>
        </Route>
      </Router>
    );
  }
}

export default App;