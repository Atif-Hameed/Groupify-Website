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
import Team from './components/Team/Team';
import TeamGroup from './components/Team/TeamGroup';
import TeamGroupData from './components/Team/TeamGroupData';
import Posts from './components/Posts/Posts';
import NewPost from './components/Posts/NewPost';
import SendPost from './components/Posts/SendPost';
import MyAccount from './components/MyAccount/MyAccount';
import Profile from '../src/components/MyAccount/Profile';
import Extension from './components/Extension/Extension';



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
          <Route path='/teamGroups' element={<TeamGroup/>} />
          <Route path='/teamGroupData' element={<TeamGroupData/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/newPost' element={<NewPost/>} />
          <Route path='/sendPost' element={<SendPost/>} />
          <Route path='/myAccount' element={<MyAccount/>} />
          <Route path='/extension' element={<Extension/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
