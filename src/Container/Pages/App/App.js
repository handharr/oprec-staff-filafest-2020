import React from 'react';
import './App.css';
import { GlobalConsumer,GlobalProvider } from '../../../Config/Context';
import { Route, Switch, Redirect } from 'react-router-dom';

import { LoginPage, Pengantar } from '../../Pages';
import { Navbar, Footer,Formpk2Temp } from '../../Organism';
import { Home } from '../../Pages';
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
      {/* <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/pendaftaran" component={Pengantar} />
        <PrivateRoute path="/terdaftar" component={Terdaftar} status={props.isLogged} />
        <PrivateRoute path="/closed" component={Tutup} status={props.isLogged} />
        <PrivateRoute path="/close" component={Predate} status={props.isLogged} />
        <PrivateRoute path="/formpk2" component={Formpk2Temp} status={props.isLogged} />
      </Switch> */}
      <Formpk2Temp/>
      <Footer />
    </React.Fragment>
  );
}

export default GlobalProvider(GlobalConsumer(App));
