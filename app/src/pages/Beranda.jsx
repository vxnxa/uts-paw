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
        <p>
          Ada {items.length} item di inventaris.{' '}
          <Link to="/koleksi" className="tombol-koleksi">Lihat koleksi</Link>
        </p>
      )}
    </section>
  )
}