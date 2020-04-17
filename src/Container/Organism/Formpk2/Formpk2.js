import React, { Component } from 'react';
import { Form, Button, Header } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';

// const URL = 'http://localhost:5000/api/web/protected/postOprecStaffBemFilkom2020';
// const URL = "https://backend-bem.herokuapp.com/api/web/protected/postOprecStaffBemFilkom2020";

class Formpk2 extends Component {
    //State untuk form pemohon
    // function useFormInput(initialValue) {
    //     const [value, setValue] = React.useState(initialValue);

    //     const onChange = e => {
    //         setValue(e.target.value);
    //     }

    //     return {
    //         value,
    //         onChange,
    //     };
    // }

    // const [loading, setLoading] = React.useState(false);

    // const childProps = [
    //     {
    //         key: "nama",
    //         value : props.nama,
    //         readOnly: true,
    //         text: "Nama"
    //     },
    //     {
    //         key: "nim",
    //         value : props.nim,
    //         readOnly: true,
    //         text: "NIM"
    //     },
    //     {
    //         key: "prodi",
    //         value : props.prodi,
    //         readOnly: true,
    //         text: "Prodi",
    //     },
    //     {
    //         key: "ttl",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Tempat Tanggal Lahir",
    //     },
    //     {
    //         key: "asal",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Alamat Asal",
    //     },
    //     {
    //         key: "tinggal",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Alamat Tinggal",
    //     },
    //     {
    //         key: "kontak",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "No. HP/ID Line",
    //     },
    //     {
    //         key: "email",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Email",
    //     },
    //     {
    //         key: "motto",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Motto Hidup",
    //     },
    //     {
    //         key: "alasan",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Alasan Mendaftar",
    //         area: true
    //     },
    //     {
    //         key: "lebihkurang",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Kelebihan/Kekurangan",
    //         area: true
    //     },
    //     {
    //         key: "organisasi",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Pengalaman Organisasi",
    //         area: true
    //     },
    //     {
    //         key: "kepanitiaan",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Pengalaman Kepanitiaan",
    //         area: true
    //     },
    //     {
    //         key: "lainnya",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Pengalaman Lainnya",
    //         area: true
    //     },
    //     {
    //         key: "prestasi",
    //         ...useFormInput(''),
    //         required: true,
    //         text: "Prestasi",
    //         area: true
    //     },
    // ]

    constructor(props) {
		super(props);
		this.state = {
			nim: "",
			nama: "",
			prodi: "",
			ttl:"",
			alamatAsal: "",
			alamatTinggal: "",
			kontak: "",
			email: "",
			mottoHidup: "",
            alasanMendaftar: "",
            lebihkurang : "",
            organisasi : "",
            kepanitiaan : "",
            lainnya : "",
            prestasi : "",
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
            ttl: this.setState.ttl,
            alamatAsal: this.state.alamatAsal,
            alamatTinggal: this.state.alamatTinggal,
            kontak: this.state.kontak,
            email: this.state.email,
            motto: this.state.mottoHidup,
            alasan: this.state.alasanMendaftar,
            lebihKurang: this.state.lebihkurang,
            organisasi: this.state.organisasi,
            kepanitiaan: this.state.kepanitiaan,
            lainnya: this.state.lainnya,
            prestasi: this.state.prestasi,
            // prestasi: childProps.find(isi => isi["key"] === "prestasi").value,
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
		// console.log(data);
		if (!result.ok) {
            return false;
            this.setState({ loading: false });
            alert("Terjadi Kesalahan Koneksi");
		} else {
            let par = this.props.match.params.proker;
            this.props.history.replace(`/oprec/terdaftar/${par}`);
		}
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
                    <Header textAlign="center" as='h1' content='Form Pendaftaran Online PK2' />
                    <div style={{ width: '50vw' }}>
                        <Form onSubmit={() => {
                            this.setState({ loading: true })
                            this.daftar(this.props.nama, this.props.nim, this.props.prodi, this.props.kondisi)
                        }}>
                        <Form.Input fluid label="Nama" placeholder="Nama" value={this.props.nama} readOnly />
						<Form.Input fluid label="NIM" placeholder="NIM" value={this.props.nim} readOnly />
						<Form.Input fluid label="Program Studi" placeholder="Program Studi" value={this.props.prodi} readOnly />
						<Form.Input required fluid label="Tempat Lahir" onChange={(e) => { this.setState({ tempatLahir: e.target.value }) }} placeholder="Tempat Lahir" />
						<Form.Input required fluid label="Alamat Asal" onChange={(e) => { this.setState({ alamatAsal: e.target.value }) }} placeholder="Alamat Asal" />
						<Form.Input required fluid label="Alamat Tinggal" onChange={(e) => { this.setState({ alamatTinggal: e.target.value }) }} placeholder="Alamat Tinggal di Malang" />
						<Form.Input required fluid label="no. HP/Line" onChange={(e) => { this.setState({ kontak: e.target.value }) }} placeholder="No HP/ID Line" />
						<Form.Input required fluid label="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Email" />
						<Form.Input required fluid label="Motto Hidup" onChange={(e) => { this.setState({ mottoHidup: e.target.value }) }} placeholder="Motto Hidup" />
						<Form.TextArea required fluid label="Alasan Mendaftar" onChange={(e) => { this.setState({ alasanMendaftar: e.target.value }) }} placeholder="Alasan Mendaftar" />
                        <Form.TextArea required fluid label="Kekurangan/Kelebihan" onChange={(e) => { this.setState({ kuranglebih: e.target.value }) }} placeholder="Tulis Kekurangan atau kelebihan" />
                        <Form.TextArea required fluid label="Pengalaman Organanisasi" onChange={(e) => { this.setState({ organisasi: e.target.value }) }} placeholder="Tuliskan Pengalaman Organisasi" />
                        <Form.TextArea required fluid label="Pengalaman Kepanitiaan" onChange={(e) => { this.setState({ kepanitiaan: e.target.value }) }} placeholder="Tuliskan Pengalaman Kepanitiaan" />
                        <Form.TextArea required fluid label="Pengalaman Lainnya" onChange={(e) => { this.setState({ lainnya: e.target.value }) }} placeholder="Tuliskan Pengalaman Lainnya" />
                        <Form.TextArea required fluid label="Prestasi" onChange={(e) => { this.setState({ prestasi: e.target.value }) }} placeholder="Tuliskan prestasi yang pernah diraih" />
                            {/* {
                                childProps.map((isi) => {
                                    if (isi.area == true) {
                                        return (
                                            <React.Fragment>
                                                <Form.TextArea fluid value={isi.value} readOnly={isi.readOnly} required={isi.required} label={isi.text} onChange={isi.onChange} placeholder={isi.text} />
                                            </React.Fragment>
                                        )
                                    } else {
                                        return (
                                            <React.Fragment>
                                                <Form.Input fluid value={isi.value} readOnly={isi.readOnly} required={isi.required} label={isi.text} onChange={isi.onChange} placeholder={isi.text} />
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

export default GlobalConsumer(Formpk2);