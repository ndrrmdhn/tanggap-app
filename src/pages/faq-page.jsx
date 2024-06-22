import AppLayout from "@/layouts/app-layout";

const FaqPage = () => {
    return (
        <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
            <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
  <div className="mx-auto px-5">
    <div className="flex flex-col items-center">
      <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
        FAQ
      </h2>
      <p className="mt-3 text-lg text-neutral-500 md:text-xl">
        Frequenty asked questions
      </p>
    </div>
    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara membuat akun di Tanggap?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
          <li>Masukkan nama depan dan nama belakang Anda. <br /></li>
          <li>Masukkan email Anda yang aktif. <br /></li>
          <li>Buat kata sandi yang kuat untuk akun Anda. <br /></li>
          <li>Klik "Daftar".</li>
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara membuat laporan baru?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            <li>Pilih menu "Pengaduan". <br /></li>
            <li>Berikan judul yang jelas dan singkat untuk pengaduan Anda. <br /></li>
            <li>Tulis uraian yang lengkap dan jelas tentang pengaduan Anda. Pastikan untuk menyertakan informasi penting seperti lokasi kejadian, tanggal kejadian, dan saksi mata (jika ada). <br /></li>
            <li>Anda dapat menambahkan foto (opsional) untuk memperkuat pengaduan Anda. <br /></li>
            <li>Pastikan semua informasi sudah lengkap dan benar. Jika sudah yakin, klik "Kirim".<br /></li>
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara melacak status laporan?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            <li>Pilih menu "Pengaduan Saya" di bagian Akun Profile<br /></li>
            <li>Anda akan melihat status laporan Anda saat ini.<br /></li>
            <li>Status laporan dapat berupa "Sedang Ditinjau", "Diproses", "Selesai", atau "Ditolak".<br /></li>
            <li>Anda juga dapat melihat detail laporan, seperti tanggal laporan dibuat, lokasi pengaduan, foto (jika ada).<br /></li>
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara memastikan bahwa pengaduan saya ditindaklanjuti?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            <li>Pastikan laporan yang Anda buat harus berdasarkan data dan fakta yang ada di lapangan<br /></li>
            <li>Pantau status laporan Anda secara berkala.<br /></li>
            <li>Bersabarlah. Tindak lanjut pengaduan membutuhkan waktu, tergantung pada kompleksitas masalahnya.<br /></li>
            <li>Hubungi tim Tanggap jika Anda memiliki pertanyaan. Anda dapat menghubungi tim Tanggap melalui menu customer service.<br /></li>
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Apa yang bisa saya lakukan jika saya tidak puas dengan tanggapan yang saya terima?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            <li>Hubungi Tim Tanggap Kembali. Jelaskan kembali laporan Anda dan kenapa Anda tidak puas dengan tanggapan yang Anda terima.<br /></li>
            <li>Jika Anda masih tidak puas dengan tanggapan dari tim Tanggap, Anda dapat mengajukan banding.<br /></li>
            <li>Pastikan Anda menjelaskan alasan mengapa Anda tidak puas dengan tanggapan yang Anda terima dan berikan bukti yang mendukung klaim Anda.<br /></li>
            <li>Tim Tanggap akan meninjau banding Anda dan memberikan tanggapan sesegera mungkin.<br /></li>
            <li>Tim Tanggap akan berusaha semaksimal mungkin untuk membantu Anda.<br /></li>
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Jenis pengaduan apa saja yang bisa saya laporkan?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Pengaduan terkait:
            <li>Administrasi<br /></li>
            <li>Infrastruktur<br /></li>
            <li>Kesehatan<br /></li>
            <li>KKN<br /></li>
            <li>Kriminal<br /></li>
            <li>Pendidikan<br /></li>
            <li>Pertanian<br /></li>
            Anda juga dapat melaporkan pengaduan lainnya yang terkait dengan kehidupan masyarakat di Bandung.
          </p>
        </details>
      </div>
    </div>
  </div>
</div>

        </AppLayout>
    )
}

export default FaqPage;