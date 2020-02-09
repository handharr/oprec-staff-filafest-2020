import React, { Component } from "react";
import { Image, Grid, Segment, Header, Form } from "semantic-ui-react";
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
        console.log(this.state.checked); // It is giving undefined here
      };

    render() {
        return (
            <Grid columns={2} containers stackable stretched style={{ marginTop: 0 }}>
                <PengantarKiri/>
                <PengantarKanan submit={this.onSubmitHandler} checked = {this.state.checked} handler={this.checkboxChangeHandler} />
            </Grid>
        );
    }
}