import g1 from "@/assets/grado-1.jpg";
import g2 from "@/assets/grado-2.jpg";
import g3 from "@/assets/grado-3.jpg";
import g4 from "@/assets/grado-4.jpg";
import g5 from "@/assets/grado-5.jpg";
import g6 from "@/assets/grado-6.jpg";
import g7 from "@/assets/grado-7.jpg";
import g8 from "@/assets/grado-8.jpg";
import g9 from "@/assets/grado-9.jpg";
import g10 from "@/assets/grado-10.jpg";
import g11 from "@/assets/grado-11.jpg";

const imagenes: Record<string, string> = {
  "1": g1, "2": g2, "3": g3, "4": g4, "5": g5, "6": g6,
  "7": g7, "8": g8, "9": g9, "10": g10, "11": g11,
};

export const imagenGrado = (slug: string) => imagenes[slug] ?? g1;
