import React from 'react';
import { Grid, Header, Icon, List, Segment } from "semantic-ui-react";

export const KontenSatu = () => {
    return (
        <React.Fragment>
            {/* <div className="ui middle aligned center aligned container">
								<h1>APA ITU INAUGURASI FILKOM?</h1>
								<p>Merupakan kegiatan penutup dari seluruh rangkaian kegiatan PK2MABA dan Startup Academy yang dilaksanakan dari, oleh, dan untuk mahasiswa baru. inaugurasi filkom bertujuan untuk melepas status mahasiswa baru menjadi bagian dari KBMFILKOM yang utuh serta kegiatan yang dapat menjadi wadah untuk mengembangkan minat dan bakat mahasiswa baru yang diharap dapat berekspresi dengan sekreatif dan sebaik mungkin, selain itu juga sebagai sarana agar mahasiswa baru saling mengenal satu sama lain dalam lingkup fakultas sehingga diharapkan mampu menciptakan sebuah solidaritas antar mahasiswa baru.</p>
							</div> */}
            <Header as='h1' style={{ marginBottom: 0 }}>
                <Icon name='info circle' />
                <Header.Content>
                    Visi & Misi
      								<Header.Subheader>Visi dan Misi BEM Filkom 2020</Header.Subheader>
                </Header.Content>
            </Header>
            <Grid centered style={{ marginTop: 5 }}>
                <Segment basic style={{ width: "75%", marginBottom: 15 }}>
                    <Header size="huge" textAlign="center">Visi</Header>
                    <p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
                        BEM FILKOM sebagai wadah dalam membangun nilai instrumental mahasiswa yang tepat sasaran demi terciptanya kreasi bermakna bagi FILKOM dan Indonesia
									</p>
                </Segment>
                <Segment basic style={{ width: "75%", marginTop: 0 }}>
                    <Header size='huge' textAlign="center">Misi</Header>
                    <List ordered style={{ color: "black" }}>
                        <List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginBottom: 0 }}>
                            Membangun iklim internal bem filkom ub yang <strong>inklusif</strong> dan <strong>profesional</strong> bernafaskan kekeluargaan.
										</List.Item>
                        <List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop: 0, marginBottom: 0 }}>
                            <strong>Bekerja sama</strong> secara <strong>dinamis</strong> dengan seluruh pemangku kepentingan demi terciptanya kreasi jangka panjang dan berkelanjutan.
										</List.Item>
                        <List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop: 0, marginBottom: 0 }}>
                            <strong>Inisiator pergerakan</strong> mahasiswa yang peka terhadap isu sosial-politik.
										</List.Item>
                        <List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop: 0, marginBottom: 0 }}>
                            Melakukan <strong>pengembangan</strong> kemahasiswaan yang <strong>suportif</strong> dan komprehensif guna tercapainya aktualisasi diri dan prestasi mahasiswa.
										</List.Item>
                        <List.Item as='p' style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify", marginTop: 0 }}>
                            Optimalisasi <strong>pelayanan</strong> advokasi <strong>aktif progresif</strong> terkait dengan kebutuhan dan kesejahteraan mahasiswa.
										</List.Item>
                    </List>
                </Segment>
            </Grid>
        </React.Fragment>
    );
}
