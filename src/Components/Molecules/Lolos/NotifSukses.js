import React from "react";
import { Image, Message } from "semantic-ui-react";
import { GlobalConsumer } from '../../../Config'

const NotifSukses = (props) => {
  const seleksi = () => {
    if (props.status == 1) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto"
          }}
        >
          <Image size='small' centered src="./img/LogoVertical.png" />
          <div style={{ width: "65%", margin: 'auto' }}>
            <Message info size='big'>
              <Message.Header style={{ textAlign: 'center', color: '#192452', fontSize: 25 }}>Selamat!!!</Message.Header>
              <br />
              <p style={{ color: 'black' }}>
                Anda dinyatakan <span style={{ color: 'green' }}>LOLOS</span> pada seleksi penerimaan Staff BEM
                FILKOM 2020. Berikutnya, mohon hadir dalam First
                  Gathering yang akan dilaksanakan pada: <br /> <br />

                Hari, Tanggal : Rabu, 19 Februari 2020 <br />
                Waktu : 18.30 WIB <br />
                Tempat : Ruang G2 FILKOM <br />
                DressCode : Biru <br /><br />
                
                Dimohon untuk membawa snack dengan harga maksimal Rp 10.000 <br />

                <br />

                SAMPAI BERTEMU DI FIRST GATHERING!
                </p>
            </Message>
            <br />
            <br />
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div style={{ width: "50vw" }}>
            <Message warning>
              <Message.Header style={{ textAlign: 'center', fontSize: 25 }}>Mohon Maaf</Message.Header>
              <h4>
                Dengan berat hati kami informasikan bahwa anda BELUM BERHASIL
                lolos pada seleksi penerimaan Staff BEM FILKOM 2020.
                Tetap semangat!! Masih banyak tempat untuk berkontribusi di
                FILKOM. Kami tunggu partisipasimu kedepannya di lain
                kesempatan!
                </h4>
            </Message>
            <br />
          </div>
        </div>
      );
    }
  }

  return (
    <React.Fragment>
      {seleksi()}
    </React.Fragment>
  );
}

export default GlobalConsumer(NotifSukses);
