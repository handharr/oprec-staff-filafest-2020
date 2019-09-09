import React from "react";
import { Message,Grid } from "semantic-ui-react";

const Registered = () => (

	<Grid columns={3}>
		<Grid.Row stretched>
			<Grid.Column></Grid.Column>
			<Grid.Column>
				<Message success>
					<h1>Terimakasih Anda Telah Terdaftar</h1>
				</Message>
			</Grid.Column>
			<Grid.Column></Grid.Column>
		</Grid.Row>
	</Grid>
);

export default Registered;
