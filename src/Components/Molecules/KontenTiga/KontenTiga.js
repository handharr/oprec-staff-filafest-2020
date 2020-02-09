import React from 'react';
import { Header, Icon, Step } from "semantic-ui-react";

export const KontenTiga = () => {
    return (
        <React.Fragment>
            <Header as='h1' >
                <Icon name='time' />
                <Header.Content >
                    Timeline Open Bidding BPH
      								<Header.Subheader>Rangkaian kegiatan Open Bidding BPH BEM Filkom 2020</Header.Subheader>
                </Header.Content>
            </Header>
            {/* <center><Button className="center"
								primary
								centered
							>
								<Button.Content visible><a href="http://bit.ly/ProsedurOprecStaff" target="_blank" style={{ 'color': 'white' }}>Baca Prosedurnya!</a></Button.Content>
							</Button></center> */}
            <Step.Group widths={5}>
                <Step>
                    <Icon color="olive" name='calendar alternate outline' />
                    <Step.Content>
                        <Step.Title style={{ fontSize: 14 }}>10 - 13 Februari 2020</Step.Title>
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