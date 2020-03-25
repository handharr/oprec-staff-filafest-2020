import React, { Component } from "react";
import { Form, Button, Header } from "semantic-ui-react";
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { GlobalConsumer } from '../../../Config';

// const URL = 'http://localhost:5000/api/web/protected/postOprecStaffBemFilkom2020';
// const URL = "https://backend-bem.herokuapp.com/api/web/protected/postOprecStaffBemFilkom2020";

class FormPendaftaran extends Component {
	//State untuk form pemohon
	// function useFormInput(initialValue) {
	// 	const [value, setValue] = React.useState(initialValue);

	// 	const onChange = e => {
	// 		setValue(e.target.value);
	// 	}

	// 	return {
	// 		value,
	// 		onChange,
	// 	};
	// }

	// const [loading, setLoading] = React.useState(false);

	// const childProps = [
	// 	{
	// 		key: "nama",
	// 		value : props.nama,
	// 		readOnly: true,
	// 		text: "Nama"
	// 	},
	// 	{
	// 		key: "nim",
	// 		value : props.nim,
	// 		readOnly: true,
	// 		text: "NIM"
	// 	},
	// 	{
	// 		key: "prodi",
	// 		value : props.prodi,
	// 		readOnly: true,
	// 		text: "Prodi",
	// 	},
	// 	{
	// 		key: "ttl",
	// 		...useFormInput(''),
	// 		required: true,
	// 		text: "Tempat Tanggal Lahir",
	// 	},
	// 	{
	// 		key: "asal",
	// 		...useFormInput(''),
	// 		required: true,
	// 		text: "Alamat Asal",
	// 	},
	// 	{
	// 		key: "tinggal",
	// 		...useFormInput(''),
	// 		required: true,
	// 		text: "Alamat Tinggal",
	// 	},
	// 	{
	// 		key: "kontak",
	// 		...useFormInput(''),
	// 		required: true,
	// 		text: "No. HP/ID Line",
	// 	},
	// 	{
	// 		key: "email",
	// 		...useFormInput(''),
	// 		required: true,
	// 		text: "Email",
	// 	},
	// 	{
	// 		key: "motto",
	// 		...useFormInput(''),
	// 		required: true,
	// 		text: "Motto Hidup",
	// 	},
	// 	{
	// 		key: "alasan",
	// 		...useFormInput(''),
	// 		required: true,
	// 		text: "Alasan Mendaftar",
	// 		area:true
	// 	},
	// ]


	constructor(props) {
		super(props);
		this.state = {
			ttl: "",
			alamatAsal: "",
			alamatTinggal: "",
			noHP_Line: "",
			email: "",
			mottoHidup: "",
			alasanMendaftar: "",
			kontak: "",
			loading: false,
		};
	}

	handleChange = (e, { value }) => this.setState({ value });

	daftar = async (nama, nim, prodi, kond) => {
		const body = {
			proker: kond,
			nim: nim,
			nama: nama,
			prodi: prodi,
			ttl: this.state.ttl,
			alamatAsal: this.state.alamatAsal,
			alamatTinggal: this.state.alamatTinggal,
			kontak: this.state.kontak,
			email: this.state.email,
			motto: this.state.mottoHidup,
			alasan: this.state.alasanMendaftar,
		};
		const URL = "https://cors-anywhere.herokuapp.com/https://bemfilkom.ub.ac.id/secure/api/2020/KapelProkerBesar/";
		const res = await fetch(URL, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(body)
		})
		const result = res;
		const data = await res.json();
		console.log(data);
		if (!result.ok) {
			return false;
		} else {
			this.props.history.replace("/terdaftar");
		}
		// .then(response => {
		// 	if (response.ok) {
		// 		console.log("sukses");
		// 		return response.json();
		// 	}
		// 	return response.json().then(error => {
		// 		throw new Error(error);
		// 	});
		// })
		// .then(ress => {
		// 	// console.log(ress)
		// 	this.props.history.replace("/terdaftar");
		// });
	};

	render() {
		// var batas = new Date("2020-02-15T16:00:00+07:00");
		// var pembukaan = new Date("2020-02-10T16:00:00+07:00");
		// var pengumuman = new Date("2020-02-19T10:00:00+07:00");
		// var sekarang = new Date();
		// if (sekarang > pengumuman) {
		// 	this.props.history.replace('/notif');
		// }
		// if (sekarang > batas) {
		// 	this.props.history.replace('/closed');
		// }
		// if (pembukaan > sekarang) {
		// 	this.props.history.replace('/close')
		// }

		return (
			<React.Fragment>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
					<Header textAlign="center" as='h1' content='Form Pendaftaran Online Filafest' />
					<div style={{ width: '50vw' }}>
						<Form onSubmit={() => {
							this.setState({ loading: true })
							this.daftar(this.props.nama, this.props.nim, this.props.prodi, this.props.kondisi)
						}}>
							<Form.Input fluid label="Nama" placeholder="Nama" value={this.props.nama} readOnly />
							<Form.Input fluid label="NIM" placeholder="NIM" value={this.props.nim} readOnly />
							<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={this.props.prodi} readOnly />
							<Form.Input required fluid label="Tempat Tanggal Lahir" onChange={(e) => { this.setState({ ttl: e.target.value }) }} placeholder="Tempat Lahir" />
							<Form.Input required fluid label="Alamat Tinggal" onChange={(e) => { this.setState({ alamatAsal: e.target.value }) }} placeholder="Alamat Asal" />
							<Form.Input required fluid label="Alamat Tinggal" onChange={(e) => { this.setState({ alamatTinggal: e.target.value }) }} placeholder="Alamat Tinggal di Malang" />
							<Form.Input required fluid label="no. HP/ ID Line" onChange={(e) => { this.setState({ kontak: e.target.value }) }} placeholder="No HP/ID Line" />
							<Form.Input required fluid label="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Email" />
							<Form.Input required fluid label="Motto Hidup" onChange={(e) => { this.setState({ mottoHidup: e.target.value }) }} placeholder="Motto Hidup" />
							<Form.TextArea required fluid label="Alasan Mendaftar" onChange={(e) => { this.setState({ alasanMendaftar: e.target.value }) }} placeholder="Alasan Mendaftar" />
							{/* {
								childProps.map((isi) => {
									if (isi.area == true) {
										return (
											<React.Fragment>
												<Form.TextArea fluid readOnly={isi.readOnly} required={isi.required} label={isi.text} onChange={isi.onChange} placeholder={isi.text} value={isi.value} />
											</React.Fragment>
										)
									} else {
										return (
											<React.Fragment>
												<Form.Input fluid readOnly={isi.readOnly} required={isi.required} label={isi.text} onChange={isi.onChange} placeholder={isi.text} value={isi.value} />
											</React.Fragment>
										)
									}
								})
							} */}

							{this.state.loading === false && (
								<Button
									color="blue"
									fluid
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
			</React.Fragment>
		);
	}
}

export default GlobalConsumer(FormPendaftaran);