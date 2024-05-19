import AppLayout from "@/layouts/app-layout";

const BantuanPage = () => {
    return (
        <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
            <div className="pt-[64px] max-w-screen-lg mx-auto  flex items-center flex-col">
        <h1 className="text-4xl font-medium">Bantuan</h1>
        <div className="pt-[60px] space-y-10">
            <div className="pt-20px]">
                <h2 className="font-medium">Menemukan Jawaban</h2>
                <p className="pt-[24px]">
                    Kami disini ingin memastikan Anda mendapatkan pengalaman terbaik saat menggunakan layanan kami.
                    Jika Anda memiliki pertanyaan atau membutuhkan bantuan, kami menyediakan berbagai sumber daya untuk membantu Anda:
                </p>
                <ul className="list-disc pt-[16px]">
                    <li>
                        Pusat Bantuan: Kunjungi Pusat Bantuan kami untuk menemukan artikel dan tutorial yang membahas berbagai topik,
                        termasuk cara menggunakan platform kami, menyelesaikan masalah umum, dan banyak lagi.
                    </li>
                    <li>
                        FAQ: Lihat daftar Pertanyaan Umum (FAQ) kami untuk jawaban cepat atas pertanyaan umum tentang layanan kami.
                    </li>
                    <li>
                        Hubungi Dukungan: Jika Anda tidak dapat menemukan jawaban atas pertanyaan Anda di Pusat Bantuan atau FAQ,
                        Anda dapat menghubungi tim Dukungan kami melalui email atau obrolan langsung.
                    </li>
                </ul>
        </div>
        <div className="pt-20px]">
            <h2 className="font-medium">Masih Ada Pertanyaan?</h2>
            <p className="pt-[24px]">
                Jika Anda masih memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi tim Dukungan kami. Kami
                senang membantu Anda dengan cara apa pun yang kami bisa.
            </p>
        </div>
        </div>
        </div>
        </AppLayout>
        );
    }

export default BantuanPage