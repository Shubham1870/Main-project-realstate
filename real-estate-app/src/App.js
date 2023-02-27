import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
          <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<SignIn />}></Route>
                    <Route path="/SignUp" element={<SignUp />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    </div>
  );
}

export default App;
