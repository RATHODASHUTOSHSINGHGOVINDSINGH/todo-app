import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Todo from './Todo';

 
function App() {
  
  return (
    <div className="flex flex-col p-0 -m-8  bg-purple-800 w-screen min-h-screen
">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      </BrowserRouter>
      <Todo/>
    </div>
  )
}

export default App
