import React, { Component } from "react";
import { Button, Grid, Container, Divider, Header, Icon, Placeholder, Step, List } from "semantic-ui-react";
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
								<div id="welcome">Open Registration<br />FILKOM LEADER OF TOMORROW 2019</div>
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
								<Icon style={{color:"#EE5303"}} name='info circle' />
								<Header.Content>
									Leader of Tomorrow
      								<Header.Subheader>Apa sih Leader of Tomorrow itu?</Header.Subheader>
								</Header.Content>
							</Header>
							<Placeholder>
								<Placeholder.Paragraph>
									<p style={{ fontSize: 15, fontWeight: 1500, textAlign: "justify" }}>
										LOT (Leader Of Tomorrow) merupakan kegiatan pelatihan dan pengembangan softskill yang dilaksanakan dalam 3 rangkaian dan didalam masing masing rangkaian terdapat penyampaian materi dan praktik secara langsung. Materi-materi tersebut meliputi <strong style={{color:"#EE5303"}}>Management, Critical Thinking, dan Effective Communication</strong>. Kegiatan ini bertujuan untuk membekali mahasiswa dengan wawasan dan keterampilan dalam mengembangkan softskill, yang berguna dalam memimpin suatu organisasi, kelembagaan, serta pembekalan untuk memasuki dunia pekerjaan
									</p>
								</Placeholder.Paragraph>
							</Placeholder>
							<Divider section />
							<Header as='h1' >
								<Icon color="blue" name='list alternate' />
								<Header.Content>
									Deskripsi Kegiatan
      								<Header.Subheader>Ada beberapa Tools/Implementasi yang bisa didapat</Header.Subheader>
								</Header.Content>
							</Header>
							<Grid columns={3} stackable style={{ marginTop: 0 }}>
								<Grid.Column>
									<Placeholder>
										<Placeholder.Header style={{ textAlign: "center" }}>
											<Placeholder.Line >
												<Icon size="large" name="briefcase" /> <span style={{ fontSize: 20, fontWeight: 900 }}>Management</span>
											</Placeholder.Line>
											<br></br>
										</Placeholder.Header>
										<Placeholder.Paragraph>
											<List size="large" style={{ textAlign: "center" }} >
												<List.Item>Smart Goals</List.Item>
												<List.Item>Design Thinking</List.Item>
											</List>
										</Placeholder.Paragraph>
									</Placeholder>
								</Grid.Column>
								<Grid.Column>
									<Placeholder>
										<Placeholder.Header style={{ textAlign: "center" }} >
											<Placeholder.Line>
												<Icon size="large" name="lightbulb" /> <span style={{ fontSize: 20, fontWeight: 900 }}>Critical Thinking</span>
											</Placeholder.Line>
											<br></br>
										</Placeholder.Header>
										<Placeholder.Paragraph>
											<List size="large" style={{ textAlign: "center" }} >
												<List.Item>KWL</List.Item>
												<List.Item>Scamper</List.Item>
											</List>
										</Placeholder.Paragraph>
									</Placeholder>
								</Grid.Column>
								<Grid.Column>
									<Placeholder>
										<Placeholder.Header style={{ textAlign: "center" }}>
											<Placeholder.Line>
												<Icon size="large" name="talk" /> <span style={{ fontSize: 20, fontWeight: 900 }}>Effecive Communication</span>
											</Placeholder.Line>
											<br></br>
										</Placeholder.Header>
										<Placeholder.Paragraph>
											<List size="large" style={{ textAlign: "center" }} >
												<List.Item>Pecha Kucha</List.Item>
												<List.Item>Elevator Pitch</List.Item>
											</List>
										</Placeholder.Paragraph>
									</Placeholder>
								</Grid.Column>
							</Grid>
							<Divider section />
							<Header as='h1' >
								<Icon color="green" name='time' />
								<Header.Content >
									Timeline Leader of Tomorrow
      								<Header.Subheader>Rangkaian kegiatan LOT 2019</Header.Subheader>
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
										<Step.Title style={{ fontSize: 14 }}>21 Oktober 2019</Step.Title>
										<Step.Description>18:00 WIB</Step.Description>
										<Step.Description>Pendaftaran dibuka</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="red" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>02 November 2019</Step.Title>
										<Step.Description>24:00 WIB</Step.Description>
										<Step.Description>Pendaftaran ditutup</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="blue" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>03 November 2019</Step.Title>
										<Step.Description>Rangkaian 1</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="blue" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>10 November 2019</Step.Title>
										<Step.Description>Rangkaian 2</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="blue" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>24 November 2019</Step.Title>
										<Step.Description>Rangkaian 3</Step.Description>
									</Step.Content>
								</Step>
							</Step.Group>
							<br></br>
							{/* {<center><Button className="center"
								primary
								centered
							>
								<Button.Content visible><a href="http://bit.ly/BerkasOprecStaffInau" target="_blank" style={{ 'color': 'white' }}>Download Form Offline</a></Button.Content>
							</Button></center>} */}
							{/* <br></br> */}
							<div className="ui middle aligned center aligned container">
								<p>Kamu seorang pemimpin? klik tombol dibawah ini</p>
								<Button
									animated="vertical"
									size="big"
									positive
									centered
									onClick={async () => {
										this.props.history.replace("/login");
									}}>
									<Button.Content visible>Daftar</Button.Content>
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
