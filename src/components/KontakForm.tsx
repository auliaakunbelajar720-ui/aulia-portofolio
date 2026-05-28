import { useState } from "react";
import { supabase } from '@/lib/supabaseClient';

export default function KontakForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [status, setStatus] = useState("");
  const [subjek, setSubjek] = useState("");

  const kirimPesan = async (e: any) => {
    e.preventDefault();
    setStatus("Mengirim...");

    const { error } = await (supabase as any)
      .from("pesan_kontak")
      .insert([
        { nama: nama,
          email: email,
          subjek: subjek,
          pesan: pesan,
        },
    ]);

    if (error) {
      setStatus("Gagal: " + error.message);
    } else {
      setStatus("Berhasil dikirim!");
      setNama("");
      setEmail("");
      setPesan("");
    }
  };

  return (
    <form onSubmit={kirimPesan}>
      <h2>Hubungi Saya</h2>

      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Pesan"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
      />

      <button type="submit">Kirim</button>

      <p>{status}</p>
    </form>
  );
}