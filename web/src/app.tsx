import useHelloWorld from './hooks/use-hello-world';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';

function App() {
  const [{ data, loading, error }, fetchData] = useHelloWorld();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage
        fetchData={fetchData}
        helloMessage={data as string} />} />
    </Routes>
  )
}

export default App;
