import React from 'react';
import { Form, Button, Header, Message } from "semantic-ui-react";
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { GlobalConsumer } from '../../../Config';
// import { useParams } from 'react-router-dom';

function Formpk2Temp(props) {
    // State untuk form pemohon
    const [pesan, setPesan] = React.useState(false);
    
    const [loading, setLoading] = React.useState(false);

    function useFormInput(initialValue) {
        const [value, setValue] = React.useState(initialValue);

        const onChange = e => {
            setValue(e.target.value);
        }

        return {
            value,
            onChange,
        };
    }

    function useFormDropdown(initialValue) {
        const [nilai,setValue] = React.useState(initialValue);

        const onChange = e => {
            console.log(e.target.value)
            setValue(e.target.textContent)
        }

        return{
            onChange,
            nilai
        }
    }

    // let { proker } = useParams();

    const divisi = [
        { key: 1, value: 'acara', text: 'Divisi Acara' },
        { key: 2, value: 'sqc', text: 'Divisi Student Quality Control' },
        { key: 4, value: 'humas', text: 'Divisi Hubungan Masyarakat (Humas)' },
        { key: 5, value: 'perkap', text: 'Divisi Perlengkapan' },
        { key: 6, value: 'pit', text: 'Divisi Publikasi dan IT' },
        { key: 7, value: 'kestari', text: 'Divisi Kestari' },
        { key: 8, value: 'korlap', text: 'Divisi Koordinator Lapangan (Korlap)' },
        { key: 9, value: 'komkes', text: 'Divisi Konsumsi dan Kesehatan (Komkes)' },
        { key: 10, value: 'pendamping', text: 'Divisi Pendamping' },
        { key: 11, value: 'ddm', text: 'Divisi Dokumentasi, Desain, dan Multimedia (DDM)' },
    ]

    const childProps = [
        {
            key: "nama",
            value: props.nama,
            readOnly: true,
            label: "Nama",
            placeholder: "Nama"
        },
        {
            key: "nim",
            value: props.nim,
            readOnly: true,
            label: "NIM",
            placeholder: "NIM"
        },
        {
            key: "prodi",
            value: props.prodi,
            readOnly: true,
            label: "Program Studi",
            placeholder: "Prodi"
        },
        {
            key: "ttl",
            ...useFormInput(''),
            required: true,
            label: "Tempat Tanggal Lahir",
            placeholder: "Masukkan Tempat dan Tanggal Lahir"
        },
        {
            key: "asal",
            ...useFormInput(''),
            required: true,
            label: "Alamat Asal",
            placeholder: "Alamat tempat tinggal asal"
        },
        {
            key: "tinggal",
            ...useFormInput(''),
            required: true,
            label: "Alamat Tinggal",
            placeholder: "Alamat di Malang"
        },
        {
            key: "kontak",
            ...useFormInput(''),
            required: true,
            label: "Kontak",
            placeholder: "No. HP/ID Line"
        },
        {
            key: "email",
            ...useFormInput(''),
            required: true,
            label: "Email",
            placeholder: "Email"
        },
        {
            key: "motto",
            ...useFormInput(''),
            required: true,
            label: "Motto Hidup",
            placeholder: "Motto"
        },
        {
            key: "pilihan1",
            ...useFormDropdown(null),
            required: true,
            label: "Pilihan Divisi 1",
            cond: "dropdown",
            placeholder: "Pilihan Divisi pertama"
        },
        {
            key: "alasan1",
            ...useFormInput(''),
            required: true,
            label: "Alasan Memilih Divisi",
            cond: "area",
            placeholder: "Alasan memilih"
        },
        {
            key: "pilihan2",
            ...useFormDropdown(null),
            required: true,
            label: "Pilihan Divisi 2",
            cond: "dropdown",
            placeholder: "Pilihan Divisi kedua"
        },
        {
            key: "alasan2",
            ...useFormInput(''),
            required: true,
            label: "Alasan Memilih Divisi",
            cond: "area",
            placeholder: "Alasan memilih"
        },
        {
            key: "linkDrive",
            ...useFormInput(''),
            required: true,
            label: "Link Drive",
            placeholder: "Link drive untuk berkas offline"
        },
    ]

    const daftar = async (nama, nim, prodi) => {
        const body = {
            nim: nim,
            nama: nama,
            prodi: prodi,
            ttl: childProps.find(isi => isi["key"] === "ttl").value,
            alamatAsal: childProps.find(isi => isi["key"] === "asal").value,
            alamatTinggal: childProps.find(isi => isi["key"] === "tinggal").value,
            kontak: childProps.find(isi => isi["key"] === "kontak").value,
            email: childProps.find(isi => isi["key"] === "email").value,
            mottoHidup: childProps.find(isi => isi["key"] === "motto").value,
            pilihan1: childProps.find(isi => isi["key"] === "pilihan1").nilai,
            alasanMemilih1: childProps.find(isi => isi["key"] === "alasan1").value,
            pilihan2: childProps.find(isi => isi["key"] === "pilihan2").nilai,
            alasanMemilih2: childProps.find(isi => isi["key"] === "alasan2").value,
            linkDrive: childProps.find(isi => isi["key"] === "linkDrive").value
        };
        // console.log("isiBody", body)
        // const URL = "https://bemfilkom.ub.ac.id/secure/api/2020/KapelProkerBesar/";
        // https://cors-anywhere.herokuapp.com/
        // const URL = "https://bemfilkom.ub.ac.id/secure/api/2020/OprecStaffPK2/";
        const URL = "https://bemfilkom.ub.ac.id/secure/api/2020/OprecStaffFilafest";
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
            setLoading(false);
            alert("Ups!! Terjadi Masalah Koneksi");
        } else {
            // let par = proker;
            props.history.replace(`/terdaftar`);
        }
    };

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
                <Header textAlign="center" as='h1' content='Form Pendaftaran Online Filafest' />
                <div style={{ width: '50vw' }}>
                    <Form onSubmit={() => {
                        if ((childProps.find(isi => isi["key"] === "pilihan1").nilai == null) || (childProps.find(isi => isi["key"] === "pilihan2").nilai == null)) {
                            setPesan(true);
                        } else {
                            setLoading(true);
                            setPesan(false)
                            daftar(props.nama, props.nim, props.prodi);
                        }
                    }}>
                        {
                            childProps.map((isi) => {
                                if (isi.cond == "area") {
                                    return (
                                        <React.Fragment>
                                            <Form.TextArea fluid {...isi} />
                                        </React.Fragment>
                                    )
                                } else if (isi.cond == "dropdown") {
                                    return (
                                        <React.Fragment>
                                            <Form.Dropdown required selection clearable fluid options={divisi} {...isi} />
                                        </React.Fragment>
                                    )
                                } else {
                                    return (
                                        <React.Fragment>
                                            <Form.Input fluid {...isi} />
                                        </React.Fragment>
                                    )
                                }
                            })
                        }
                        {loading === false && (
                            <Button
                                color="blue"
                                fluid
                            >
                                Submit
                            </Button>
                        )}
                        {loading === true && (
                            <Button color="blue" loading fluid>
                                Login
                            </Button>
                        )}
                    </Form>
                    <br />
                    {pesan === true && (
                        <Message
                            style={{ marginBottom: 50, marginTop: -10 }}
                            error
                            header='Pilihan Kosong'
                            content='Silahkan isi pilihan pertama dan kedua anda'
                        />
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default GlobalConsumer(Formpk2Temp);