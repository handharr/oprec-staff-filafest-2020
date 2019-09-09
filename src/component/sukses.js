import React from "react";
import { Message, Grid } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

const Sukses = () => (
	<Grid columns={3}>
		<Grid.Row stretched>
			<Grid.Column></Grid.Column>
			<Grid.Column>
				<AuthConsumer>
					{({ link }) => (
						<Message success>
							<h1>Terimakasih Anda Telah Terdaftar sebagai Calon Ketua Pelaksana Inaugurasi 2019!</h1>
							Download Berkas Anda di<a href={link}> link berikut</a>
						</Message>
					)}
				</AuthConsumer>
			</Grid.Column>
			<Grid.Column></Grid.Column>
		</Grid.Row>
	</Grid>

);

export default Sukses;
