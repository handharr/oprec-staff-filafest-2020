import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

export default class Navbar extends Component {

	render() {
		return (
			<React.Fragment>
				<div class="rainbow"></div>
				<footer style={{backgroundColor:"#475050",color:"white"}}>
					Made with ❤ by BEM FILKOM 2019/2020.
				</footer>
			</React.Fragment>
		);
	}
}
