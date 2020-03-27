import React, { Component } from "react";
import { Menu, Image, Icon, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { GlobalConsumer } from '../../../Config';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	// state = { activeItem: "Pendaftaran" };
	// handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	// active={activeItem === "Pendaftaran"}
	render() {
		// const { activeItem } = this.state;
		return (
			<React.Fragment>
				<Menu size="massive" style={{ margin: 0, padding: 0, backgroundColor: "white" }} secondary color='violet'>
					<Menu.Item style={{ width: 45,padding: 0 }} as={Link} to='/' name="Home"  >
						<Image style={{  marginLeft: 15 }} size="massive" src="./img/homefix.png" />
					</Menu.Item>
					<Menu.Item style={{ padding: 0, position:"absolute", left:"50%" }}>
						<Image style={{ width: 35}} src="./img/LogoCrop.png"/>
					</Menu.Item>
					{this.props.isLogged && (
						<Menu.Menu position="right">
							<Menu.Item onClick={() => {
								this.props.logout();
							}}>
								<Button
									onClick={() => {
										this.props.logout();
									}}
								>
								</Button>
								<Icon name='sign out' />
							</Menu.Item>
						</Menu.Menu>
					)}
				</Menu>
			</React.Fragment>
		);
	}
}

export default GlobalConsumer(Navbar);