import React from "react";
import { Message, Button } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';

export const Terdaftar = () => (
	<div style={{ marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
		<div style={{ width: '50vw' }}>
			<Message success>
				<h1>Terimakasih telah mendaftar! Kami tunggu kontribusi dan ide terbaik anak muda FILKOM Brawijaya!</h1>
				<h4 style={{ textAlign: "center", color: "red" }}>Jangan lupa download Link Berkas Open Bidding yang tertera di bawah ini:</h4>
				{<center>
					<Button className="center"
						primary
						centered
					>
						<Button.Content visible><a href="http://bit.ly/BerkasOpenBiddingBEMFILKOMUB2020" target="_blank" style={{ 'color': 'white' }}>Download Berkas Offline</a></Button.Content>
					</Button>
				</center>}
			</Message>
		</div>
	</div>
);

export default GlobalConsumer(Terdaftar);
