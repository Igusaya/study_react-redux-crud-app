import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index.js';
import EventsNew from './components/events_new.js';
<<<<<<< HEAD
import EventsShow from './components/events_show.js';
=======
>>>>>>> 19ce94686dca8661affff6365d6b3a121160f452
import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer,enhancer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
             <Switch>
<<<<<<< HEAD
                 <Route path="/events/new" component={EventsNew} />
                 <Route path="/events/:id/" component={EventsShow} />
                 <Route exact path="/" component={EventsIndex} />
                 <Route exact path="/events" component={EventsIndex} />
=======
                 <Route exact path="/events/new" component={EventsNew} />
                 <Route exact path="/" component={EventsIndex} />
>>>>>>> 19ce94686dca8661affff6365d6b3a121160f452
             </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
