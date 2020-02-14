import React from 'react';

import { Header } from "semantic-ui-react";

const HeaderContent = (props) => {
    return (
        <Header as='h2' style={{ marginBottom: 2.5, color: "#1B1E83" }}>
            {props.judul}
        </Header>
    );
}

export default HeaderContent;