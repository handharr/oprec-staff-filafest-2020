import React, { Component } from 'react';
import FormPendaftaran from './page/form';
import './App.css';
import Login from './page/login';
import { AuthConsumer } from './AuthContext';

import Landing from './page/landing';
import Form from './page/form';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from './component/navbar';
import Sukses from './component/sukses';
import Predate from './component/predate';

import Footer from './component/footer';
import Registered from './component/registered';
import Notif from './component/notif';
// const PrivateRoute = ({ component: Component,status:isLogged,pilih:pilih, ...rest }) => (
//   <Route {...rest} render={(props) => {
//     if (pilih===undefined){

//       return  <Redirect to={{
//         pathname: '/',
//         state: { from: props.location }
//       }} />
//     }
//    else if (pilih!=undefined&&isLogged==false){

//       return <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }} />
//     }
//     else {

//       return <Component {...props}/>
//     }


//   }} />
// )

const PrivateRoute = ({ component: Component, status: isLogged, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLogged === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

// const PrivateRouteTwo = ({ component: Component, status: isLogged, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     isLogged != null
//       ? <Component {...props} />
//       : <Redirect to={{
//         pathname: '/',
//         state: { from: props.location }
//       }} />
//   )} />
// )

class App extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ isLogged }) => (
          <React.Fragment>
            <Navbar nama="tes"/>
              {/* <Switch>
                <Route exact path="/" component={Landing} />
                <PrivateRoute exact path="/form" component={FormPendaftaran} status={isLogged} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/success" component={Sukses} status={isLogged} />
                <PrivateRoute path="/notif" component={Notif} status={isLogged} />
                <PrivateRoute path="/registered" component={Registered} status={isLogged}/>
                <PrivateRoute path="/closed" component={Predate} status={isLogged}/>
              </Switch> */}
              <FormPendaftaran/>
            <Footer/>
          </React.Fragment>
        )}

      </AuthConsumer>
    );
  }
}

export default App;
