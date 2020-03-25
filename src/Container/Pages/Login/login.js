import React, { Component } from "react";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config/Context';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			password: "",
			nama: "",
			prodi: "",
			loading: false,
			message: false
		};
	}
	render() {

		const acara = () => {
			if (this.props.kondisi === "filafest") {
				return "/formfilafest";
			} else {
				return "/formpk2";
			}
		}

		return (
			<React.Fragment>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

					<Header as="h2" textAlign="center" style={{ marginTop: 30 }}>
						Login
					</Header>
					<div style={{ width: '50vw' }}>
						<Form size="large">
							<Form.Input fluid type="number" icon="user" iconPosition="left" placeholder="NIM" onChange={input => this.setState({ nim: input.target.value })} />
							<Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" onChange={input => this.setState({ password: input.target.value })} />
							{this.state.loading && (
								<Button fluid size="large" loading primary>
									Loading
								</Button>
							)}
							{this.state.loading === false && (
								<Button
									color="blue"
									fluid
									size="large"
									onClick={async () => {
										this.setState({ loading: true });
										//cek nim
										var nm = this.state.nim;
										var cek1 = nm.substring(0, 2) === "19";
										var cek2 = nm.substring(0, 2) === "18";
										var cek3 = nm.substring(3, 6) === "150";
										//&& (cek1 || cek2) && cek3
										if (this.state.nim.length === 15 && cek3 && (cek1 || cek2 || '175150400111045')) {
											await this.props.login(this.state.nim, this.state.password).then(async (ress) => {
												let a = ress;
												// console.log(ress);
												if (!a.status) {
													this.setState({ message: true });
													this.setState({ loading: false });
												} else {
													try {
														let nimnya = this.state.nim;
														let kond = this.props.kondisi;
														let URL = `https://bemfilkom.ub.ac.id/secure/api/2020/KapelProkerBesar/?check=${nimnya}&proker=${kond}`;
														const res = await fetch(URL, {
															method: "GET",
														});
														const result = res;
														const data = await res.json();
														console.log(data);
														if(res.ok){
															this.setState({ loading: false });
															data.status === 1 ? this.props.history.replace('/terdaftar') : this.props.history.replace(acara());
														} else {
															alert("Mohon Maaf Terdapat Masalah Koneksi");
														}
													} catch (error) {
														console.log("Konsol error : ", error);
														alert("Mohon Maaf Terdapat Masalah Koneksi");
													}
												}
											});
										} else {
											this.setState({ loading: false });
											this.setState({ message: true });
										}
									}}>
									Login
								</Button>
							)}
						</Form>
					</div>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					{this.state.loading === true && (
						<div style={{ marginBottom: 50, marginTop: -10 }}>
							<div class="ui icon message">
								<i class="notched circle loading icon" />
								<div class="content">
									<div class="header">Just one second</div>
									<p>We're fetching that content for you.</p>
								</div>
							</div>
						</div>
					)}
					{this.state.message === true && (
						<Message
							style={{ marginBottom: 50, marginTop: -10 }}
							error
							header='Password atau Nim salah!'
							content='Silahkan Login Kembali!'
						/>
					)}
				</div>
			</React.Fragment>

		);
	}
}
export default GlobalConsumer(LoginPage);
