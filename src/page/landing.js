import React, { Component } from "react";
import { Image, Button, Container, Divider } from "semantic-ui-react";
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
								<div id="welcome">OPTEN KAPEL-WAKAPEL<br />INAUGURASI FILKOM 2019</div>
								<span class="arrow animated bounce"></span>
							</div>
						</header>
						<Divider hidden />
						<Container>
						<div className="ui middle aligned center aligned container">
								<h1>APA ITU INAUGURASI FILKOM?</h1>
								<p>Merupakan kegiatan penutup dari seluruh rangkaian kegiatan PK2MABA dan Startup Academy yang dilaksanakan dari, oleh, dan untuk mahasiswa baru. inaugurasi filkom bertujuan untuk melepas status mahasiswa baru menjadi bagian dari KBMFILKOM yang utuh serta kegiatan yang dapat menjadi wadah untuk mengembangkan minat dan bakat mahasiswa baru yang diharap dapat berekspresi dengan sekreatif dan sebaik mungkin, selain itu juga sebagai sarana agar mahasiswa baru saling mengenal satu sama lain dalam lingkup fakultas sehingga diharapkan mampu menciptakan sebuah solidaritas antar mahasiswa baru.</p>
							</div>
							<Divider section />
							<section id="Steps" class="steps-section">
								{/*start timeline*/}
								<h2 class="steps-header">Timeline Pendaftaran</h2>

								<div class="steps-timeline">
									<div class="steps-one">
										<img class="steps-img" src="./img/time.png" alt="" />
										<h3 class="steps-name">10 - 15 September 2019</h3>
										<p class="steps-description">Open Tender Ketua Pelaksana</p>
									</div>

									<div class="steps-two">
										<img class="steps-img" src="./img/time.png" alt="" />
										<h3 class="steps-name">14 - 16 September 2019</h3>
										<p class="steps-description">Flash Screening</p>
									</div>

									<div class="steps-two">
										<img class="steps-img" src="./img/time.png" alt="" />
										<h3 class="steps-name">16 September 2019</h3>
										<p class="steps-description">Pengumuman hasil Flash Screening</p>
									</div>

									<div class="steps-two">
										<img class="steps-img" src="./img/time.png" alt="" />
										<h3 class="steps-name">20-22 September 2019</h3>
										<p class="steps-description">Fit and Proper Test</p>
									</div>

									<div class="steps-three">
										<img class="steps-img" src="./img/time.png" alt="" />
										<h3 class="steps-name">24 September 2019</h3>
										<p class="steps-description">Pengumuman Ketua Pelaksana</p>
									</div>
								</div>
							</section>
							{/*end timeline*/}
							<Divider section />							
							<div className="ui middle aligned center aligned container"><Button
								animated="vertical"
								size="massive"
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
