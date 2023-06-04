import React from 'react';
import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../src/components/Login/SignIn';
import SignInEmail from './components/Login/SignInEmail';
import ForgotPass from './components/Login/ForgotPass';
import SendMailPass from './components/Login/SendMailPass';
import SignUp from './components/Login/SignUp';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import DashBoard from './components/Dashboard/DashBoard';
import SideBar from './components/Dashboard/Sidebar';
import Groups from './components/Groups/Groups';
import HighlvlGrop from './components/Groups/HighlvlGrops';
import SalesGrop from './components/Groups/SalesGrop';
import Team from './components/Team/Team';



const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signemail' element={<SignInEmail />} />
          <Route path='/forgotPass' element={<ForgotPass />} />
          <Route path='/sendMailPass' element={<SendMailPass />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/sidebar' element={<SideBar />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/highlvlGrop' element={<HighlvlGrop/>} />
          <Route path='/team' element={<Team/>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
