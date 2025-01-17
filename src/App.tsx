import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('./pages/home').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/services').then(module => ({ default: module.ServicesPage })));
const BlogPage = lazy(() => import('./pages/blog').then(module => ({ default: module.BlogPage })));
const TestimonialsPage = lazy(() => import('./pages/testimonials').then(module => ({ default: module.TestimonialsPage })));
const ProjectsPage = lazy(() => import('./pages/projects').then(module => ({ default: module.ProjectsPage })));
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
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
