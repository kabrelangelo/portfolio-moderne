import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { ServicesPage } from './pages/services';
import { BlogPage } from './pages/blog';
import { TestimonialsPage } from './pages/testimonials';
import { ProjectsPage } from './pages/projects';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ThemeProvider } from './components/theme-provider';
import './styles/theme.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground antialiased transition-colors">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;