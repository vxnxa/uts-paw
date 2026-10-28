import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Inventaris Laboratorium</h1>
      <p>Tema: {mahasiswa.tema}</p>
      <p>Jumlah kategori: {loading ? '...' : jumlahKategori}</p>
      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h2>{item.judul}</h2>
              <p>Kategori: {item.kategori}</p>
              <p>Kode Alat: {item.kodeAlat}</p>
              <p>Jumlah: {item.jumlah}</p>
              <p>Kondisi: {item.kondisi}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}