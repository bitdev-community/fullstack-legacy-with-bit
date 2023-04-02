import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { ApiProvider } from './providers/api-provider';

function App() {
  return (
    <ApiProvider apiUrl={process.env.REACT_APP_HELLO_API_HOST as string}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </ApiProvider>
  )
}

export default App;
