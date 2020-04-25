import React from "react";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config/Context';
// import { useParams } from 'react-router-dom';

function LoginPage(props) {

	// let { proker } = useParams();

	const [nim, setNim] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [message, setMessage] = React.useState(false);

	// console.log("properti login",props)

	return (
		<React.Fragment>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

				<Header as="h2" textAlign="center" style={{ marginTop: 30 }}>
					Login Oprec Staff Filafest
					</Header>
				<div style={{ width: '50vw' }}>
					<Form size="large">
						<Form.Input fluid type="number" icon="user" value={nim} iconPosition="left" placeholder="NIM" onChange={input => setNim(input.target.value)} />
						<Form.Input fluid icon="lock" iconPosition="left" value={password} placeholder="Password" type="password" onChange={input => setPassword(input.target.value)} />
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
									let nm = nim;
									let cek1 = nm.substring(0, 2) === "19";
									let cek2 = nm.substring(0, 2) === "18";
									let cek3 = nm.substring(3, 6) === "150";
									let cek4 = nm === "175150400111045";
									// console.log("cek 19",cek1);
									// console.log("cek 18",cek2);
									// console.log("cek filkom",cek3);
									// console.log("cek nim",nim.length === 15 && cek3 && (cek1 || cek2 || cek4));
									if (nim.length === 15 && cek3 && (cek1 || cek2 || cek4)) {
										await props.login(nim, password).then(async (ress) => {
											let a = ress;
											// console.log("ress hal login",ress);
											if (!a.status || a.status==false) {
												// setMessage(true);
												setLoading(false);
												alert("Mohon Maaf Terdapat Masalah Koneksi");
											} else {
												try {
													let nimnya = nim;
													let URL = `https://bemfilkom.ub.ac.id/secure/api/2020/OprecStaffFilafest/?check=${nimnya}`;
													const res = await fetch(URL, {
														method: "GET",
													});
													const result = res;
													const data = await res.json();
													console.log("data check",data);
													if (data) {
														setLoading(false);
														data.status === 1 ? props.history.replace(`/terdaftar`) : props.history.replace("/formpk2");
													} else {
														alert("Mohon Maaf Terdapat Masalah Koneksi");
														setLoading(false);
													}
												} catch (error) {
													console.log("Konsol error : ", error);
													alert("Mohon Maaf Terdapat Masalah Koneksi");
												}
											}
										});
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
