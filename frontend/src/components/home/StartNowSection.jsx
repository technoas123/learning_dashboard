import { Link } from 'react-router-dom';

export default function StartNowSection() {
  return (
    <section className="bg-gradient-to-br from-accent to-primary/80 text-white py-20 px-6 text-center rounded-3xl shadow-xl max-w-4xl mx-auto my-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary/30 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/30 rounded-full blur-2xl -z-10" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 drop-shadow-lg">
        Ready to Learn Smarter?
      </h2>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-black/80">
        Join LearnCraft today and take control of your learning journey — with progress tracking, assignments, and a gamified dashboard!
      </p>
      <Link
        to="/signup"
        className="inline-block px-10 py-4 bg-white text-accent font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 text-lg"
      >
        Get Started Now
      </Link>
    </section>
  );
}
