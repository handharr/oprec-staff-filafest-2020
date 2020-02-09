import React from 'react';

import { Image, Grid } from "semantic-ui-react";

const PengantarKiri = () => {
    return (
        <Grid.Column>
            <Image centered style={{ borderRadius: 2.5, width: "70%" }} src="./img/LogoVertical.png" />
        </Grid.Column>
    );
}

export default PengantarKiri;