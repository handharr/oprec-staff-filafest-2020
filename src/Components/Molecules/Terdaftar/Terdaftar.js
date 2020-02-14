import React from "react";
import { Message, Button } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';

export const Terdaftar = () => (
	<div style={{ marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
		<div style={{ width: '50vw' }}>
			<Message>
				<br />
				<h1 style={{ textAlign: 'center', color: '#1897D4' }}>Terimakasih telah mendaftar!</h1>
				<h4 style={{ color: '#192452', textAlign: 'center' }}>Nantikan pengumuman lebih lanjut mengenai jadwal interview dan FGD. Dan jangan lupa untuk upload twibbonmu yang dapat kalian temukan disini</h4>
				{<center>
					<a href="https://drive.google.com/drive/folders/1q-6B779LoU9H8c7679Xomfyt7vaTD8Fq?usp=sharing" target="_blank" style={{ 'color': 'white' }}>
						<Button className="center"
							primary
							centered
						>
							Download Twibbon
					</Button>
					</a>
				</center>}
				<h4 style={{ textAlign: 'center', color: '#192452' }}>All the best for you!!</h4>
				<br />
			</Message>
		</div>
	</div>
);

export default GlobalConsumer(Terdaftar);
