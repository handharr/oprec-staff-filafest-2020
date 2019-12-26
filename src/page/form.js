import React, { Component } from "react";
import { Form, Button, Header, Input, Message } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

// const URL = 'http://localhost:5000/api/web/protected/postOpenBiddingBem2020';
const URL = "https://backend-bem.herokuapp.com/api/web/protected/postOpenBiddingBem2020";

export default class FormPendaftaran extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			nama: "",
			prodi: "",
			idLine: "",
			pilihan1: "",
			pilihan2: "",
			loading: false,
		};
	}

	handleChange = (e, { value }) => this.setState({ value });

	daftar = async (nama, nim, prodi, token) => {
		const body = {
			nim: nim,
			nama: nama,
			prodi: prodi,
			idLine: this.state.idLine,
			pilihan1: this.state.pilihan1,
			pilihan2: this.state.pilihan2
		};
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
		var batas = new Date("2020-01-04T24:00:00+07:00");
		var pembukaan = new Date("2019-10-21T18:00:00+07:00");
		var sekarang = new Date();
		if (batas < sekarang) {
			this.props.history.replace('/registered');
		}
		// if (pembukaan > sekarang) {
		// 	this.props.history.replace('/closed')
		// }
		const jabatan = [
			{ key: 0, value: null, text: 'Pengembangan Sumber Daya Internal (PSDI)', disabled: true },
			{ key: 1, value: 'PSDI', text: 'Anggota PSDI' },
			{ key: 2, value: null, text: 'Pengembangan Sumber Daya Manusia (PSDM)', disabled: true },
			{ key: 3, value: 'Menteri PSDM', text: 'Menteri PSDM' },
			{ key: 4, value: 'Dirjen Kaderisasi', text: 'Dirjen Kaderisasi' },
			{ key: 5, value: 'Dirjen P2M', text: 'Dirjen P2M' },
			{ key: 6, value: null, text: 'Keilmuan Karir Prestatif (K2P)', disabled: true },
			{ key: 7, value: 'Mentri KKP', text: 'Mentri K2P' },
			{ key: 8, value: 'Wakil Mentri KKP', text: 'Wakil Mentri K2P' },
			{ key: 9, value: null, text: 'Perhubungan', disabled: true },
			{ key: 10, value: 'Menteri Perhubungan', text: 'Menteri Perhubungan' },
			{ key: 11, value: 'Dirjen Dalam Negeri', text: 'Dirjen Dalam Negeri' },
			{ key: 12, value: 'Dirjen Luar Negeri', text: 'Dirjen Luar Negeri' },
			{ key: 13, value: null, text: 'Advokasi dan Kesejahteraan Mahasiswa (Advokesma)', disabled: true },
			{ key: 14, value: 'Menteri Advokesma', text: 'Menteri Advokesma' },
			{ key: 15, value: 'Dirjen Advojakpus', text: 'Dirjen Advokasi dan Kebijakan Kampus' },
			{ key: 16, value: 'Dirjen Kesma', text: 'Dirjen Kesejahteraan Mahasiswa' },
			{ key: 17, value: null, text: 'Sosial Lingkungan (Sosling)', disabled: true },
			{ key: 18, value: 'Menteri Sosling', text: 'Menteri Sosling' },
			{ key: 19, value: 'Dirjen Lingkungan Hidup', text: 'Dirjen Lingkungan Hidup' },
			{ key: 20, value: 'Dirjen Pengabdian Masyarakat', text: 'Dirjen Pengabdian Masyarakat' },
			{ key: 21, value: null, text: 'Kajian dan Aksi Strategis (Kastrat)', disabled: true },
			{ key: 22, value: 'Menteri Kastrat', text: 'Menteri Kastrat' },
			{ key: 23, value: 'Wakil Menteri Kastrat', text: 'Wakil Menteri Kastrat' },
			{ key: 24, value: null, text: 'Biro Pengembangan Informasi Teknologi (PIT)', disabled: true },
			{ key: 25, value: 'Kabiro PIT', text: 'Kepala Biro PIT' },
			{ key: 26, value: 'Wakabiro PIT', text: 'Wakil Kepala Biro PIT' },
			{ key: 27, value: null, text: 'Biro Bisnis dan Kemitraan (Bismit)', disabled: true },
			{ key: 28, value: 'Kabiro Bismit', text: 'Kepala Biro Bismit' },
			{ key: 29, value: 'Wakabiro Bismit', text: 'Wakil Kepala Biro Bismit' },
			{ key: 30, value: null, text: 'Biro Administrasi Keseketariatan dan Keuangan (Adkeu)', disabled: true },
			{ key: 31, value: 'Kabiro Adkeu', text: 'Kepala Biro Adkeu' },
			{ key: 32, value: 'Kabag Adkest', text: 'Kepala Bagian Administrasi Kesekretariatan' },
			{ key: 33, value: 'Kabag Adkeu', text: 'Kepala Bagian Administrasi Keuangan' },
			{ key: 34, value: null, text: 'Biro Media Kreatif dan Informasi', disabled: true },
			{ key: 35, value: 'Kabiro Media Kreatif dan Informasi', text: 'Kepala Biro Media Kreatif dan Informasi' },
			{ key: 36, value: 'Kabag Medkraf', text: 'Kepala Bagian Media Kreatif' },
			{ key: 37, value: 'Kabag Medinfo', text: 'Kepala Bagian Media Informasi' },
		]

		const jabatan2 = [
			{ key: 38, value: 'Tidak Memilih', text: '--Tidak Memilih--' },
			...jabatan,
		]

		return (
			<AuthConsumer>
				{({ nama, nim, prodi, token }) => (
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
						<Header textAlign="center" as='h1' content='Form Pendaftaran Online' />
						<div style={{ width: '50vw' }}>
							<Form onSubmit={() => {
								this.setState({ loading: true })
								this.daftar()
							}}>
								<Form.Input fluid label="Nama" placeholder="Nama" value={nama} readOnly  />
								<Form.Input fluid label="NIM" placeholder="NIM" value={nim}  readOnly/>
								<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={prodi} readOnly  />
								<Form.Input required fluid label="Line" onChange={(e) => { this.setState({ idLine: e.target.value }) }} placeholder="ID Line" />
								<Form.Dropdown clearable required fluid selection options={jabatan} label="Pilihan Pertama" placeholder="Silahkan pilih" onChange={(e, { value }) => { this.setState({ pilihan1: value }) }} />
								<Form.Dropdown clearable required fluid selection options={jabatan2} label="Pilihan Kedua" placeholder="Silahkan pilih" onChange={(e, { value }) => { this.setState({ pilihan2: value }) }} />
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