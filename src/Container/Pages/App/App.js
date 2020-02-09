import React from 'react';
import './App.css';
import { GlobalProvider, GlobalConsumer } from '../../../Config/Context';
import { Route, Switch, Redirect } from 'react-router';

import {LoginPage} from '../../Pages';
import { FormOnline,Navbar,Footer } from '../../Organism';
import {Home} from '../../Pages';
import {Pengantar} from '../../Pages';
import { Predate,NotifSukses,Terdaftar,Tutup } from '../../../Components/Molecules';



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

const App = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <Navbar nama="tes" />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/form" component={FormOnline} status={props.isLogged} />
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={Pengantar} />
        <PrivateRoute path="/success" component={Terdaftar} status={props.isLogged} />
        <PrivateRoute path="/notif" component={NotifSukses} status={props.isLogged} />
        <PrivateRoute path="/registered" component={Tutup} status={props.isLogged} />
        <PrivateRoute path="/closed" component={Predate} status={props.isLogged} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default GlobalProvider(GlobalConsumer(App));
