import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, IndexRoute, Route} from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import HomePage from './components/home/HomePage.jsx';
import LoginPage from './components/login/LoginPage';
import FixturesPage from './components/eplPages/FixturesPage.jsx';
import Signin from './components/signup/Signin';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './components/utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';
import setCurrentUser from './components/actions/login';
const store = createStore(
   // (state ={})=> state,
    rootReducer,
    compose(
         applyMiddleware(thunk),
         window.devToolsExtension ? window.devToolsExtension(): f=>f
    )

);
if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)));
}
render(
<Provider store={store}>
<BrowserRouter >
<App>
        <Route path="/home"  component={HomePage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/greet" component={Signin}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/fixtures" component={FixturesPage}></Route>

</App>
</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
