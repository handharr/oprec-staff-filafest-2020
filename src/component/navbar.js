import React, { Component } from "react";
import { Menu, Image, Icon, Button } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	// state = { activeItem: "Pendaftaran" };

	// handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	// active={activeItem === "Pendaftaran"}

	render() {
		// const { activeItem } = this.state;

		return (
			<AuthConsumer>
				{({ isLogged, logout }) => (
					<React.Fragment>
						<Menu size="massive" style={{ margin: 0, padding: 0, backgroundColor: "white" }} secondary color='violet'>
							<Menu.Item style={{ padding: 0 }} as={Link} to='./' name="Home"  >
								<Image style={{width: 35, marginLeft:15}} src="./img/humcrop.png" />
							</Menu.Item>
							{isLogged && (
								<Menu.Menu position="right">
									<Menu.Item onClick={() => {
												logout();
											}}>
										<Button
											onClick={() => {
												logout();
											}}
										>
									</Button>
											<Icon size="large" name='sign out' />
									</Menu.Item>
								</Menu.Menu>
							 )}
						</Menu>
					</React.Fragment>
				)}
			</AuthConsumer>
		);
	}
}
