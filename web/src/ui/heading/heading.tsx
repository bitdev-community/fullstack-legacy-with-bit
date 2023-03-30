import type { HTMLAttributes } from 'react';
import cx from 'classnames';
import './heading.scss'

export type HeadingProp = {
    children: string;
    className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ children, className, ...rest }: HeadingProp) =>
    <h1 className={cx('heading', className)} {...rest}>
        {children}
    </h1>