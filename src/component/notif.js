import React from "react";
import { Message } from "semantic-ui-react";
import { AuthConsumer } from "../AuthContext";

const Notif = () => (
  <AuthConsumer>
    {({ status }) => {
      if (status == 1) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div style={{ width: "50vw" }}>
              <Message success>
                <h1>Selamat!</h1>
                <h4>
                  Anda dinyatakan LOLOS pada seleksi penerimaan Staff Inaugurasi
                  FILKOM 2019. Berikutnya, mohon hadir dalam First
                  Gathering yang akan dilaksanakan pada: <br />
                  Hari, Tanggal : Minggu, 06 OKtober 2019 <br />
                  Waktu : 15.30 WIB <br />
                  Tempat : Kesekretariatan PK2MABA Gedung G lama <br />
                  Sampai bertemu di first gathering!
                </h4>
              </Message>
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
                <h1>Mohon maaf</h1>
                <h4>
                  Dengan berat hati kami informasikan bahwa anda BELUM BERHASIL
                  lolos pada seleksi penerimaan Staff Inaugurasi FILKOM 2019.
                  Tetap semangat!! Masih banyak ladang untuk berkontribusi di
                  FILKOM. Kami tunggu partisipasimu kedepannya di lain
                  kesempatan!
                </h4>
              </Message>
            </div>
          </div>
        );
      }
    }}
  </AuthConsumer>
);

export default Notif;
