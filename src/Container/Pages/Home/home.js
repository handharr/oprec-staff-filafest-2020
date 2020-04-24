import React from "react";
import { Button, Container, Divider } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
import { HomeHeader, KontenSatu, KontenTiga } from '../../../Components/Molecules';
// import { useParams } from 'react-router-dom';
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
				tgl: "26 April - 02 Mei 2020",
				desc: "Pendaftaran Online",
				color: "olive"
			},
			{
				tgl: "30 April - 05 Mei 2020",
				desc: "Online Screening",
				color: "blue"
			},
			{
				tgl: "07 Mei 2020",
				desc: "Pengumuman",
				color: "green"
			}
		],
		{
			teks1: "Timeline Open Recruitment Staff",
			teks2: "Rangkaian kegiatan Open Recruitment Staff Filafest 2020",
		}
	]


	return (
		<React.Fragment>
			<HomeHeader />
			<Divider hidden />
			<Container>
				<KontenSatu event={filafest[0]} />
				<br />
				<Divider section />
				<KontenTiga judul={filafest[2]} isi={filafest[1]} />
				<br></br>
				<div className="ui middle aligned center aligned container">
					<Button
						size="big"
						positive
						centered
						onClick={async () => {
							// let par = proker;
							props.history.replace("/pendaftaran");
						}}>
						<Button.Content visible>Daftar Oprec Filafest</Button.Content>
					</Button>
				</div>
				<Divider hidden />
			</Container>
		</React.Fragment>
	);
}

export default GlobalConsumer(Home);