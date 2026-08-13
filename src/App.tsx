import Header from './components/Header';
import Hero from './components/Hero';
import SmileDivider from './components/SmileDivider';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <SmileDivider />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}
