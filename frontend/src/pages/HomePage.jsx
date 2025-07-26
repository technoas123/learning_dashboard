import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import AtAGlance from '../components/home/AtAGlance';
import ReviewSection from '../components/home/ReviewSection';
import StartNowSection from '../components/home/StartNowSection';
import Footer from '../components/home/Footer';
import '../styles/theme.css';

export default function HomePage() {
  return (
    <div className="text-text font-sans min-h-screen relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AtAGlance />
      <ReviewSection />
      <StartNowSection />
      <Footer />
    </div>
  );
}
