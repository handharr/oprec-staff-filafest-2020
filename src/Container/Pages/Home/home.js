import React, { Component } from "react";
import { Button, Container, Divider} from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config';
import { HomeHeader, KontenSatu, KontenDua, KontenTiga } from '../../../Components/Molecules';
import './style.scss';

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<HomeHeader />
				<Divider hidden />
				<Container>
					<KontenSatu />
					<br />
					<Divider section />
					<KontenDua />
					<Divider section />
					<KontenTiga/>
					<br></br>
					{/* {<center><Button className="center"
								primary
								centered
							>
								<Button.Content visible><a href="http://bit.ly/BerkasOprecStaffInau" target="_blank" style={{ 'color': 'white' }}>Download Form Offline</a></Button.Content>
							</Button></center>} */}
					{/* <br></br> */}
					<div className="ui middle aligned center aligned container">

						<Button
							size="big"
							positive
							centered
							onClick={async () => {
								this.props.history.replace("/welcome");
							}}>
							<Button.Content visible>Daftar</Button.Content>
						</Button>
					</div>
					<Divider hidden />
				</Container>
			</React.Fragment>
		);
	}
}

export default GlobalConsumer(Home);