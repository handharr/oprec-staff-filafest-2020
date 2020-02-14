import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { PengantarKanan, PengantarKiri } from '../../../Components/Molecules';

export default class Pengantar extends Component {

    constructor(props) {
		super(props);
		this.state = {
			checked : false
		};
    }

    onSubmitHandler = async () => {
        if (this.state.checked === true) {
            this.props.history.replace("/login");
        }
    }
    
    checkboxChangeHandler = (data) => {
        this.setState({ checked : !this.state.checked });
      };

      componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <Grid columns={2} containers stackable style={{ marginTop: 0 }}>
                <PengantarKiri/>
                <PengantarKanan submit={this.onSubmitHandler} checked = {this.state.checked} handler={this.checkboxChangeHandler} />
            </Grid>
        );
    }
}