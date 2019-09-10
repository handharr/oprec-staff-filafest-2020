import React from "react";
import { Message, Grid } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

const Sukses = () => (
	<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
	<div style={{width:'50vw'}}>
		<AuthConsumer>
					{({ link }) => (
						<Message success>
							<h1>Terimakasih Anda Telah Terdaftar sebagai Calon Ketua Pelaksana Inaugurasi 2019!</h1>
						</Message>
					)}
				</AuthConsumer>
	</div>
	
	</div>
				

);

export default Sukses;
