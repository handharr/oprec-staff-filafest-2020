import React, { Component } from "react";
import { Image, Button, Container, Divider, Header, Icon, Placeholder, Step } from "semantic-ui-react";
import "./style.scss";
import { AuthConsumer } from "../AuthContext";
export default class Landing extends Component {
	render() {
		return (
			<AuthConsumer>
				{() => (
					<React.Fragment>
						<header id="top">
							<div id="headercontain">
								<div id="welcome">Open Tender Ketua Pelaksana<br />INAUGURASI FILKOM 2019</div>
								<span class="arrow animated bounce"></span>
							</div>
						</header>
						<Divider hidden />
						<Container>
							{/* <div className="ui middle aligned center aligned container">
								<h1>APA ITU INAUGURASI FILKOM?</h1>
								<p>Merupakan kegiatan penutup dari seluruh rangkaian kegiatan PK2MABA dan Startup Academy yang dilaksanakan dari, oleh, dan untuk mahasiswa baru. inaugurasi filkom bertujuan untuk melepas status mahasiswa baru menjadi bagian dari KBMFILKOM yang utuh serta kegiatan yang dapat menjadi wadah untuk mengembangkan minat dan bakat mahasiswa baru yang diharap dapat berekspresi dengan sekreatif dan sebaik mungkin, selain itu juga sebagai sarana agar mahasiswa baru saling mengenal satu sama lain dalam lingkup fakultas sehingga diharapkan mampu menciptakan sebuah solidaritas antar mahasiswa baru.</p>
							</div> */}
							<Header as='h1' >
								<Icon name='info circle' />
								<Header.Content>
									Inaugurasi Filkom
      								<Header.Subheader>Apa sih Inaugurasi Filkom itu?</Header.Subheader>
								</Header.Content>
							</Header>
							<Placeholder>
								<Placeholder.Paragraph>
									<p style={{ fontSize: 15, fontWeight: 1500 }}>
										Merupakan kegiatan penutup dari seluruh rangkaian kegiatan PK2MABA dan Startup Academy yang dilaksanakan dari, oleh, dan untuk mahasiswa baru. Inaugurasi Filkom bertujuan untuk melepas status mahasiswa baru menjadi bagian dari KBMFILKOM yang utuh. Kegiatan ini dapat menjadi wadah untuk mengembangkan minat dan bakat mahasiswa baru, yang diharap dapat berekspresi dengan sekreatif dan sebaik mungkin. Selain itu juga sebagai sarana agar mahasiswa baru saling mengenal satu sama lain dalam lingkup fakultas, sehingga diharapkan mampu menciptakan sebuah solidaritas antar mahasiswa baru.
									</p>
								</Placeholder.Paragraph>

								
							</Placeholder>
							<Divider section />
							<Header as='h1' >
								<Icon name='time' />
								<Header.Content>
									Timeline Open Tender
      								<Header.Subheader>Timeline untuk para calon ketua pelaksana</Header.Subheader>
								</Header.Content>
							</Header>
							<center><Button className="center"
									primary
									centered
									>
									<Button.Content visible><a href="http://bit.ly/OptenInaugurasiFILKOM2019" target="_blank" style={{'color':'white'}}>Baca Prosedurnya!</a></Button.Content>
								</Button></center>
							<Step.Group widths={5}>
								<Step>
									<Icon name='calendar alternate outline' />
									<Step.Content>
										<Step.Title>10 - 13 September 2019</Step.Title>
										<Step.Description>Open Tender Ketua Pelaksana</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon name='calendar alternate outline' />
									<Step.Content>
										<Step.Title>14 - 16 <br /> September 2019</Step.Title>
										<Step.Description>Flash Screening</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon name='calendar alternate outline' />
									<Step.Content>
										<Step.Title>16 <br /> September 2019</Step.Title>
										<Step.Description>Pengumuman hasil Flash Screening</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon name='calendar alternate outline' />
									<Step.Content>
										<Step.Title>20-22 <br /> September 2019</Step.Title>
										<Step.Description>Fit and Proper Test</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon name='calendar alternate outline' />
									<Step.Content>
										<Step.Title>24 <br /> September 2019</Step.Title>
										<Step.Description>Pengumuman Ketua Pelaksana</Step.Description>
									</Step.Content>
								</Step>
							</Step.Group>
							<br></br>
							<br></br>
							<div className="ui middle aligned center aligned container">
								<p>Kamu kapel selanjutnya? klik tombol dibawah ini</p>
								<Button
									animated="vertical"
									size="huge"
									positive
									centered
									onClick={async () => {
										this.props.history.replace("/login");
									}}>
									<Button.Content visible>Daftar Kapel</Button.Content>
									<Button.Content hidden>Login</Button.Content>
								</Button>
							</div>
							<Divider hidden />
						</Container>
					</React.Fragment>
				)}
			</AuthConsumer>
		);
	}
}
