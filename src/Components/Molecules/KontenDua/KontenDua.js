import React from 'react';
import { Image, Grid, Header, Icon } from "semantic-ui-react";

export const KontenDua = () => {
    return (
        <React.Fragment>
            <Header as='h1' style={{ marginBottom: 0 }}>
                <Icon name='list alternate' />
                <Header.Content>
                    Struktur Organisasi
      								<Header.Subheader>Struktur Kabinet dari BEM Filkom 2020</Header.Subheader>
                </Header.Content>
            </Header>

            <Grid centered style={{ marginTop: 5 }}>
                <div style={{ width: "75%" }}>
                    <Image src="./img/strukturkabinet.jpg" />
                </div>
            </Grid>
        </React.Fragment>
    );
}