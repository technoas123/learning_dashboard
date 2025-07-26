export default function AboutSection() {
  return (
    <section id="about" className="text-text py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 drop-shadow-lg">
        What is LearnCraft?
      </h2>
      <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl leading-relaxed mb-10">
        LearnCraft is your all-in-one gamified dashboard for modern learning. Track progress, complete modules, submit assignments, and grow as a student — all in one intuitive platform powered by the MERN stack.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
        <div className="bg-secondary/30 rounded-xl p-6 flex flex-col items-center shadow-md w-full md:w-64">
          <span className="text-4xl mb-2">🎯</span>
          <h3 className="text-xl font-bold text-primary mb-2">Progress Tracking</h3>
          <p className="text-secondary text-base">Visualize your learning journey, set goals, and celebrate achievements as you advance.</p>
        </div>
        <div className="bg-secondary/30 rounded-xl p-6 flex flex-col items-center shadow-md w-full md:w-64">
          <span className="text-4xl mb-2">📝</span>
          <h3 className="text-xl font-bold text-primary mb-2">Assignments & Feedback</h3>
          <p className="text-secondary text-base">Submit answers, get reviewed by educators, and improve with actionable feedback.</p>
        </div>
        <div className="bg-secondary/30 rounded-xl p-6 flex flex-col items-center shadow-md w-full md:w-64">
          <span className="text-4xl mb-2">🏆</span>
          <h3 className="text-xl font-bold text-primary mb-2">Gamified Experience</h3>
          <p className="text-secondary text-base">Earn badges, unlock levels, and stay motivated with a fun, interactive dashboard.</p>
        </div>
      </div>
    </section>
  );
}
