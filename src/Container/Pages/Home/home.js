import React from "react";
import { Button, Container, Divider } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
import { HomeHeader, KontenSatu, KontenTiga } from '../../../Components/Molecules';
import { useParams } from 'react-router-dom';
import './style.scss';

function Home(props) {

	const filafest = [
		{
			teks1: "Filkom Anniversary Festival",
			teks2: "Apa sih Filafest itu?",
			teks3: "Filkom Anniversary Festival atau biasa disebut Diesnatalis Fakultas Ilmu Komputer yang bertujuan sebagai memperingati perayaan ulang tahun Fakultas Ilmu Komputer ke 9 Tahun yang dimana pelaksanaannya akan melibatkan panitia mahasiswa yang dibawahi oleh Kementrian Pengembangan Sumber Daya Mahasiswa khususnya Direktorat Jendral Pengembangan dan Pemberdayaan Manusia yang akan berkoordinasi dengan pihak dari panitia dosen terkait konsep acara dan pendanaan. Yang dimana dalam pelaksanannya acara Diesnatalis ini melibatkan seluruh Civitas Akademika Fakultas Ilmu Komputer serta Alumni.",
		},
		[
			{
				tgl: "28 Maret - 02 April 2020",
				desc: "Pendaftaran Online",
				color: "olive"
			},
			{
				tgl: "30 Maret - 03 April 2020",
				desc: "Pengumpulan Berkas Online",
				color: "blue"
			},
			{
				tgl: "05 - 07 April 2020",
				desc: "Fit and Propper Test Online",
				color: "blue"
			},
			{
				tgl: "09 April 2020",
				desc: "Pengumuman",
				color: "green"
			}
		],
		{
			teks1: "Timeline Open Tender Ketua Pelaksana",
			teks2: "Rangkaian kegiatan Open Tender Ketua Pelaksana Filafest 2020",
		}
	]

	const pk2 = [
		{
			teks1: "PK2MABA",
			teks2: "Apa sih PK2MABA itu?",
			teks3: "Pengenalan Kehidupan Kampus Mahasiswa Baru Merupakan rangkaian kegiatan yang memiliki tujuan untuk menyambut dan memperkenalkan kehidupan kampus kepada mahasiswa baru dengan menanamkan budaya dan nilai-nilai dasar sebagai mahasiswa aktif didalamnya yang berkolaborasi dengan pihak dekanat Filkom dalam pelaksanaannya.",
		},
		[
			{
				tgl: "28 Maret - 02 April 2020",
				desc: "Pendaftaran Online",
				color: "olive"
			},
			{
				tgl: "30 Maret - 03 April 2020",
				desc: "Pengumpulan Berkas Online",
				color: "blue"
			},
			{
				tgl: "05 - 07 April 2020",
				desc: "Fit and Propper Test Online",
				color: "blue"
			},
			{
				tgl: "09 April 2020",
				desc: "Pengumuman",
				color: "green"
			}
		],
		{
			teks1: "Timeline Open Tender Ketua Pelaksana",
			teks2: "Rangkaian kegiatan Open Tender Ketua Pelaksana PK2MABA 2020",
		}
	]

	let { proker } = useParams();

	const acara = () => {
		if (proker === "filafest") {
			return filafest;
		} else {
			return pk2
		}
	}

	return (
		<React.Fragment>
			<HomeHeader />
			<Divider hidden />
			<Container>
				<KontenSatu event={acara()[0]} />
				<br />
				<Divider section />
				<KontenTiga judul={acara()[2]} isi={acara()[1]} />
				<br></br>
				<div className="ui middle aligned center aligned container">
					<Button
						size="big"
						positive
						centered
						onClick={async () => {
							let par = proker;
							props.history.replace(`/oprec/login/${par}`);
						}}>
						<Button.Content visible>Daftar Opten {proker.toUpperCase()}</Button.Content>
					</Button>
				</div>
				<Divider hidden />
			</Container>
		</React.Fragment>
	);
}

export default GlobalConsumer(Home);