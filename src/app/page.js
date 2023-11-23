"use client";

import { useState } from "react";
import Image from "next/image";
import "@styles/home.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [nama, setNama] = useState("Innar Faiza Syahrani");

  // function button input
  const boxGantiNama = () => {
    setNama(input);
  };

  const boxInputNama = (val) => {
    setInput(val);
    setEmpty(val.trim() === '');
  };

  function button(e) {
    if (e.code === "Enter") boxGantiNama();
  }
  return (
    <div className="body">
      <div className="container">
        <div className="header-banner">
          <div className="profil-header-banner">
            <Image
              src="/assets/foto.png"
              alt="gambar profile"
              fill
              objectFit="contain"
            />
          </div>
          <div className="nama">
            <h1>{nama}</h1>
            <div className="nim-profile">
              <p>tes D121211021</p>
              <p>Lovyu brodi</p>
            </div>
          </div>
        </div>
        <div className="input-nama">
          {/* membuat button untuk input fields */}
          <input
            className="input"
            style={{ marginTop: "12px" }}
            placeholder="Masukkan nama..."
            onInput={(val) => boxInputNama(val.target.value)}
            onKeyDown={(value) => {
              button(value);
            }}
          />
          {content}
        </div>
      </div>
    </div>
  );
}
