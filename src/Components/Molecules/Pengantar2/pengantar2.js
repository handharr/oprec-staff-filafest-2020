import React from 'react';

import { Grid, Segment, Header, Form } from "semantic-ui-react";

const PengantarKanan = (props) => {
    return (
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
                    <Form style={{ margin: 0, padding: 0 }}
                        onSubmit={props.submit}
                    >
                        <Form.Checkbox
                            required
                            checked={props.checked}
                            label={<label>I agree to the Terms and Conditions</label>}
                            onChange={props.handler}
                        />
                        <Form.Button
                            type="submit"
                            size="large"
                            style={{ marginBottom: 20, backgroundColor: "#ffd54f", color: "#1B1E83" }}
                        >
                            Daftar Sekarang
                                </Form.Button>
                    </Form>
                    {/* <Button
                                
                                onClick={async () => {
                                    this.props.history.replace("/login");
                                }}>
                                <Button.Content visible>Daftar Sekarang</Button.Content>
                            </Button> */}
                    {/* <Button
                                size="large"
                                style={{ backgroundColor: "#c5cae9s" }}
                                onClick={async () => {
                                    this.props.history.replace("/");
                                }}>
                                <Button.Content visible>Kembali ke Halaman Utama</Button.Content>
                            </Button> */}
                </Segment>
            </Segment>
        </Grid.Column>
    );
}

export default PengantarKanan;