import logo from './logo.svg';
import './App.css';

import Profile from './profile';
import Interests from './interests';
import Learn from './learn';
import Expectations from './expectations';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Profile />
        <Interests />
        <Learn />
      </div>
      <div className="row">
        <Expectations />
        <div className="empty"></div>
      </div>
    </div>
  );
}

export default App;
