import React from 'react';
// import { Grid, Button, Image } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
// import { useParams } from "react-router-dom";

function HomeHeader(props) {

    // let { proker } = useParams();

    return (
        <header id="top" style={{backgroundImage:`url("./img/filafest-min.jpg")`}}>
            <div id="headercontain">
                <div id="welcome">Open Recruitment Staff filafest 2020</div>
                <span class="arrow animated bounce"></span>
            </div>
        </header>
    );
}

export default GlobalConsumer(HomeHeader);