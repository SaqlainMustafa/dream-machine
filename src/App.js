import './App.scss';
import './index.css';
import './Variables.scss'
import Home from './components/Home';
import Profile from './components/Profile';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/profile" element={<Profile />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
