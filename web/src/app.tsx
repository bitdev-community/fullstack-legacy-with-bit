import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { GreetingsProvider } from './providers/greetings-provider';

function App() {
  return (
    <GreetingsProvider baseURL={process.env.REACT_APP_HELLO_API_HOST as string}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </GreetingsProvider>
  )
}

export default App;
