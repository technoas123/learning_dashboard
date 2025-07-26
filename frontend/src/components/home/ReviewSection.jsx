

const reviews = [
  {
    name: 'Arjun R.',
    role: 'Final Year ECE Student',
    quote: 'LearnCraft helped me structure my learning, stay on track, and get mentor feedback – all in one place!',
    avatar: 'https://ui-avatars.com/api/?name=Arjun+R.&background=7c99a2&color=fff',
    rating: 5,
  },
  {
    name: 'Sneha M.',
    role: 'Peer Educator',
    quote: 'The dashboard is smooth, intuitive, and makes teaching way more fun than spreadsheets!',
    avatar: 'https://ui-avatars.com/api/?name=Sneha+M.&background=7c99a2&color=fff',
    rating: 5,
  },
  {
    name: 'Rahul D.',
    role: 'Placement Coordinator',
    quote: 'As a coordinator, I can now track student progress and suggest improvements based on actual data.',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+D.&background=7c99a2&color=fff',
    rating: 4,
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-[#0c0c0c] text-text py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-10 drop-shadow-lg">
        What People Are Saying
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#121212] to-secondary/20 border border-secondary rounded-2xl p-8 text-center shadow-xl hover:scale-[1.04] hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          >
            <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full mb-4 border-2 border-accent shadow" />
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? 'text-accent' : 'text-gray-700'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </div>
            <p className="text-base italic text-secondary mb-4">“{review.quote}”</p>
            <h3 className="text-accent font-semibold text-lg mb-1">{review.name}</h3>
            <span className="text-xs text-gray-400 mb-2">{review.role}</span>
            <div className="w-8 h-1 bg-accent rounded-full mt-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
