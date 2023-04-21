
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Users from "./Pages/Users/Users"
import Home from './Pages/Home/Home';

function App() {
  return(
    <BrowserRouter>
      <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          
        
      </Routes>
    </BrowserRouter>
  )

}




export default App;
