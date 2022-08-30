import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmpList from './components/dashboard/emplist';
import Asheet from './components/dashboard/asheet';
import CommingSoon from './components/dashboard/commingsoon';
import Sidebar from './components/dashboard/sidebar';
import CreateEmployee from './components/dashboard/createemploye';
import ProjectMangement from './components/dashboard/projectmangement';
import CreateProject from './components/dashboard/projectmangement/createproject';
import LeaveManagement from './components/dashboard/leavemangement';


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
          <Route path='/leavemanagent' exact element={<LeaveManagement />} />
          <Route path='/prjmanagement' exact element={<CreateProject />} />
          <Route path='/asstmanagement' exact element={<CommingSoon />} />
          <Route path='/complaints' exact element={<CommingSoon />} />
          <Route path='/appraisals' exact element={<CommingSoon />} />
          <Route path='/salaries' exact element={<CommingSoon />} />
          <Route path='/stickets' exact element={<CommingSoon />} />
          <Route path='/sidebar' exact element={<Sidebar />} />
          <Route path='/createemploye' exact element={<CreateEmployee />} />
          {/* <Route path='/createproject' exact element={<ProjectMangement />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
