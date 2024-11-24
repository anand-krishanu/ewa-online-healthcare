import './App.css'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';


function App() {

  return (
    <div className=''>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element= {<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
