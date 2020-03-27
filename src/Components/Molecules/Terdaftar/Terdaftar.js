import React from "react";
import { Message, Button } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
import { useParams } from 'react-router-dom';

export const Terdaftar = (props) => {

	let { proker } = useParams();

	const linknya = () => {
		let linkFilafest = "https://drive.google.com/drive/folders/1thF-RNs8jf2MRvCnoT_gKJO0pIYXOhNH";
		let linkPk2 = "https://drive.google.com/drive/folders/1BeGENyCDI64UctT3ZXG-LfBZTRRoXt4G";
		return proker === "filafest" ? linkFilafest : linkPk2;
	}


	return (
		<div style={{ marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div style={{ width: '50vw' }}>
				<Message>
					<br />
					<h1 style={{ textAlign: 'center', color: '#1897D4' }}>Terimakasih telah mendaftar Opten Kapel {proker}!</h1>
					<h3 style={{ color: 'red', textAlign: 'center' }}>Silahkan Download Berkas Offline Dibawah Ini!!!</h3>
					{<center>
						<a href={linknya()} target="_blank" style={{ 'color': 'white' }}>
							<Button className="center"
								primary
								centered
							>
								Berkas Offline
					</Button>
						</a>
					</center>}
					<h4 style={{ textAlign: 'center', color: '#192452' }}>All the best for you!!</h4>
					<br />
				</Message>
			</div>
		</div>
	)
};

export default GlobalConsumer(Terdaftar);
