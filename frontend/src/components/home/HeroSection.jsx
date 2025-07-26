import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section
      className="text-text flex flex-col items-center justify-center text-center px-4 py-24 relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10" />

      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary drop-shadow-lg">
        Level Up Your Learning 
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl text-secondary mb-8 font-medium">
        Welcome to LearnCraft, your personalized dashboard for smarter, gamified learning. Track your progress, earn achievements, and unlock your full potential with every lesson.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          to="/login"
          className="px-8 py-4 bg-primary text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-accent hover:scale-105 transition-all duration-300"
        >
          Continue Learning
        </Link>
        <Link
          to="/signup"
          className="px-8 py-4 bg-primary text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-accent hover:scale-105 transition-all duration-300"
        >
          Create Account
        </Link>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <span className="text-sm text-gray-500">No credit card required. Start learning instantly!</span>
      </div>
    </section>
  );
}
