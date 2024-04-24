import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import URLAPI from "../configs/const";

function MasterDataAnggota() {
  const url = URLAPI + "/anggota";
  const [data, setData] = useState([]);

  //Mengambil data anggota dari API
  const getDataAnggota = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  };

  useEffect(() => {
    getDataAnggota();
  }, []);

  return (
    <div className="px-2 container mx-auto">
      <Link to="/anggota/create">
        <button className="my-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Tambah Anggota
        </button>
      </Link>

      {data.length > 0 ? (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((data, index) => {
            return (
              <Link key={data.id} to={`/anggota/${data.id}`}>
                <div className="bg-gray-200 p-4 rounded-lg font-bold hover:bg-gray-300">
                  {index + 1} . {data.nama}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Data tidak ditemukan</p>
        </div>
      )}
    </div>
  );
}

export default MasterDataAnggota;
