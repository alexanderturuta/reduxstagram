import React from 'react';
import {render} from 'react-dom';

import App from '../client/components/App';
import PhotoGrid from '../client/components/PhotoGrid';
import Single from '../client/components/Single';

//router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import store, {history} from './store'

const router =  (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

//css
import css from './styles/style.styl';

render(router, document.getElementById('root'));