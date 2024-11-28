import './App.css'
import Header from './Header/header'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import RegistrationPage from './Auth/Registeration';
import LoginPage from './Auth/Login';
import SpecialistList from './Specialist/SpecialistList';
import Booking from './Booking/Booking';
import ProfilePage from './Profile/Profile';
import BookingForm from './Booking/BookingForm';


function App() {

  return (
    <div className=''>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element = {<Home />} />
          <Route exact path='/register' element = {<RegistrationPage />} />
          <Route exact path='/login' element = {<LoginPage />} />
          <Route exact path='/allSpecialists' element = {<SpecialistList />} />
          <Route exact path='/booking' element = {< Booking />} />
          <Route exact path='/profile' element = {<ProfilePage />} />
          <Route exact path='/bookingForm' element = {<BookingForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
