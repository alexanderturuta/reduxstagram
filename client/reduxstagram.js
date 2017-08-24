import React from 'react';
import {render} from 'react-dom';

import Main from '../client/components/Main';
import PhotoGrid from '../client/components/PhotoGrid';
import Single from '../client/components/Single';

//router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router =  (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

//css
import css from './styles/style.styl';

render(router, document.getElementById('root'));