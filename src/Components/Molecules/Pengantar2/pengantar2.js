import React from 'react';

import { Grid, Segment, Header, Form, Icon, Step, Popup, Checkbox, Button } from "semantic-ui-react";
import { LinkButton, Puisi } from '../../Molecules';
import { HeaderContent } from '../../Atoms';


const PengantarKanan = (props) => {
    return (
        <Grid.Column verticalAlign="middle">
            {/* <Header as='h1' style={{ marginBottom: 5 }}>
                <Header.Content style={{ color: "#1B1E83" }}>
                    SELAMAT DATANG
                        </Header.Content>
            </Header> */}
            <Segment basic>
                {/* <Puisi /> */}
                <HeaderContent judul="Prosedur Pendaftaran" />
                <p style={{ color: "#333", fontSize: 18, fontWeight: 400 }}>
                    Prosedur pendaftaran Online calon staff BEM Filkom 2020
                </p>
                <React.Fragment>
                    <Step.Group ordered size="tiny" vertical>
                        <Step>
                            <Step.Content>
                                <Step.Title style={{ fontSize: 14 }}>Download Berkas Offline</Step.Title>
                                <Step.Description>Download berkas offline yang telah disediakan</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <Step.Title style={{ fontSize: 14 }}>Isi Berkas</Step.Title>
                                <Step.Description>Baca dan isi berkas offline yang diperlukan </Step.Description>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <Step.Title style={{ fontSize: 14 }}>Upload ke GDrive</Step.Title>
                                <Step.Description>Buat folder pada Google Drive dan Upload berkas yang diperlukan</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <Step.Title style={{ fontSize: 14 }}>Aktifkan Shareable Link</Step.Title>
                                <Step.Description>Aktifkan shareable link pada folder GDrive yang menyimpan berkas</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <Step.Title style={{ fontSize: 14 }}>Login</Step.Title>
                                <Step.Description>Login menggunakan akun SIAM</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <Step.Title style={{ fontSize: 14 }}>Isi form online dan upload berkas </Step.Title>
                                <Step.Description>Isi form online yang disediakan dan tautkan shareable link GDrive berkas anda</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <Step.Title style={{ fontSize: 14 }}>Tunggu Jadwal Interview Online</Step.Title>
                                <Step.Description>Tunggu konfirmasi lebih lanjut untuk mendapat jadwal interview online</Step.Description>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </React.Fragment>
                <HeaderContent judul="Berkas dan Form Offline" />
                <p style={{ color: "#333", fontSize: 18, fontWeight: 400 }}>
                    Silahkan baca dan download berkas offline berikut
                </p>
                <LinkButton />
                <HeaderContent judul="Let's Start Our Journey!" />
                <Segment basic textAlign="center" style={{ marginTop: 0 }}>
                    <Checkbox
                        style={{ fontSize: 12.5 }}
                        required
                        checked={props.checked}
                        label={<label>Saya telah membaca, menyetujui, dan siap mengikuti alur pendaftaran serta amanah dalam tiap proses didalamnya</label>}
                        onChange={props.handler}
                    />
                    <br/>
                    <br/>
                    {props.checked === true && (
                        <Button
                            size="medium"
                            onClick={props.submit}
                            style={{ marginBottom: 20, width: 150, backgroundColor: "#1897D4", color: "#ffffff" }}
                        >
                            LOGIN
                        </Button>
                    )}
                    {props.checked === false && (
                        <Popup
                            position='bottom center'
                            content='Silahkan setujui persyaratan terlebih dahulu'
                            on='click'
                            pinned
                            trigger={
                                <Button
                                    size="medium"
                                    style={{ marginBottom: 20, width: 150, backgroundColor: "#1897D4", color: "#ffffff" }}
                                >
                                    LOGIN
                                    </Button>
                            }
                        />
                    )}
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