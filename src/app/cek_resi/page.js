"use client";

import CekBarang from "@/components/cek_barang";
import { useState } from "react";

const CekResi = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [data, setData] = useState();

  const handleSubmit = async () => {
    const res = await fetch(`api/cek-resi/?tracking_number=${trackingNumber}`, {
      method: "GET",
    });
    const data = await res.json();
    setData(data.data);
  };

  return (
    <section className="p-4">
      <div className="flex gap-4">
        <input
          placeholder="Masukkan nomor resi"
          className="border border-black px-2 py-0.5 rounded-sm"
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          className="bg-red-400/70 px-5 py-1 rounded-lg"
          onClick={handleSubmit}>
          Cari
        </button>
      </div>
      <CekBarang data={data} />
    </section>
  );
};

export default CekResi;
