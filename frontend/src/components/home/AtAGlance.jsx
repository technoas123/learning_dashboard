import { BookOpenIcon, ClipboardListIcon, TrendingUpIcon, UsersIcon } from 'lucide-react'; // or use Heroicons/FontAwesome

const features = [
  {
    title: 'Track Courses',
    desc: 'Monitor your enrolled courses and stay on top of progress.',
    icon: <BookOpenIcon className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Submit Assignments',
    desc: 'Upload tasks, view feedback, and improve performance.',
    icon: <ClipboardListIcon className="w-8 h-8 text-accent" />,
  },
  {
    title: 'See Your Growth',
    desc: 'Gamified progress tracking with XP and milestones.',
    icon: <TrendingUpIcon className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Role-Based Experience',
    desc: 'Unique dashboards for learners, educators, and admins.',
    icon: <UsersIcon className="w-8 h-8 text-accent" />,
  },
];

export default function AtAGlanceSection() {
  return (
    <section className="text-text py-20 px-6 text-center relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 drop-shadow-lg">
        LearnCraft at a Glance
      </h2>
      <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl leading-relaxed mb-12">
        Discover the key features that make LearnCraft your go-to dashboard for smarter, gamified learning. Everything you need, all in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#101010] to-secondary/20 border border-secondary rounded-2xl p-8 text-center shadow-xl hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-primary">
              {feature.title}
            </h3>
            <p className="text-secondary text-base mb-4">{feature.desc}</p>
            <div className="w-10 h-1 bg-accent rounded-full mt-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
