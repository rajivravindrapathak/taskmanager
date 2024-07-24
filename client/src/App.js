import './App.css';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskBoard from './components/TaskBoard';
import './assets/css/style.scss'
import HomePage from './components/Homepage';
// import '../src/assets/css/style.scss'

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Header />
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/tasks" element={ <TaskBoard /> } />
          {/* <Route path="/" exact element={() => <div>Home Page</div>} /> */}
          <Route path="/" element={ <HomePage /> } />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
