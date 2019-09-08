import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment, Message } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

export default class Login extends Component {
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
		return (
			<AuthConsumer>
				{({ login }) => (
					<div class="ui middle aligned center aligned grid">
						<Grid columns={3} >
							<Grid.Row stretched>
								<Grid.Column></Grid.Column>
								<Grid.Column>
									<Header as="h2" textAlign="center">
										Login
								</Header>
									<Segment>
										<Form size="large">
											<Form.Input fluid icon="user" iconPosition="left" placeholder="NIM" onChange={input => this.setState({ nim: input.target.value })} />
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
														this.setState({ loadin: true });
														//cek nim
														if (this.state.nim.startsWith("17") || this.state.nim.startsWith("18")) {
															await login(this.state.nim, this.state.password).then(ress => {
																let a = ress;
																console.log(ress);
																if (!a) {
																	this.setState({ message: true });
																	this.setState({ loading: false });
																} else {
																	const body = {
																		nim: this.state.nim
																	}
																	const res = fetch("https://backend-bem.herokuapp.com/checkstaffpk2fila", {
																		method: "POST",
																		headers: {
																			"content-type": "application/json"
																		},
																		body: JSON.stringify(body)
																	}).then(ress => {
																		if (ress.ok) {
																			this.setState({ loading: false });
																			this.props.history.replace("/success");
																		}
																	})
																	this.setState({ loading: false });
																	this.props.history.replace("/form");
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
									</Segment>
									<br></br>
									<br></br>
									<br></br>
									<br></br>
									{this.state.loading === true && (
										<div class="ui icon message">
											<i class="notched circle loading icon" />
											<div class="content">
												<div class="header">Just one second</div>
												<p>We're fetching that content for you.</p>
											</div>
										</div>
									)}
									{this.state.message === true && (
										<Message
											error
											header='Anda Bukan Angkatan 2018!'
											content='Hanya angkatan 18 yang diperkenankan mendaftar!'
										/>
									)}
									{this.state.message === true && (
										<Message
											error
											header='Password atau Nim salah!'
											content='Silahkan Login Kembali!'
										/>
									)}
								</Grid.Column>
								<Grid.Column></Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
				)}
			</AuthConsumer>
		);
	}
}
