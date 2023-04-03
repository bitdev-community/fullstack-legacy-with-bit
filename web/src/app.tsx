import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { HelloWorldProvider } from './providers/greetings-provider';

function App() {
  return (
    <HelloWorldProvider baseURL={process.env.REACT_APP_HELLO_API_HOST as string}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </HelloWorldProvider>
  )
}

export default App;
