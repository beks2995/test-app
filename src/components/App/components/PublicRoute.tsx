import React from 'react';
import { RouteProps, Route } from 'react-router-dom';

export function PublicRoute(props: RouteProps): JSX.Element{
    return <Route {...props} />;
}