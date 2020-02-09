import React, { Component } from "react";
import { Form, Button, Header} from "semantic-ui-react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { GlobalConsumer } from '../../../Config';

// const URL = 'http://localhost:5000/api/web/protected/postOprecStaffBemFilkom2020';
const URL = "https://backend-bem.herokuapp.com/api/web/protected/postOprecStaffBemFilkom2020";

class FormPendaftaran extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nim: "",
			nama: "",
			prodi: "",
			tempatLahir: "",
			tanggalLahir:"",
			alamatAsal: "",
			alamatTinggal: "",
			noHp_Line: "",
			email: "",
			mottoHidup: "",
			pilihan1: null,
			alasanMemilih1: "",
			pilihan2: null,
			alasanMemilih2: "",
			loading: false,
		};
	}

	handleChange = (e, { value }) => this.setState({ value });

	daftar = async (nama, nim, prodi, token) => {
		const body = {
			nim: nim,
			nama: nama,
			prodi: prodi,
			tempatLahir: this.state.tempatLahir,
			tanggalLahir : this.state.tanggalLahir,
			alamatAsal: this.state.alamatAsal,
			alamatTinggal: this.state.alamatTinggal,
			noHp_Line: this.state.noHp_Line,
			email: this.state.email,
			mottoHidup: this.state.mottoHidup,
			pilihan1: this.state.pilihan1,
			alasanMemilih1: this.state.alasanMemilih1,
			pilihan2: this.state.pilihan2,
			alasanMemilih2: this.state.alasanMemilih2
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
		// if (batas < sekarang) {
		// 	this.props.history.replace('/registered');
		// }
		// if (pembukaan > sekarang) {
		// 	this.props.history.replace('/closed')
		// }
		const jabatan = [
			{ key: 0, value: null, text: 'Kementrian Perhubungan', disabled: true },
			{ key: 1, value: 'Dirjen Dagri', text: 'Direktorat Jenderal Dalam Negeri' },
			{ key: 2, value: 'Dirjen Lugri', text: 'Direktorat Jenderal Luar Negeri' },
			{ key: 3, value: null, text: 'Kementrian Pengembangan Sumber Daya Manusia (PSDM)', disabled: true },
			{ key: 4, value: 'Dirjen Kaderisasi', text: 'Direktorat Jenderal Kaderisasi' },
			{ key: 5, value: 'Dirjen P2M', text: 'Direktorat Jenderal Pengembangan dan Pemberdayaan Mahasiswa (P2M)' },
			{ key: 20, value: 'null', text: 'Kementrian Keilmuan Karir Prestatif (K2P)', disabled : true},
			{ key: 6, value: 'K2P', text: 'Kementrian Keilmuan Karir Prestatif'},
			{ key: 21, value: 'null', text: 'Kementrian Advokasi dan Kesejahteraan Mahasiswa (Advokesma)', disabled:true},
			{ key: 7, value: 'Advokesma', text: 'Kementrian Advokasi dan Kesejahteraan Mahasiswa'},
			{ key: 22, value: 'null', text: 'Kementrian Kajian dan Aksi Strategis (Kastrat)', disabled:true},
			{ key: 8, value: 'Kastrat', text: 'Kementrian Kajian dan Aksi Strategis'},
			{ key: 9, value: null, text: 'kementrian Sosial Lingkungan (Sosling)', disabled: true },
			{ key: 23, value: 'Dirjen LH', text: 'Direktorat Jenderal Lingkungan Hidup' },
			{ key: 11, value: 'Dirjen PengMas', text: 'Direktorat Jenderal Pengabdian Masyarakat' },
			{ key: 24, value: 'Bismit', text: 'Biro Bisnis dan Kemitraan (Bismit)', disabled:true},
			{ key: 12, value: 'Bismit', text: 'Biro Bisnis dan Kemitraan'},
			{ key: 25, value: 'null', text: 'Biro Administrasi Keseketariatan dan Keuangan (Adkeu)', disabled:true},
			{ key: 13, value: 'Adkeu', text: 'Biro Administrasi Keseketariatan dan Keuangan'},
			{ key: 14, value: null, text: 'Biro Media Kreatif dan Informasi (Medinkraf)', disabled: true },
			{ key: 15, value: 'Medkraf', text: 'Bagian Media Kreatif' },
			{ key: 16, value: 'Medinfo', text: 'Bagian Media Informasi' },
			{ key: 26, value: 'PIT', text: 'Biro Pengembangan Informasi Teknologi (PIT)', disabled:true},
			{ key: 17, value: 'PIT', text: 'Biro Pengembangan Informasi Teknologi'},
		]

		const jabatan2 = [
			{ key: 18, value: 'Tidak Memilih', text: '--Tidak Memilih--' },
			...jabatan,
		]

		return (
			<React.Fragment>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
					<Header textAlign="center" as='h1' content='Form Pendaftaran Online' />
					<div style={{ width: '50vw' }}>
						<Form onSubmit={() => {
							this.setState({ loading: true })
							this.daftar(this.props.nama, this.props.nim, this.props.prodi, this.props.stoken)
						}}>
							<Form.Input fluid label="Nama" placeholder="Nama" value={this.props.nama} readOnly />
							<Form.Input fluid label="NIM" placeholder="NIM" value={this.props.nim} readOnly />
							<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={this.props.prodi} readOnly />
							<Form.Input required fluid label="Tempat Lahir" onChange={(e) => { this.setState({ tempatLahir: e.target.value }) }} placeholder="Tempat Lahir" />
							<SemanticDatepicker required label="Tanggal Lahir" onDateChange={(e) => { this.setState({tanggalLahir : e.toString}) }}/>
							<Form.Input required fluid label="Alamat Asal" onChange={(e) => { this.setState({ alamatAsal: e.target.value }) }} placeholder="Alamat Asal" />
							<Form.Input required fluid label="Alamat Tinggal" onChange={(e) => { this.setState({ alamatTinggal: e.target.value }) }} placeholder="Alamat Tinggal di Malang" />
							<Form.Input required fluid label="no. HP/Line" onChange={(e) => { this.setState({ noHp_Line: e.target.value }) }} placeholder="No HP/ID Line" />
							<Form.Input required fluid label="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Email" />
							<Form.Input required fluid label="Motto Hidup" onChange={(e) => { this.setState({ mottoHidup: e.target.value }) }} placeholder="Motto Hidup" />
							<Form.Dropdown clearable required fluid selection options={jabatan} label="Pilihan Pertama" placeholder="Silahkan pilih" onChange={(e, { value }) => { this.setState({ pilihan1: value }) }} />
							<Form.TextArea required fluid label="Alasan Memilih" onChange={(e) => { this.setState({ alasanMemilih1: e.target.value }) }} placeholder="Alasan Memilih" />
							<Form.Dropdown clearable required fluid selection options={jabatan2} label="Pilihan Kedua" placeholder="Silahkan pilih" onChange={(e, { value }) => { this.setState({ pilihan2: value }) }} />
							<Form.TextArea required fluid label="Alasan Memilih" onChange={(e) => { this.setState({ alasanMemilih2: e.target.value }) }} placeholder="Alasan Memilih" />
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
			</React.Fragment>
		);
	}
}

export default GlobalConsumer(FormPendaftaran);