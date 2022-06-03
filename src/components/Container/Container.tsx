import React from 'react';

type TProps = JSX.IntrinsicElements['div'] & {
    children: React.ReactNode;
};

export default function Container({ children, ...props }: TProps): JSX.Element {
    return (
        <div className='container' {...props}>
            {children}
        </div>
    )
}