import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance';
import Navbar from '../components/home/Navbar';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'learner',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const { confirmPassword, ...submitData } = formData;
      const res = await axios.post('/auth/register', submitData);
      setSuccess('Account created! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] via-[#1a1a1a] to-secondary/30 text-text px-4">
        <div className="bg-[#18181b] p-10 rounded-3xl shadow-2xl w-full max-w-md border border-secondary/30 relative flex flex-col gap-6">
            <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl -z-10" />

            <h2 className="text-3xl font-extrabold text-primary mb-2 text-center drop-shadow-lg">Create an Account</h2>
            <p className="text-secondary text-center mb-2">Sign up to start your learning journey!</p>
            {error && <div className="bg-red-600 text-white p-2 mb-2 rounded text-center text-sm">{error}</div>}
            {success && <div className="bg-green-600 text-white p-2 mb-2 rounded text-center text-sm">{success}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#23232a] border border-secondary/30 text-white focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#23232a] border border-secondary/30 text-white focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Create Password (min 8 chars)"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#23232a] border border-secondary/30 text-white focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                required
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#23232a] border border-secondary/30 text-white focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                required
            />
            <div className="relative mb-2">
                <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 rounded-xl bg-[#23232a] border border-secondary/30 text-white text-base appearance-none focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                <option value="learner">👨‍🎓 Learner</option>
                <option value="educator">🧑‍🏫 Educator</option>
                <option value="coordinator">🗂️ Coordinator</option>
                </select>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </span>
            </div>
            <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 text-lg mt-2 disabled:opacity-60"
                disabled={loading}
            >
                {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            </form>
            <p className="text-sm text-secondary mt-2 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-accent hover:underline">
                Log in
            </Link>
            </p>
        </div>
        </div>
    </div>
  );
}
