import React from "react";
import { Button, Container, Divider } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
import { HomeHeader, KontenSatu, KontenTiga } from '../../../Components/Molecules';
import { useParams } from 'react-router-dom';
import './style.scss';

function Home(props) {
	const pk2 = [
		{
			teks1: "PK2MABA",
			teks2: "Apa sih PK2MABA itu?",
			teks3: "Pengenalan Kehidupan Kampus Mahasiswa Baru Merupakan rangkaian kegiatan yang memiliki tujuan untuk menyambut dan memperkenalkan kehidupan kampus kepada mahasiswa baru dengan menanamkan budaya dan nilai-nilai dasar sebagai mahasiswa aktif didalamnya yang berkolaborasi dengan pihak dekanat Filkom dalam pelaksanaannya.",
		},
		[
			{
				tgl: "20 - 26 April 2020",
				desc: "Pendaftaran Online",
				color: "olive"
			},
			{
				tgl: "22 - 29 April 2020",
				desc: "Screening Online",
				color: "blue"
			},
			{
				tgl: "02 Mei 2020",
				desc: "Pengumuman",
				color: "green"
			}
		],
		{
			teks1: "Timeline Open Recruitment Staff",
			teks2: "Rangkaian kegiatan Open Recruitment Staff PK2MABA 2020",
		}
	]


	return (
		<React.Fragment>
			<HomeHeader />
			<Divider hidden />
			<Container>
				<KontenSatu event={pk2[0]} />
				<br />
				<Divider section />
				<KontenTiga judul={pk2[2]} isi={pk2[1]} />
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
						<Button.Content visible>Daftar Oprec PK2MABA</Button.Content>
					</Button>
				</div>
				<Divider hidden />
			</Container>
		</React.Fragment>
	);
}

export default GlobalConsumer(Home);