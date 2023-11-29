"use client";

import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [koleksiData, setKoleksiData] = useState([]);
  const [tulisJudul, setTulisJudul] = useState("");
  const [tulisIsi, setTulisIsi] = useState("");

  const endpointAPI = "https://6555c2e084b36e3a431e42b5.mockapi.io/diary";

  async function getDiary() {
    const res = await axios.get(endpointAPI);
    const data = res.data;

    //ambil judul
    const judul = data.map((item) => item.judul);
    setJudul(judul);

    //ambil isi
    const isi_diary = data.map((item) => item.isi_diary);
    setIsiDiary(isi_diary);
  }

  // menambahkan konten diary pada list API
  async function postDiary() {
    try {
      const res = await axios.post(endpointAPI, {
        judul: tulisJudul,
        isi_diary: tulisIsi,
      });

      setKoleksiData([...koleksiData, res.data]);

      getDiary();
      // mengembalikan kolom kosong
      setTulisIsi("");
      setTulisJudul("");

    } catch (error) {
      alert('failed to POST API');
    }
  }

  function inputJudul (event) {
    event.preventDefault();
    setTulisJudul(event.target.value);
  };

  function inputIsiDiary (event) {
    event.preventDefault();
    setTulisIsi(event.target.value);
  };

  function submitDiary(event) {
    postDiary();
    setTulisIsi('');
    setTulisJudul('');
  }

  function button(event) {
    if (event.key === 'Enter') {
      submitDiary();
    }
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div>
      <div className="body">
        <div className="container">
          <div className="input-nama">
            {/* membuat button untuk input judul dan isi */}
            <input
              className="inputjudul"
              style={{ marginTop: "12px" }}
              placeholder="Tambahkan judul.."
              onChange={inputJudul}
              onKeyDown={button}
              value={tulisJudul}
            />
            <input
              className="inputisi"
              style={{ marginTop: "12px" }}
              placeholder="Tuliskan isi diary.."
              onChange={inputIsiDiary}
              onKeyDown={button}
              value={tulisIsi}
            />

            {/* membuat button click untuk submit diary */}
            {tulisJudul && tulisIsi ? (
              <div className="cta-button" onClick={postDiary}>
                <p>Submit diary</p>
              </div>
            ) : (
              <div 
                className="cta-button-disabled"
                onClick={() => alert("Isi diary terlebih dahulu!")}
              >
                <p>Disabled</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {koleksiData ? (
        judul.length > 0 ? (
          <ul>
            {judul.map((item, idx) => (
              <Link href={`/diary/${item}/${isiDiary[idx]}`}>
                <li key={idx}>
                  <div
                    className={`diary-container ${
                      idx === judul.length - 1 ? "last-item" : ""
                    }`}
                  >
                    <h1>{judul[idx]}</h1>
                    <p className="p-diary">{isiDiary[idx]}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          "API is loading"
        )
      ) : (
        "API-nya empty"
      )}
    </div>
  );
}
