export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-secondary/30 text-text text-sm px-8 py-8 rounded-none shadow-xl w-full mt-16 mb-0 flex flex-col items-center justify-center space-y-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />

      <p className="text-secondary text-base font-medium">&copy; {new Date().getFullYear()} LearnCraft. Built by <span className="text-accent font-bold">Ahammed Salahuddeen</span>.</p>
      <div className="flex gap-6 text-accent text-xl mt-2">
        <a
          href="https://github.com/technoas123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition flex items-center gap-2"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          <span className="hidden md:inline">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ahammed-salahuddeen-4128bb229/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition flex items-center gap-2"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2 3.597 4.59v5.606z"/></svg>
          <span className="hidden md:inline">LinkedIn</span>
        </a>
        <a
          href="mailto:ahammedsalahuddeen@gmail.com"
          className="hover:text-primary transition flex items-center gap-2"
          aria-label="Contact"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/></svg>
          <span className="hidden md:inline">Contact</span>
        </a>
      </div>
    </footer>
  );
}
