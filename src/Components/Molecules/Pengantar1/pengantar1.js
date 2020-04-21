import React from 'react';
import styles from './style.module.scss';

import { Image, Grid } from "semantic-ui-react";

const PengantarKiri = () => {
    return (
        <Grid.Column 
            verticalAlign="top"
            style={{
                backgroundColor:"white"
            }}
        >
            <Image 
            className="ima"
                centered 
                src="./img/LogoVertical.png" 
                style={{
                    backgroundColor:"white",
                    border:"none",
                    width:"50%"
                }}
            />
        </Grid.Column>
    );
}

export default PengantarKiri;