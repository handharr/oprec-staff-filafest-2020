import React, { Component } from "react";
import { Form, Button, Grid, Header, Label } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

// const URL = 'http://localhost:5000/api/web/protected/postOprecStaffInau';
const URL = "https://backend-bem.herokuapp.com/api/web/protected/postOpregLOT2019";

export default class FormPendaftaran extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			nama: "",
			prodi: "",
			id_line: "",
			no_hp: "",
			alasan: "",
			loading: false,
		};
	}

	handleChange = (e, { value }) => this.setState({ value });

	daftar = async (nama, nim, prodi, token) => {
		const body = {
			nim: nim,
			nama: nama,
			prodi: prodi,
			id_line : this.state.id_line,
			no_hp : this.state.no_hp,
			alasan: this.state.alasan,
		};
		console.log(body);
		await fetch(URL, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"authorization": "bearer " + token
			},
			body: JSON.stringify(body)
		})
			.then(response => {
				if (response.ok) {
					console.log("sukses");
					return response.json();
				}
				return response.json().then(error => {
					throw new Error(error);
				});
			})
			.then(ress => {
				// console.log(ress)
				this.props.history.replace("/success");
			});
	};

	render() {
		var batas = new Date("2020-10-02T24:00:00+07:00");
		var sekarang = new Date();
		if (batas < sekarang) {
			this.props.history.replace('/registered');
		}
		return (
			<AuthConsumer>
				{({ nama, nim, prodi, token }) => (
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
						<Header textAlign="center" as='h1' content='Form Pendaftaran' />
						<div style={{ width: '50vw' }}>
							<Form onSubmit={() => {
								this.setState({ loading: true })
								this.daftar(nama, nim, prodi, token)
							}}>
								<Form.Input fluid label="Nama" placeholder="Nama" value={nama} readOnly />
								<Form.Input fluid label="NIM" placeholder="NIM" value={nim} readOnly />
								<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={prodi} readOnly />
								<Form.Input required fluid label="Line" onChange={(e) => { this.setState({ id_line: e.target.value }) }} placeholder="ID Line" />
								<Form.Input required fluid label="Hp" onChange={(e) => { this.setState({ no_hp: e.target.value }) }} placeholder="No. HP" />
								<Form.TextArea required label="Alasan Mendaftar" required placeholder="Berikan alasanmu mendaftar LOT" onChange={e => this.setState({ alasan: e.target.value })} />
								{this.state.loading === false && (
									<Button
										color="blue"
										fluid
									// onClick={() => {
									// 	this.setState({loading: true});
									// 	// this.daftar(nama, nim, prodi);
									// }}
									>
										Submit
							</Button>
								)}
								{this.state.loading === true && (
									<Button color="blue" loading fluid>
										Login
							</Button>
								)}
							</Form>
						</div>
					</div>
				)}
			</AuthConsumer>
		);
	}
}
