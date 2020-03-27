import React from 'react';
import { Form, Button, Header } from "semantic-ui-react";
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { GlobalConsumer } from '../../../Config';
import { useParams } from 'react-router-dom';

function Formpk2Temp(props) {
    // State untuk form pemohon
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

    let { proker } = useParams();

    const [loading, setLoading] = React.useState(false);

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
            key: "alasan",
            ...useFormInput(''),
            required: true,
            label: "Alasan Mendaftar",
            area: true,
            placeholder: "Alasan Mendaftar Opten"
        },
        {
            key: "lebihkurang",
            ...useFormInput(''),
            required: true,
            label: "Kelebihan/Kekurangan",
            placeholder : "Kelebihan dan Kekurangan",
            area: true
        },
        {
            key: "organisasi",
            ...useFormInput(''),
            required: true,
            label: "Pengalaman Organisasi",
            placeholder : "Pengalaman organisasi yang dimiliki",
            area: true
        },
        {
            key: "kepanitiaan",
            ...useFormInput(''),
            required: true,
            label: "Pengalaman Kepanitiaan",
            placeholder : "Kepanitiaan yang pernah diikuti",
            area: true
        },
        {
            key: "lainnya",
            ...useFormInput(''),
            required: true,
            label : "Pengalaman Lainnya",
            placeholder : "Pengalaman lain yang dimiliki",
            area: true
        },
        {
            key: "prestasi",
            ...useFormInput(''),
            required: true,
            label : "Prestasi",
            placeholder : "Prestasi yang pernah diraih",
            area: true
        },
    ]

    const daftar = async (nama, nim, prodi, kond) => {
        const body = {
            proker: kond,
            nim: nim,
            nama: nama,
            prodi: prodi,
            ttl: childProps.find(isi => isi["key"] === "ttl").value,
            alamatAsal: childProps.find(isi => isi["key"] === "asal").value,
            alamatTinggal: childProps.find(isi => isi["key"] === "tinggal").value,
            kontak: childProps.find(isi => isi["key"] === "kontak").value,
            email: childProps.find(isi => isi["key"] === "email").value,
            motto: childProps.find(isi => isi["key"] === "motto").value,
            alasan: childProps.find(isi => isi["key"] === "alasan").value,
            lebihkurang : childProps.find(isi => isi["key"] === "lebihkurang").value,
            organisasi : childProps.find(isi => isi["key"] === "organisasi").value,
            kepanitiaan : childProps.find(isi => isi["key"] === "kepanitiaan").value,
            lainnya : childProps.find(isi => isi["key"] === "lainnya").value,
            prestasi : childProps.find(isi => isi["key"] === "prestasi").value,
        };
        // console.log("isiBody", body)
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
            setLoading(false);
            alert("Ups!! Terjadi Masalah Koneksi");
        } else {
            let par = proker;
            props.history.replace(`/oprec/terdaftar/${par}`);
        }
    };

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vw' }}>
                <Header textAlign="center" as='h1' content='Form Pendaftaran Online Filafest' />
                <div style={{ width: '50vw' }}>
                    <Form onSubmit={() => {
                        setLoading(true);
                        daftar(props.nama, props.nim, props.prodi, proker);
                    }}>
                        {
                            childProps.map((isi) => {
                                if (isi.area == true) {
                                    return (
                                        <React.Fragment>
                                            <Form.TextArea fluid {...isi} />
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
                </div>
            </div>
        </React.Fragment>
    );
}

export default GlobalConsumer(Formpk2Temp);