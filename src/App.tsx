import { useEffect, useState, Suspense, Component, ErrorInfo, ReactNode } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import './styles/global.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

// Error Boundary Class Component
class ErrorBoundary extends Component<{ children: ReactNode, fallback?: ReactNode }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>An unexpected error occurred. Please try again later.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Layout component to wrap all pages
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route - redirects to home if no match is found */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </Layout>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
