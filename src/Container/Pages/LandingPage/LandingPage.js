import React from 'react';
import { Grid, Button, Header, Image } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
import '../LandingPage/stile.scss';

function LandingPage(props) {
    return (
        <Grid
            style={{
                padding: 10,
                boxSizing: `border-box`,
                margin: 0,
                height: "100vh",
                position: "relative"
            }}
            textAlign="center"
            verticalAlign="middle"
        >
            <Grid column={2}
                style={{
                    margin: 0,
                    padding: 0,
                    backgroundImage: `url("./img/fixlanding.jpg")`,
                    height: "100%"
                }}
                className="top"
            >
                <Grid.Column textAlign="center" verticalAlign="middle" width={8}>
                    <div className="welcome">FILAFEST</div>
                    <p
                        style={{
                            color: "white",
                        }}
                    >Filkom Anniversary Festival</p>
                    <Button
                        content='See Details'
                        style={{
                            borderRadius: 20,
                            border: `2.5px solid #0E827E`
                        }}
                        onClick={
                            () => {
                                // props.setKondisi("filafest");
                                props.history.replace("/oprec/home/filafest");
                            }
                        }
                    />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle" width={8}>
                    <div className="welcome">PK2MABA</div>
                    <p
                        style={{
                            color: "white",
                        }}
                    >Pengenalan Kehidupan Kampus Mahasiswa Baru</p>
                    <Button
                        content='See Details'
                        style={{
                            borderRadius: 20,
                            border: `2.5px solid #F179A9`
                        }}
                        onClick={
                            () => {
                                // props.setKondisi("pk2maba");
                                props.history.replace("/oprec/home/pk2maba");
                            }
                        }
                    />
                </Grid.Column>
            </Grid>
        </Grid>
    )
}

export default GlobalConsumer(LandingPage);
