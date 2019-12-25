import React, { Component } from 'react';
import './App.css';
import { AuthConsumer } from './AuthContext';

import FormPendaftaran from './page/form';
import Landing from './page/landing';
import Welcome from './page/welcome';
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
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/form" component={FormPendaftaran}/>
                <Route exact path="/success" component={Sukses}/>
                <Route exact path="/notif" component={Notif}/>
                <Route exact path="/registered" component={Registered}/>
                <Route exact path="/closed" component={Predate}/>
                <Route exact path="/welcome" component={Welcome}/>
              </Switch>
              {/* <FormPendaftaran/> */}
              {/* <Welcome/> */}
              {/* <Sukses/> */}
            <Footer/>
          </React.Fragment>
        )}

      </AuthConsumer>
    );
  }
}

export default App;
