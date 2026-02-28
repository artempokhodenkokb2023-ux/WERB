import Header from './components/Header';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        
        {/* Sidebar */}
        <aside className="space-y-10 md:col-span-1">
          <Contacts />
          <Skills />
        </aside>

        {/* Main Content */}
        <section className="space-y-10 md:col-span-2">
          <Profile />
          <Experience />
          <Education />
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;