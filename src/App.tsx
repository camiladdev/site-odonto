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

      <div className="bg-slate-900 text-slate-200 text-center py-2 px-4 text-xs sm:text-sm font-medium w-full flex items-center justify-center gap-2 z-50">
        <span>⚠️</span>
        <p>
          <strong>AVISO:</strong> Este é um site fictício criado exclusivamente para fins de demonstração de portfólio.
        </p>
      </div>
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
