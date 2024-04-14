import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import Dashboard from '../Screens/Dashboard/Dashboard';


const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const authToken = useSelector((state:any) => state.persistedReducer?.authSlice?.authData?.token);
  if (!authToken) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

const RouterFile = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
    <Routes>
      <Route element={<ProtectedRoute/>}>
     
          <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>

  </Router>
);

export default RouterFile;
