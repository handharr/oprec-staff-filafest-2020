import React from 'react';
import { Grid, Button, Image } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';

const HomeHeader = (props) => {

    const handleStyle = () => {
        if (props.kondisi === "filafest") {
            return {
                backgroundImage: `url("./img/pk2.jpg")`,
                height: "70vh",
                backgroundSize: "cover",
                opacity: 0.2
            }

        } else {
            return {
                backgroundImage: `url("./img/pk2.jpg")`,
                height: "70vh",
                backgroundSize: "cover",
            }
        }
    }

    const handleStyle1 = () => {
        if (props.kondisi === "pk2maba") {
            return {
                backgroundImage: `url("./img/filafest.jpg")`,
                height: "70vh",
                backgroundSize: "cover",
                opacity: 0.2
            }

        } else {
            return {
                backgroundImage: `url("./img/filafest.jpg")`,
                height: "70vh",
                backgroundSize: "cover",
            }
        }
    }

    const handleButtonStyle = () => {
        if (window.innerWidth < 1050) {
            return {
                position: "absolute",
                top: "75%",
                right: "5%"
            }
        } else {
            return {
                position: "absolute",
                top: "75%",
                right: "20%"
            }
        }
    }

    const handleButtonStyle1 = () => {
        if (window.innerWidth < 1050) {
            return {
                position: "absolute",
                top: "75%",
                left: "5%"
            }
        } else {
            return {
                position: "absolute",
                top: "75%",
                left: "20%"
            }
        }
    }

    return (
        // <header id="top" style={{backgroundImage:`url("./img/filafest.jpg")`}}>
        //     <div id="headercontain">
        //         <div id="welcome">Open Tender Ketua Pelaksana<br />Filafest 2020</div>
        //         <span class="arrow animated bounce"></span>
        //     </div>
        // </header>
        <Grid container columns={2} style={{ margin: 0, padding: 0, position: "relative", backgroundColor: `rgb(20, 20, 20)` }}>
            <Grid.Column style={handleStyle1()}>

            </Grid.Column>
            <Grid.Column style={handleStyle()}>

            </Grid.Column>
            <div className="welcome" style={{ position: "absolute", width: "100%", top: "10%", display: "block", textAlign: "center" }}>
                Open Tender Ketua Pelaksana <br /> 2 Proker Besar
            </div>
            {props.kondisi === "filafest" && (
                <Button
                    primary
                    onClick={() => { props.setKondisi("pk2maba") }}
                    style={handleButtonStyle()}
                >
                    Daftar PK2
                </Button>
            )}
            {props.kondisi === "pk2maba" && (
                <Button
                    primary
                    onClick={() => { props.setKondisi("filafest") }}
                    style={handleButtonStyle1()}
                >
                    Daftar Filafest
                </Button>
            )}
        </Grid>
    );
}

export default GlobalConsumer(HomeHeader);