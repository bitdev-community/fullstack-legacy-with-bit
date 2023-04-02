import cx from 'classnames';
import { Button } from '../../ui/button';
import { Heading } from '../../ui/heading';
import useHelloWorld from '../../hooks/use-hello-world';
import './landing-page.scss'
import { HTMLAttributes } from 'react';

export type LandingPageProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>

export const LandingPage = ({className, ...rest}: LandingPageProps) => {
  const [{ data, loading, error }, fetchData] = useHelloWorld();

  if (loading) {
    return <p {...rest}>Loading...</p>;
  }

  if (error) {
    return <p {...rest}>Error: {error.message}</p>;
  }
  
  return (
    <div className={cx("container", className)} {...rest}>
      {data ? (
        <Heading>{data}</Heading>
      ) : (
        <Button onClick={fetchData}>Load Data</Button>
      )}
    </div>
  )
}