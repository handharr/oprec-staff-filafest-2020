import React from 'react';
import { GlobalProvider, GlobalConsumer } from '../../../Config/Context';
import { Route, Switch, withRouter} from 'react-router-dom';
import { LandingPage,App } from '../../Pages';
import { Navbar, Footer, Formpk2, FormPendaftaranTemp, Formpk2Temp } from '../../Organism';

function Awal(props) {
    return (
        <Switch>
            <Route path="/oprec" component={App} />
            <Route exact path="/" component={LandingPage} />
        </Switch>
        // <FormPendaftaranTemp/>
    )
}

export default GlobalProvider(GlobalConsumer(Awal));