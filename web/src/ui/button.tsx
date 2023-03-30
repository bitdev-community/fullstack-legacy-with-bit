import type { ReactNode, HTMLAttributes } from 'react';
import cx from 'classnames';
import '../style.scss'

export type ButtonProps = {
    children: string | ReactNode;
    className?: string
} & HTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...rest}: ButtonProps) => {
    return <button className={cx("button", className)} {...rest}>{children}</button>
}