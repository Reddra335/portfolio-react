import jwt from "../images/person/jwt.png";

export const labNotes = [
  {
    id: 1,
    date: "2025.02.14",
    category: "POWER ELECTRONICS",
    title: "Analisis Buck Converter pada Beban Dinamis",
    excerpt:
      "Eksperimen LTspice untuk melihat ripple output saat beban berubah mendadak, catatan tentang loop compensation.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    date: "2025.01.22",
    category: "BACKEND",
    title: "Arsitektur Middleware di Golang Fiber",
    excerpt:
      "Pola komposisi middleware yang bersih, dari auth, logging, sampai rate limiter, tanpa spaghetti handler.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "2026.12.05",
    category: "Pengembangan Web",
    title: "Membuat Login Dengan JWT",
    excerpt:
      "JWT digunakan di saat login untuk sebagai identitas pada web, biasanya di simpan di dalam LocalStorage dengan httpOnly.",
    image: jwt,
  },
];
