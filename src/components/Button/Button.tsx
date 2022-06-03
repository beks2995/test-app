import React from 'react';

type TProps = JSX.IntrinsicElements['button'] & {
    children: React.ReactNode;
};

export default function Button({ children, ...props }: TProps): JSX.Element {
    return (
        <button {...props}>
            {children}
        </button>
    )
}