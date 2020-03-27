import React from "react";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config/Context';
import { useParams } from 'react-router-dom';

function LoginPage(props) {

	let { proker } = useParams();

	const [nim, setNim] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [message, setMessage] = React.useState(false);

	const acara = () => {
		if (proker === "filafest") {
			return "/oprec/formfilafest/filafest";
		} else {
			return "/oprec/formpk2/pk2maba";
		}
	}

	return (
		<React.Fragment>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

				<Header as="h2" textAlign="center" style={{ marginTop: 30 }}>
					Login Opten Kapel {proker.toUpperCase()}
					</Header>
				<div style={{ width: '50vw' }}>
					<Form size="large">
						<Form.Input fluid type="number" icon="user" iconPosition="left" placeholder="NIM" onChange={input => setNim(input.target.value)} />
						<Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" onChange={input => setPassword(input.target.value)} />
						{loading && (
							<Button fluid size="large" loading primary>
								Loading
							</Button>
						)}
						{loading === false && (
							<Button
								color="blue"
								fluid
								size="large"
								onClick={async () => {
									setLoading(true)
									//cek nim
									var nm = nim;
									var cek1 = nm.substring(0, 2) === "19";
									var cek2 = nm.substring(0, 2) === "18";
									var cek3 = nm.substring(3, 6) === "150";
									//&& (cek1 || cek2) && cek3
									if (nim.length === 15 && cek3 && (cek1 || cek2 || '175150400111045')) {
										if (proker === (null || undefined || "")) {
											alert("Ups!! Maaf terjadi kendala, silahkan pilih proker terlebih dahulu!");
											props.history.replace("/")
										} else {
											await props.login(nim, password).then(async (ress) => {
												let a = ress;
												console.log(ress);
												if (!a.status) {
													setMessage(true);
													setLoading(false)
												} else {
													try {
														let nimnya = nim;
														let kond = proker;
														let URL = `https://bemfilkom.ub.ac.id/secure/api/2020/KapelProkerBesar/?check=${nimnya}&proker=${kond}`;
														const res = await fetch(URL, {
															method: "GET",
														});
														const result = res;
														const data = await res.json();
														console.log(data);
														if (res.ok) {
															setLoading(false);
															let par = proker;
															data.status === 1 ? props.history.replace(`/oprec/terdaftar/${par}`) : props.history.replace(acara());
														} else {
															alert("Mohon Maaf Terdapat Masalah Koneksi");
														}
													} catch (error) {
														console.log("Konsol error : ", error);
														alert("Mohon Maaf Terdapat Masalah Koneksi");
													}
												}
											});
										}
									} else {
										setLoading(false);
										setMessage(true);
									}
								}}>
								Login
							</Button>
						)}
					</Form>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				{loading === true && (
					<div style={{ marginBottom: 50, marginTop: -10 }}>
						<div class="ui icon message">
							<i class="notched circle loading icon" />
							<div class="content">
								<div class="header">Just one second</div>
								<p>We're fetching that content for you.</p>
							</div>
						</div>
					</div>
				)}
				{message === true && (
					<Message
						style={{ marginBottom: 50, marginTop: -10 }}
						error
						header='Password atau Nim tidak sesuai!'
						content='Silahkan Login Kembali!'
					/>
				)}
			</div>
		</React.Fragment>
	);
}
export default GlobalConsumer(LoginPage);
