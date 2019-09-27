import React, { Component } from "react";
import { Form, Button, Grid, Header, Label } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

// const URL = 'http://localhost:5000/api/web/protected/postOptenInau';
const URL = "https://backend-bem.herokuapp.com/api/web/protected/postOptenInau";

const divisi = [
	{ key: 'm', text: 'Acara', value: 'acara' },
	{ key: 'f', text: 'Humas', value: 'humas' },
	{ key: 'o', text: 'Transkoper (Transportasi, Akomodasi, dan Perlengkapan)', value: 'transkoper' },
	{ key: 'o', text: 'Kestari (Kesekretariatan)', value: 'kestari' },
	{ key: 'o', text: 'Kodanus ', value: 'kodanus' },
	{ key: 'o', text: 'DDM (Desain, Dokumentasi, dan Multimedia)', value: 'ddm' },
	{ key: 'o', text: 'Kemankes (Keamanan dan Kesehatan', value: 'kemankes' },
	{ key: 'o', text: 'Sponsorship', value: 'sponsorship' },
]

export default class FormPendaftaran extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			nama: "",
			panggilan: "",
			prodi: "",
			ttl: "",
			email: "",
			hp: "",
			line: "",
			ig: "",
			alasan: "",
			divisi1:"",
			divisi2 : "",
			loading: false,
		};
	}



	handleChange = (e, { value }) => this.setState({ value });

	daftar = async (nama, nim, prodi, token) => {
		const body = {
			nim: nim,
			nama: nama,
			panggilan: this.state.panggilan,
			prodi: prodi,
			ttl: this.state.ttl,
			email: this.state.email,
			hp: this.state.hp,
			line: this.state.line,
			ig: this.state.ig,
			divisi1 : this.state.divisi1,
			divisi1 : this.state.divisi1, 
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
				{({ nama, nim, prodi, token }) => (
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
						<Header textAlign="center" as='h1' content='Form Pendaftaran' />
						<div style={{ width: '50vw' }}>
							<Form onSubmit={() => {
								this.setState({ loading: true })
								this.daftar(nama, nim, prodi, token)
							}}>
								<Form.Input fluid label="Nama Lengkap" placeholder="Nama Lengkap" value={nama} readOnly />
								<Form.Input required fluid label="Nama Panggilan" onChange={(e) => { this.setState({ panggilan: e.target.value }) }} placeholder="Nama Panggilan" />
								<Form.Input fluid label="NIM" placeholder="NIM" value={nim} readOnly />
								{/*<Form.Input fluid label="TTL" placeholder="Tempat Tanggal Lahir"/>*/}
								<Label>TTL</Label>
								<SemanticDatepicker
									onDateChange={(e) => { this.setState({ ttl: e[0] }) }}
									type="range"
								/>
								<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={prodi} readOnly />
								<Form.Input required fluid label='Email' onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder='Email' />
								<Form.Input required fluid label="Line" onChange={(e) => { this.setState({ line: e.target.value }) }} placeholder="ID Line" />
								<Form.Input required fluid label="Instagram" onChange={(e) => { this.setState({ ig: e.target.value }) }} placeholder="Instagram" />
								<Form.Input required fluid label="Hp" onChange={(e) => { this.setState({ hp: e.target.value }) }} placeholder="No. HP" />
								{/* <Form.TextArea required label="Alasan Mendaftar" required placeholder="Berikan alasanmu mendaftar menjadi kapel" onChange={e => this.setState({alasan:e.target.value})} /> */}
								<Form.Select
									fluid
									label='Divisi 1'
									options={divisi}
									placeholder='Silahkan pilih divisi'
									onChange = {(e,{value})=>{
										this.setState({divisi1 : value})
									}} 
								/>
								<Form.Select
									fluid
									label='Silahkan pilih divisi'
									options={divisi}
									placeholder='Divisi 2'
									onChange = {(e,{value})=>{
										this.setState({divisi2 : value})
									}}
								/>
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
