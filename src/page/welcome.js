import React, { Component } from "react";
import { Button, Image, Grid, Segment, Container, Divider, Header, Icon, Placeholder, Step, List } from "semantic-ui-react";
import "./style.scss";
export default class Welcome extends Component {
    render() {
        return (
            <Grid columns={2} containers stackable stretched style={{ marginTop: 0 }}>
                <Grid.Column style={{ }}>
                    <Image centered style={{ borderRadius: 2.5, width:"70%"}} src="./img/cropposter.png" />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                    <Header as='h1' style={{ marginBottom: 5 }}>
                        <Header.Content style={{ color: "#1B1E83" }}>
                            SELAMAT DATANG
                        </Header.Content>
                    </Header>
                    <Segment basic>
                        <p style={{ color: "#333", fontSize: 18, fontWeight: 400 }}>
                                Perihal waktu yang tidak pernah berhenti, Perjuangan ini akan segera dimulai. 
                            Tentunya bukan perjalanan yang singkat untuk menuju kemantapan hati. 
                            Gundah hati serta tensi tinggi pasti selalu menghantui tiap insan yang peduli. 
                            Hingga pada akhirnya, mengambil peran adalah pilihan kami. 
                            Sudah siap ambil peranmu ?
                        </p>
                        <p style={{ textAlign: "center", fontSize: 15, fontWeight: 1500 }}><blockquote>"The Time is Always Right to Do What is Right"</blockquote>
                            <b>-Martin Luther King Junior-</b></p>
                        <Header as='h2' style={{ marginBottom: 2.5, color: "#1B1E83" }}>
                            Let's Start Our Journey!
                        </Header>
                        <Segment basic textAlign="center" style={{ marginTop: 0 }}>
                            <Button
                                size="large"
                                style={{ marginBottom: 20, backgroundColor: "#ffd54f", color: "#1B1E83" }}
                                onClick={async () => {
                                    this.props.history.replace("/form");
                                }}>
                                Isi Form Online
                            </Button>
                            <Button
                                size="large"
                                style={{ backgroundColor: "#c5cae9s" }}
                                onClick={async () => {
                                    this.props.history.replace("/");
                                }}>
                                Kembali ke Halaman Utama
                            </Button>
                        </Segment>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
