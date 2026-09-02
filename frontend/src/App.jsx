import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Problems from './pages/Problems';
import Workspace from './pages/Workspace';
import Profile from './pages/Profile';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import SuperadminDashboard from './pages/SuperadminDashboard';
import { ToastProvider } from './components/Toast';

const UserRoute = ({ children }) => {
  const { isUser, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return isUser ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return isAuthenticated && isAdmin ? children : <Navigate to="/admin/login" />;
};

const SuperadminRoute = ({ children }) => {
  const { isAuthenticated, isSuperAdmin, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return isAuthenticated && isSuperAdmin ? children : <Navigate to="/admin/login" />;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isWorkspace = location.pathname.startsWith('/workspace');
  const isMarketing = ['/', '/about', '/contact'].includes(location.pathname);

  return (
    <>
      <Navbar />
      <main
        className={
          isWorkspace ? 'workspace-page' : isMarketing ? 'full-page' : 'page-container'
        }
        style={
          isWorkspace
            ? { minHeight: 'calc(100vh - 70px)', padding: 0, paddingTop: '70px', maxWidth: 'none' }
            : isMarketing
              ? { minHeight: 'calc(100vh - 70px)', padding: 0, paddingTop: '70px', maxWidth: 'none' }
              : { minHeight: 'calc(100vh - 70px)', paddingTop: '80px' }
        }
      >
        {children}
      </main>
      {!isWorkspace && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Auth mode="login" />} />
              <Route path="/register" element={<Auth mode="register" />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin/login" element={<Auth adminOnly />} />
              <Route path="/admin-login" element={<Auth adminOnly />} />
              <Route path="/vikash" element={<Auth adminOnly />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/workspace/:id" element={<Workspace />} />
              
              <Route path="/profile" element={
                <UserRoute><Profile /></UserRoute>
              } />

              <Route path="/settings" element={
                <UserRoute><Settings /></UserRoute>
              } />
              
              <Route path="/admin" element={
                <AdminRoute><AdminDashboard /></AdminRoute>
              } />
              
              <Route path="/superadmin" element={
                <SuperadminRoute><SuperadminDashboard /></SuperadminRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;
