import React from 'react';
import './App.css';
import { GlobalProvider, GlobalConsumer } from '../../../Config/Context';
import { Route, Switch, Redirect } from 'react-router';

import { LoginPage } from '../../Pages';
import { FormOnline, Navbar, Footer, Formpk2 } from '../../Organism';
import { Home } from '../../Pages';
import { Pengantar } from '../../Pages';
import { Predate, NotifSukses, Terdaftar, Tutup } from '../../../Components/Molecules';



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
  // console.log(props)
  return (
    <React.Fragment>
      <Navbar nama="tes" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={Pengantar} />
        <PrivateRoute exact path="/formfilafest" component={FormOnline} status={props.isLogged} />
        <PrivateRoute path="/terdaftar" component={Terdaftar} status={props.isLogged} />
        <PrivateRoute path="/notif" component={NotifSukses} status={props.isLogged} />
        <PrivateRoute path="/closed" component={Tutup} status={props.isLogged} />
        <PrivateRoute path="/close" component={Predate} status={props.isLogged} />
        <PrivateRoute path="/formpk2" component={Formpk2} status={props.isLogged} />
      </Switch>
      {/* <FormOnline/> */}
      <Footer />
    </React.Fragment>
  );
}

export default GlobalProvider(GlobalConsumer(App));
