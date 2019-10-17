import React from "react";
import { Message, Grid, Button } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

const Sukses = () => (
	<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
	<div style={{width:'50vw'}}>
		<AuthConsumer>
					{({ link }) => (
						<Message success>
							<h1>Terimakasih Anda Telah Terdaftar sebagai peserta Leader of Tomorrow 2019!</h1>
							{/* {<center><Button className="center"
									primary
									centered
									>
									<Button.Content visible><a href="http://bit.ly/BerkasOprecStaffInau" target="_blank" style={{'color':'white'}}>Download Form Offline</a></Button.Content>
						</Button></center>} */}
						</Message>
					)}
				</AuthConsumer>
	</div>
	
	</div>
				

);

export default Sukses;
