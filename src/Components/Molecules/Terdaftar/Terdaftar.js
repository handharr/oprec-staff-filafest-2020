import React from "react";
import { Message, Button, Form, Divider } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
// import { useParams } from 'react-router-dom';

export const Terdaftar = (props) => {

	// let { proker } = useParams();

	const [linkdrive, setLink] = React.useState("");

	let linkpk2 = "https://drive.google.com/open?id=1gH5eJlxn23LN2lyTkB5GrPK_N9hs8kfW";

	return (
		<div style={{ marginTop: 50, marginBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div style={{ width: '50vw' }}>
				<Message>
					<br />
					<h1 style={{ textAlign: 'center', color: '#1897D4' }}>Terimakasih telah mendaftar Open Recruitment Staff PK2MABA 2020!</h1>
					<br />
					{/* <h3 style={{ color: 'red', textAlign: 'center' }}>Silahkan Download Berkas Offline Dibawah Ini!!!</h3>
					<center>
						<a href={linkpk2} target="_blank" style={{ 'color': 'white' }}>
							<Button className="center"
								primary
								centered
							>
								Berkas Offline
							</Button>
						</a>
					</center> */}
					{/* <br /> */}
					{/* <Divider /> */}
					{/* <center>
						<h4>Jika berkas offline telah siap, silahkan masukkan link Gdrive berkas anda disini</h4>
						<p style={{ textAlign: "center" }}>*Anda dapat logout dan login kembali untuk mengumpulkan berkas</p>
						<Form
							style={{ width: "70%", textAlign: "center" }}
							onSubmit={
								daftar()
							}
						>
							<Form.Input
								placeholder="Link Drive"
								onSubmit={(e) => {
									setLink(e.target.value)
								}}
								required
							/>
							<Button primary >Upload Link</Button>
						</Form>
					</center> */}
					<h3 style={{ textAlign: 'center', color: '#192452' }}>All the best for you!!</h3>
					<br />
				</Message>
			</div>
		</div>
	)
};

export default GlobalConsumer(Terdaftar);
