import React from 'react';
import { Header, Icon, Step } from "semantic-ui-react";

export const KontenTiga = (props) => {

    return (
        <React.Fragment>
            <Header as='h1' >
                <Icon name='time' />
                <Header.Content >
                    {props.judul.teks1}
      				<Header.Subheader> {props.judul.teks2} </Header.Subheader>
                </Header.Content>
            </Header>
            <Step.Group widths={props.isi.length}>
                {
                    props.isi.map((konten) => {
                        return (
                            <Step>
                                <Icon color={konten.color} name='calendar alternate outline' />
                                <Step.Content>
                                    <Step.Title style={{ fontSize: 14 }}> {konten.tgl} </Step.Title>
                                    <Step.Description> {konten.desc} </Step.Description>
                                </Step.Content>
                            </Step>
                        )
                    })
                }
            </Step.Group>
            <p style={{textAlign:"center"}}>*Jadwal dapat berubah sewaktu-waktu menyesuaikan situasi dan kondisi yang terjadi</p>
        </React.Fragment>
    );
}