import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './pages/learner/DashboardHome';
import MyCourses from './pages/learner/MyCourses';
import Assignments from './pages/learner/Assignments';
import Progress from './pages/learner/Progress';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

import AdminDashboard from './pages/admin/AdminDashboard';
import EducatorDashboard from './pages/educator/EducatorDashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Learner Dashboard with Nested Routes */}
          <Route
            path="/learner"
            element={
              <ProtectedRoute>
                <DashboardLayout /> {/* This must render <Outlet /> */}
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="progress" element={<Progress />} />
          </Route>

          {/* Educator Route */}
          <Route
            path="/educator"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <EducatorDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AdminDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;