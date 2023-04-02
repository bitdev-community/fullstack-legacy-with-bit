import type { HTMLAttributes } from 'react';
import cx from 'classnames';
import { Button } from '../../ui/button';
import { Heading } from '../../ui/heading';
import './landing-page.scss'

export type LandingPageProps = {
  helloMessage: string;
  fetchData: () => void;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>

export const LandingPage = ({ helloMessage, fetchData, className, ...rest }: LandingPageProps) => {
  return (
    <div className={cx("container", className)} {...rest}>
      {helloMessage ? (
        <Heading>{helloMessage}</Heading>
      ) : (
        <Button onClick={fetchData}>Load Data</Button>
      )}
    </div>
  )
}