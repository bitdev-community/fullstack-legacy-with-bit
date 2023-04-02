import cx from 'classnames';
import { Button } from '../../ui/button';
import { Heading } from '../../ui/heading';
import useHelloWorld from '../../hooks/use-hello-world';
import './landing-page.scss'
import { HTMLAttributes } from 'react';

export type LandingPageProps = {
  helloMessage: string;
  fetchData: () => void;
} & HTMLAttributes<HTMLButtonElement>

export const LandingPage = ({ helloMessage, fetchData }: LandingPageProps) => {
  return (
    <div className={cx("container")}>
      {helloMessage ? (
        <Heading>{helloMessage}</Heading>
      ) : (
        <Button onClick={fetchData}>Load Data</Button>
      )}
    </div>
  )
}