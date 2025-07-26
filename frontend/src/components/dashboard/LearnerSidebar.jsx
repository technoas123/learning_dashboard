import { Link, useLocation } from 'react-router-dom';

export default function LearnerSidebar() {
  const location = useLocation();

  const links = [
    { to: '/learner', label: 'Dashboard' },
    { to: '/learner/courses', label: 'My Courses' },
    { to: '/learner/assignments', label: 'Assignments' },
    { to: '/learner/progress', label: 'Progress' },
  ];

  return (
    <aside className="w-64 bg-secondary text-white min-h-screen p-6 space-y-4">
      <h2 className="text-xl font-bold text-primary mb-6">LearnCraft</h2>

      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`py-2 px-4 rounded hover:bg-accent/30 transition ${
              location.pathname === link.to ? 'bg-accent/50' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
