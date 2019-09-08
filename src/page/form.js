import React, { Component } from "react";
import { Form, Button, Grid, Header } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

// const URL = 'http://localhost/api/postdata.php';
const URL = "https://backend-bem.herokuapp.com/sendOprecStaffpk2fila";

let isi1, isi2 = null;
const divisi = [
	{
		key: 1,
		text: "Kestari",
		value: "Kestari"
	},
	{
		key: 2,
		text: "Acara (Acara)",
		value: "Acara (Acara)"
	},
	{
		key: 3,
		text: "Acara (Kreatif)",
		value: "Acara (Kreatif)"
	},
	{
		key: 4,
		text: "Humas",
		value: "Humas"
	},
	{
		key: 5,
		text: "Transkoper",
		value: "Transkoper"
	},
	{
		key: 6,
		text: "DDM",
		value: "DDM"
	},
	{
		key: 7,
		text: "Kemankes",
		value: "Kemankes"
	},
	{
		key: 8,
		text: "Kodanus",
		value: "Kodanus"
	},
	{
		key: 9,
		text: "Sponsor",
		value: "Sponsor"
	}
];

export default class FormPendaftaran extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			nama: "",
			prodi: "",
			contact: "",
			divisi1: "",
			divisi2: "",
			saran: "",
			loading: false
		};
	}

	handleChange = (e, { value }) => this.setState({ value });

	daftar = async (nama, nim, prodi) => {
		const body = {
			nim: nim,
			nama: nama,
			prodi: prodi,
			contact: this.state.contact,
			pilihan: "Filafest",
			divisi1: this.state.divisi1,
			divisi2: this.state.divisi2,
			saran: this.state.saran
		};
		console.log(body);
		await fetch(URL, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(response => {
				if (response.ok) {
					console.log("sukses");
					return response.json();
				}
				return response.json().then(error => {
					throw new Error(error.message);
				});
			})
			.then(ress => {
				// console.log(ress)
				this.props.history.replace("/success");
			});
	};


	render() {
		return (
			<AuthConsumer>
				{({ nama, nim, prodi }) => (
					<Grid columns={3} style={{marginTop:0,paddingTop:0,marginBottom:50}}>
						<Grid.Row stretched >
							<Grid.Column></Grid.Column>
							<Grid.Column>
								<Header textAlign="center" as='h1' content='Form Pendaftaran' />
								<Form onSubmit={() => {
									this.setState({ loading: true })
									this.daftar(nama, nim, prodi)
								}}>
									<Form.Input fluid label="Nama Lengkap" placeholder="Nama Lengkap" value={nama} readOnly />
									<Form.Input fluid label="Nama Panggilan" placeholder="Nama Panggilan"/>
									<Form.Input fluid label="NIM" placeholder="NIM" value={nim} readOnly />
									<Form.Input fluid label="TTL" placeholder="Tempat Tanggal Lahir"/>
									<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={prodi} readOnly />
									<Form.Input fluid label='Email' placeholder='Email' />
									<Form.Input fluid label="Line" placeholder="ID Line"/>
									<Form.Input fluid label="Instagram" placeholder="Instagram"/>
									<Form.Input fluid label="Hp" placeholder="No. HP"/>
									<Form.TextArea label="Alasan Mendaftar" required placeholder="Berikan alasanmu mendaftar menjadi kapel" onChange={val => this.setState({ saran: val.target.value })} />
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

							</Grid.Column>
							<Grid.Column></Grid.Column>
						</Grid.Row>
					</Grid>
				)}
			</AuthConsumer>
		);
	}
}
