import { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from '../components/home/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      toast.error('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
    if (password.length < 4) { // Changed from 8 to match your validation message
      setError('Password must be at least 4 characters long.');
      toast.error('Password must be at least 4 characters long.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post('/auth/login', {
        email,
        password
      }, {
        withCredentials: true // Crucial for cookies
      });

      toast.success('Login successful! Redirecting...');
      
      // Store user data if needed
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // Redirect based on role
      setTimeout(() => {
        const role = res.data.user.role;
        if (role === 'admin') navigate('/admin');
        else if (role === 'educator') navigate('/educator/dashboard');
        else navigate('/learner/dashboard');
      }, 1500); // Added delay for toast visibility

    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                         err.message || 
                         'Login failed';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#1a1a1a] to-secondary/30 flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-[#18181b] p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col gap-6 border border-secondary/30 relative"
        >
          <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-full blur-2xl -z-10" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl -z-10" />

          <h2 className="text-3xl font-extrabold mb-2 text-center text-primary drop-shadow-lg">
            Sign In
          </h2>
          
          <p className="text-secondary text-center mb-2">
            Welcome back! Please login to your account.
          </p>
          
          {error && (
            <div className="bg-red-600 text-white p-2 mb-2 rounded text-center text-sm">
              {error}
            </div>
          )}
          
          <input
            type="email"
            placeholder="Email address"
            value={email}
            className="w-full p-3 bg-[#23232a] text-white rounded-xl border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary mb-2"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            placeholder="Password (min 4 chars)"
            value={password}
            className="w-full p-3 bg-[#23232a] text-white rounded-xl border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary mb-2"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={4}
          />
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-primary hover:bg-accent text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 text-lg mt-2 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;