import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import URLAPI from "../configs/const";

function TambahAnggota() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState();
  const [noHp, setNoHp] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Menambahkan data anggota
  const storeAnggota = (event) => {
    event.preventDefault();
    fetch(URLAPI + "/anggota", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: nama,
        email: email,
        no_hp: noHp,
        alamat: alamat,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code == 422) {
          setErrorMessage(data.error_message);
        } else {
          setErrorMessage("");
          setMessage(data.message);
          setTimeout(() => {
            window.location.href = "/anggota";
          }, 2000);
        }
      });
  };

  //Menampilkan pessan error
  const errorMessages = Object.keys(errorMessage)
    .map((key) => {
      return errorMessage[key].map((message, index) => (
        <p key={index}>{`${
          key.charAt(0).toUpperCase() + key.slice(1)
        }: ${message}`}</p>
      ));
    })
    .flat();

  return (
    <div className="px-2">
      <form onSubmit={storeAnggota} className="max-w-sm mx-auto mt-4">
        <h1 className="text-2xl mb-4 font-semibold text-center">
          Tambah Anggota Perpustakaan
        </h1>
        <div className="mb-5">
          <label htmlFor="nama" className="block mb-2 text-sm font-medium">
            Nama
          </label>
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            name="no_surat"
            type="text"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Jhon Doe"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Alamat Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="no_telp" className="block mb-2 text-sm font-medium">
            Nomor Telpon
          </label>
          <input
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
            type="no_telp"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="08XXXXXXXXXX"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alamat" className="block mb-2 text-sm font-medium">
            Alamat
          </label>
          <input
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            type="text"
            id="alamat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Jl. Jeruk Purut No. 15"
            required
          />
        </div>
        <div className="mb-3">
          <p className="text-red-500">{errorMessages}</p>
          <p className="text-green-500">{message}</p>
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Tambah
        </button>
      </form>
    </div>
  );
}
export default TambahAnggota;
