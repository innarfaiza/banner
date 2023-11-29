"use client";

import { useState } from "react";
import Image from "next/image";
import "@styles/home.css";

export default function Home() {
  const [nama, setNama] = useState("Innar Faiza Syahrani");
  const [input, setInput] = useState('');
  const [empty, setEmpty] = useState(true);

  // function button input
  const boxGantiNama = () => {
    setNama(input);
    setInput('');
  }

  const boxInputNama = (val) => {
    setInput(val);
    setEmpty(val.trim() === '');
  }

  function button(e) {
    if (e.key === "Enter") boxGantiNama();
  }

  let content;
  if (empty) {
    content = (
      <button
        className="cta"
        style={{
          marginTop: "12px",
        }}
      >
        <p>Disabled</p>
      </button>
    );
  } else {
    content = (
      <button
        className="cta-button"
        style={{
          marginTop: "12px",
        }}
        onClick={() => {
          boxGantiNama();
        }}
      >
        <p>Change Name</p>
      </button>
    );
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
              <p>D121211021</p>
              <p>Teknik Informatika</p>
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
