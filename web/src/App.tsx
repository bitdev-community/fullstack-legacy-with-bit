import React from 'react';
import { Button } from './ui/button';
import useHelloWorld from './hooks/use-hello-world';
import { Heading } from './ui/heading';
import cx from 'classnames';

function App() {
  const [{ data, loading, error }, fetchData] = useHelloWorld();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={cx("container")}>
      {data ? (
        <Heading>{data}</Heading>
      ) : (
        <Button onClick={fetchData}>Load Data</Button>
      )}
    </div>
  )
}

export default App;
