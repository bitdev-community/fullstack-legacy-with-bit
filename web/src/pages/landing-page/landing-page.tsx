import type { HTMLAttributes } from 'react';
import cx from 'classnames';
import { Button } from '../../ui/button';
import { Heading } from '../../ui/heading';
import './landing-page.scss'

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