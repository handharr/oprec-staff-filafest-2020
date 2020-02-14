import React from 'react';
import { Header, Icon, Step } from "semantic-ui-react";

export const KontenTiga = () => {
    return (
        <React.Fragment>
            <Header as='h1' >
                <Icon name='time' />
                <Header.Content >
                    Timeline Open Recruitment Staff
      								<Header.Subheader>Rangkaian kegiatan Open Recruitment Staff BEM Filkom 2020</Header.Subheader>
                </Header.Content>
            </Header>
            <Step.Group widths={5}>
                <Step>
                    <Icon color="olive" name='calendar alternate outline' />
                    <Step.Content>
                        <Step.Title style={{ fontSize: 14 }}>10 - 15 Februari 2020</Step.Title>
                        <Step.Description>Open Recruitment Online</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon color="blue" name='calendar alternate outline' />
                    <Step.Content>
                        <Step.Title style={{ fontSize: 14 }}>11 - 14 Februari 2020</Step.Title>
                        <Step.Description>Interview</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon color="blue" name='calendar alternate outline' />
                    <Step.Content>
                        <Step.Title style={{ fontSize: 14 }}>15 - 16 Februari 2020</Step.Title>
                        <Step.Description>Focus Group Discussion</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon color="green" name='calendar alternate outline' />
                    <Step.Content>
                        <Step.Title style={{ fontSize: 14 }}>18 Februari 2020</Step.Title>
                        <Step.Description>Pengumuman</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        </React.Fragment>
    );
}