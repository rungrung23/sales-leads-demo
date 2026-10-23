"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "6283822574002"; // GANTI dengan nomor WhatsApp kamu

type Vehicle = {
  name: string;
  type: string;
  price: string;
  emoji: string;
  color: string;
};

const cars: Vehicle[] = [
  { name: "Toyota Avanza", type: "MPV Keluarga", price: "Rp235 jutaan", emoji: "🚙", color: "from-sky-100 to-blue-50" },
  { name: "Honda Brio", type: "City Car", price: "Rp170 jutaan", emoji: "🚗", color: "from-rose-100 to-orange-50" },
  { name: "Mitsubishi Xpander", type: "MPV Premium", price: "Rp270 jutaan", emoji: "🚘", color: "from-slate-200 to-slate-50" },
];

const bikes: Vehicle[] = [
  { name: "Honda Beat", type: "Matic Harian", price: "Rp18 jutaan", emoji: "🛵", color: "from-emerald-100 to-teal-50" },
  { name: "Honda Vario", type: "Matic Sporty", price: "Rp24 jutaan", emoji: "🏍️", color: "from-orange-100 to-amber-50" },
  { name: "Yamaha NMAX", type: "Maxi Scooter", price: "Rp32 jutaan", emoji: "🏍️", color: "from-indigo-100 to-blue-50" },
];

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppLink({
  children,
  message,
  className = "",
}: {
  children: React.ReactNode;
  message: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [category, setCategory] = useState<"mobil" | "motor">("mobil");
  const vehicles = category === "mobil" ? cars : bikes;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="text-xl font-black tracking-tight">
            SALES<span className="text-blue-600">LEADS.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#fitur" className="hover:text-blue-600">Keunggulan</a>
            <a href="#demo" className="hover:text-blue-600">Demo Website</a>
            <a href="#harga" className="hover:text-blue-600">Harga</a>
          </nav>
          <WhatsAppLink message="Halo, saya ingin konsultasi website untuk sales kendaraan." className="px-4 py-3 text-sm">
            Konsultasi ↗
          </WhatsAppLink>
        </div>
      </header>

      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#dbeafe,_transparent_55%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              KHUSUS SALES MOBIL & MOTOR
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Bantu calon pembeli menemukan{" "}
              <span className="text-blue-600">kendaraan impian</span> kamu.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Punya website katalog profesional, tampilkan promo kendaraan,
              dan arahkan calon pembeli langsung ke WhatsApp kamu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink message="Halo, saya ingin melihat demo website sales mobil dan motor.">
                💬 Lihat Demo Gratis
              </WhatsAppLink>
              <a href="#demo" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-bold transition hover:border-blue-400">
                Jelajahi Katalog ↓
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span>✓ Mobile friendly</span>
              <span>✓ Tombol WhatsApp</span>
              <span>✓ Siap dipromosikan</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-blue-200/50 blur-3xl" />
            <div className="rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-blue-900/10 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Katalog kendaraan</p>
                  <p className="mt-1 text-xl font-black">Temukan unit pilihanmu</p>
                </div>
                <span className="rounded-xl bg-blue-50 p-3 text-2xl">🚘</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button onClick={() => setCategory("mobil")} className={`rounded-xl px-4 py-3 text-sm font-bold transition ${category === "mobil" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>🚗 Mobil</button>
                <button onClick={() => setCategory("motor")} className={`rounded-xl px-4 py-3 text-sm font-bold transition ${category === "motor" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>🏍️ Motor</button>
              </div>
              <div className="mt-4 space-y-3">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.name} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3 transition hover:border-blue-200">
                    <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${vehicle.color} text-4xl`}>{vehicle.emoji}</div>
                    <div className="min-w-0 flex-1">
                      <p className="font-extrabold">{vehicle.name}</p>
                      <p className="mt-1 text-xs text-slate-500">{vehicle.type}</p>
                      <p className="mt-2 text-sm font-black text-blue-700">{vehicle.price}</p>
                    </div>
                    <a aria-label={`Tanya ${vehicle.name} via WhatsApp`} href={whatsappUrl(`Halo, saya tertarik dengan ${vehicle.name}. Apakah unitnya tersedia?`)} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-500 px-3 py-2 text-xs font-bold text-white">Chat WA</a>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">Contoh tampilan demo · Harga hanya ilustrasi</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">Bukan sekadar website</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Bantu promosi kendaraan jadi lebih profesional.</h2>
            <p className="mt-4 leading-7 text-slate-600">Satu halaman khusus untuk menampilkan unit dan memudahkan calon pembeli menghubungi kamu.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["▦", "Katalog kendaraan", "Tampilkan pilihan unit, harga indikatif, promo, dan informasi kendaraan."],
              ["↗", "Terhubung ke WhatsApp", "Setiap tombol mengarahkan calon pembeli ke percakapan dengan sales."],
              ["◎", "Siap untuk Meta Ads", "Landing page dirancang sebagai tujuan iklan Facebook dan Instagram."],
            ].map(([icon, title, description]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">{icon}</div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-blue-600">Preview produk</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Demo katalog kendaraan</h2>
              <p className="mt-3 text-slate-600">Lihat gambaran website yang bisa disesuaikan dengan identitas sales kamu.</p>
            </div>
            <WhatsAppLink message="Halo, saya ingin dibuatkan website katalog kendaraan seperti demo.">Minta Demo Personal ↗</WhatsAppLink>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <article className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
              <span className="text-4xl">🚙</span>
              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-300">Demo 01</p>
              <h3 className="mt-2 text-2xl font-black">Website Sales Mobil</h3>
              <p className="mt-3 leading-7 text-slate-300">Halaman promo mobil, katalog unit, informasi kredit, dan tombol konsultasi WhatsApp.</p>
              <a href="#harga" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-bold text-slate-950 hover:bg-blue-100">Lihat Paket →</a>
            </article>
            <article className="rounded-3xl bg-blue-600 p-7 text-white sm:p-9">
              <span className="text-4xl">🏍️</span>
              <p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-100">Demo 02</p>
              <h3 className="mt-2 text-2xl font-black">Website Sales Motor</h3>
              <p className="mt-3 leading-7 text-blue-50">Katalog motor, informasi promo, pilihan unit, dan jalur chat langsung ke sales.</p>
              <a href="#harga" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50">Lihat Paket →</a>
            </article>
          </div>
        </div>
      </section>

      <section id="harga" className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-blue-300">Harga perkenalan</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Mulai bangun promosi digitalmu.</h2>
            <p className="mt-4 leading-7 text-slate-300">Website katalog yang dirancang untuk membantu sales tampil lebih profesional.</p>
          </div>
          <div className="mx-auto mt-9 max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-7 sm:p-9">
            <p className="font-bold text-blue-300">PAKET WEBSITE KATALOG</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-black tracking-tight">Rp699.000</span>
              <span className="pb-2 text-sm text-slate-400">/ sekali bayar</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">Biaya iklan Meta Ads tidak termasuk.</p>
            <ul className="mt-7 space-y-4 text-sm text-slate-200">
              {["Landing page katalog kendaraan", "Tampilan mobile friendly", "Tombol WhatsApp untuk prospek", "Informasi promo dan unit", "Panduan penggunaan website"].map((feature) => (
                <li key={feature} className="flex gap-3"><span className="font-black text-emerald-400">✓</span>{feature}</li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppLink message="Halo, saya tertarik dengan Paket Website Katalog Rp699.000 untuk sales mobil/motor. Boleh minta demo dan detail paketnya?">
                Konsultasi via WhatsApp ↗
              </WhatsAppLink>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-400">Rincian fitur, biaya domain/hosting, dan ketentuan pengerjaan dikonfirmasi sebelum pemesanan.</p>
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-8 text-center text-sm text-slate-500">
        <p className="font-black tracking-tight text-slate-900">SALES<span className="text-blue-600">LEADS.</span></p>
        <p className="mt-2">Website katalog kendaraan · Website & digital marketing</p>
        <p className="mt-2">© {new Date().getFullYear()} SalesLeads. Demo website.</p>
      </footer>
    </main>
  );
}
