import React from 'react';
import { Grid, Button, Image } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
import { useParams } from "react-router-dom";

function HomeHeader(props) {

    let { proker } = useParams();

    const fotonya = () => {
        let dirFilafest = `url("./img/filafest-min.jpg")`;
        let dirPk2 = `url("./img/pk2.jpg")`;
        return proker === "filafest" ? dirFilafest : dirPk2;
    }

    return (
        <header id="top" style={{backgroundImage:fotonya()}}>
            <div id="headercontain">
                <div id="welcome">Open Tender Ketua Pelaksana {proker} 2020</div>
                <span class="arrow animated bounce"></span>
            </div>
        </header>
    );
}

export default GlobalConsumer(HomeHeader);