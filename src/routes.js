import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Components/Products/Products'

export default (
    <Switch>
        <Route exact path='/' component={Products} />
    </Switch>
)