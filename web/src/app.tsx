import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { HostProvider } from './providers/host-context-provider';

function App() {
  return (
    <HostProvider hostUrl={process.env.REACT_APP_HELLO_API_HOST as string}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </HostProvider>
  )
}

export default App;
