import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Components/Products/Products'
import Auth from './Components/Auth/Auth'
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import Admin from './Components/Admin/Admin';

export default (
    <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/auth' component={Auth} />
        <Route path='/product/:id' component={ProductDisplay} />
        <Route path='/admin' component={Admin} />
        {/* <Route path='/' component={ } /> */}
    </Switch>
)