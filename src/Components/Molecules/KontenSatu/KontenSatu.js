import React from 'react';
import { Grid, Header, Icon, List, Segment, Placeholder } from "semantic-ui-react";

export const KontenSatu = (props) => {
    return (
        <React.Fragment>
            {/* <div className="ui middle aligned center aligned container">
								<h1>APA ITU INAUGURASI FILKOM?</h1>
								<p>Merupakan kegiatan penutup dari seluruh rangkaian kegiatan PK2MABA dan Startup Academy yang dilaksanakan dari, oleh, dan untuk mahasiswa baru. inaugurasi filkom bertujuan untuk melepas status mahasiswa baru menjadi bagian dari KBMFILKOM yang utuh serta kegiatan yang dapat menjadi wadah untuk mengembangkan minat dan bakat mahasiswa baru yang diharap dapat berekspresi dengan sekreatif dan sebaik mungkin, selain itu juga sebagai sarana agar mahasiswa baru saling mengenal satu sama lain dalam lingkup fakultas sehingga diharapkan mampu menciptakan sebuah solidaritas antar mahasiswa baru.</p>
							</div> */}
            <Header as='h1' style={{ marginBottom: 0 }}>
                <Icon name='info circle' />
                <Header.Content>
                    {props.event.teks1}
                    <Header.Subheader>{props.event.teks2}</Header.Subheader>
                </Header.Content>
            </Header>
            <br/>
            <Grid centered style={{ marginTop: 5 }}>
                <Placeholder.Paragraph style={{ marginLeft: 40, marginRight: 40 }}>
                    <p style={{ fontSize: 15, fontWeight: 1500, textAlign: "justify" }}>
                        {props.event.teks3}
                    </p>
                </Placeholder.Paragraph>
            </Grid>
        </React.Fragment>
    );
}
