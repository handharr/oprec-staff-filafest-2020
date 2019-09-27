import React, { Component } from "react";
import { Button, Menu, Icon} from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	state = { activeItem: "Pendaftaran" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<AuthConsumer>
				{({ isLogged, logout }) => (
					<React.Fragment>
						<div class="rainbow"></div>
						<Menu size="big" stackable>
							<Menu.Item as={ Link }  to='./' name="Home" active={activeItem === "Pendaftaran"} >
								<Icon size="large" name='home' />
							</Menu.Item>
							
							
							{isLogged && (
								<Menu.Menu position="right">
									<Menu.Item>
										<Button
											primary
											onClick={() => {
												logout();
											}}
										>
											Logout
									</Button>
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
