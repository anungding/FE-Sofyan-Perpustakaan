import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import URLAPI from "../configs/const";

function DetailAnggota() {
  const params = useParams();
  const url = URLAPI + `/anggota/${params.id}`;
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);

  //Mengambil data detail anggota
  const getDetailAnggota = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code == 404) {
          setMessage(data.message);
        } else {
          setData(data.data);
        }
      });
  };

  //Menghapus data anggota
  const destroyAnggota = () => {
    return fetch(url + "/delete", {
      method: "DELETE",
    });
  };

  //Menampilkan pesan konfirmasi kepada pengguna sebelum mengpus data
  const hapusData = () => {
    const konfirmasi = window.confirm(
      "Apakah Anda yakin ingin menghapus data?"
    );

    if (konfirmasi) {
      destroyAnggota();
      setTimeout(() => {
        window.location.href = "/anggota";
      }, 2000); //
    }
  };

  useEffect(() => {
    getDetailAnggota();
  }, []);
  return (
    <div className="container px-2 mx-auto">
      <h2 className="text-2xl font-bold my-4">Detail Anggota</h2>
      {data != "" ? (
        <div>
          <div className="text-lg font-bold">Nama : {data.nama}</div>
          <div className="text-lg font-bold">Email : {data.email}</div>
          <div className="text-lg font-bold">No. Hp : {data.no_hp}</div>
          <div className="text-lg font-bold">Alamat : {data.alamat}</div>

          <div className="my-2">
            <button
              onClick={hapusData}
              className="mr-2 bg-red-600 hover:bg-red-700 text-white font-bold my-2 py-2 px-4 rounded-lg"
            >
              Hapus
            </button>
            <Link to={`/anggota/${data.id}/update`}>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold my-2 py-2 px-4 rounded-lg">
                Ubah
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>{message}</>
      )}
    </div>
  );
}

export default DetailAnggota;
