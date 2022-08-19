import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmpList from './components/dashboard/emplist';
import Asheet from './components/dashboard/asheet';
import CommingSoon from './components/dashboard/commingsoon';
import Sidebar from './components/dashboard/sidebar';


function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/emplist' exact element={<EmpList />} />
          <Route path='/asheet' exact element={<Asheet />} />
          <Route path='/leavemanagent' exact element={<CommingSoon />} />
          <Route path='/prjmanagement' exact element={<CommingSoon />} />
          <Route path='/asstmanagement' exact element={<CommingSoon />} />
          <Route path='/complaints' exact element={<CommingSoon />} />
          <Route path='/appraisals' exact element={<CommingSoon />} />
          <Route path='/salaries' exact element={<CommingSoon />} />
          <Route path='/stickets' exact element={<CommingSoon />} />
          <Route path='/sidebar' exact element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
