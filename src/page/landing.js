import React, { Component } from "react";
import { Button, Image, Grid, Container, Divider, Header, Icon, Placeholder, Step, List, Segment } from "semantic-ui-react";
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
								<div id="welcome">Open Bidding<br />BADAN PENGURUS HARIAN<br />BEM FILKOM 2020</div>
								<span class="arrow animated bounce"></span>
							</div>
						</header>
						<Divider hidden />
						<Container>
							{/* <div className="ui middle aligned center aligned container">
								<h1>APA ITU INAUGURASI FILKOM?</h1>
								<p>Merupakan kegiatan penutup dari seluruh rangkaian kegiatan PK2MABA dan Startup Academy yang dilaksanakan dari, oleh, dan untuk mahasiswa baru. inaugurasi filkom bertujuan untuk melepas status mahasiswa baru menjadi bagian dari KBMFILKOM yang utuh serta kegiatan yang dapat menjadi wadah untuk mengembangkan minat dan bakat mahasiswa baru yang diharap dapat berekspresi dengan sekreatif dan sebaik mungkin, selain itu juga sebagai sarana agar mahasiswa baru saling mengenal satu sama lain dalam lingkup fakultas sehingga diharapkan mampu menciptakan sebuah solidaritas antar mahasiswa baru.</p>
							</div> */}
							<Header as='h1' style={{ marginBottom: 0 }}>
								<Icon name='info circle' />
								<Header.Content>
									Visi & Misi
      								<Header.Subheader>Visi dan Misi BEM Filkom 2020</Header.Subheader>
								</Header.Content>
							</Header>
							<Grid centered style={{marginTop:5}}>
								<Segment basic style={{ width: "75%", marginBottom: 15 }}>
									<Header size="huge" textAlign="center">Visi</Header>
									<p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
										BEM FILKOM sebagai wadah dalam membangun nilai instrumental mahasiswa yang tepat sasaran demi terciptanya kreasi bermakna bagi FILKOM dan Indonesia
									</p>
								</Segment>
								<Segment basic style={{ width: "75%", marginTop: 0 }}>
									<Header size='huge' textAlign="center">Misi</Header>
									<List ordered style={{color:"black"}}>
										<List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify",marginBottom:0 }}>
												Membangun iklim internal bem filkom ub yang <strong>inklusif</strong> dan <strong>profesional</strong> bernafaskan kekeluargaan.
										</List.Item>
										<List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop:0, marginBottom:0 }}>
												<strong>Bekerja sama</strong> secara <strong>dinamis</strong> dengan seluruh pemangku kepentingan demi terciptanya kreasi jangka panjang dan berkelanjutan.
										</List.Item>
										<List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop:0, marginBottom:0 }}>
												<strong>Inisiator pergerakan</strong> mahasiswa yang peka terhadap isu sosial-politik.
										</List.Item>
										<List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop:0, marginBottom:0 }}>
												Melakukan <strong>pengembangan</strong> kemahasiswaan yang <strong>suportif</strong> dan komprehensif guna tercapainya aktualisasi diri dan prestasi mahasiswa.
										</List.Item>
										<List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop:0 }}>
												Optimalisasi <strong>pelayanan</strong> advokasi <strong>aktif progresif</strong> terkait dengan kebutuhan dan kesejahteraan mahasiswa.
										</List.Item>
									</List>
								</Segment>
							</Grid>
							<br/>
							<Divider section />
							<Header as='h1' style={{ marginBottom: 0 }}>
								<Icon name='list alternate' />
								<Header.Content>
									Struktur Organisasi
      								<Header.Subheader>Struktur Kabinet dari BEM Filkom 2020</Header.Subheader>
								</Header.Content>
							</Header>

							<Grid centered style={{ marginTop: 5 }}>
								<div style={{ width: "75%" }}>
									<Image src="./img/strukturkabinet.jpg" />
								</div>
							</Grid>

							<Divider section />
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
										<Step.Title style={{ fontSize: 16 }}>26 Desember 2019</Step.Title>
										<Step.Description>Pendaftaran dibuka</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="red" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 16 }}>04 Januari 2020</Step.Title>
										<Step.Description>Pendaftaran ditutup dan Pengumpulan Berkas</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="red" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 16 }}>05 Januari 2020</Step.Title>
										<Step.Description>Deadline Pengumpulan Berkas</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="blue" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 16 }}>6-18 Januari 2020</Step.Title>
										<Step.Description>Interview</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="green" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 16 }}>22 Januari 2020</Step.Title>
										<Step.Description>Pengumuman</Step.Description>
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

								<Button
									size="big"
									positive
									centered
									onClick={async () => {
										this.props.history.replace("/welcome");
									}}>
									<Button.Content visible>Daftar</Button.Content>
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