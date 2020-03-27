import React from 'react';
import './App.css';
import { GlobalConsumer } from '../../../Config/Context';
import { Route, Switch, Redirect } from 'react-router-dom';

import { LoginPage } from '../../Pages';
import { Navbar, Footer, Formpk2, FormPendaftaranTemp, Formpk2Temp } from '../../Organism';
import { Home} from '../../Pages';
import { Predate, Terdaftar, Tutup } from '../../../Components/Molecules';

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
        pathname: '/',
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

function App(props) {
  // console.log(props)
  return (
    <React.Fragment>
      <Navbar nama="tes" />
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route path="/oprec/home/:proker" component={Home} />
        <Route path="/oprec/login/:proker" component={LoginPage} />
        {/* <Route path="/welcome" component={Pengantar} /> */}
        {/* <PrivateRoute path="/notif" component={NotifSukses} status={props.isLogged} /> */}
        <PrivateRoute path="/oprec/formfilafest/:proker" component={FormPendaftaranTemp} status={props.isLogged} />
        <PrivateRoute path="/oprec/terdaftar/:proker" component={Terdaftar} status={props.isLogged} />
        <PrivateRoute path="/oprec/closed" component={Tutup} status={props.isLogged} />
        <PrivateRoute path="/oprec/close" component={Predate} status={props.isLogged} />
        <PrivateRoute path="/oprec/formpk2/:proker" component={Formpk2Temp} status={props.isLogged} />
      </Switch>
      {/* <LandingPage/> */}
      <Footer />
    </React.Fragment>
  );
}

export default GlobalConsumer(App);
