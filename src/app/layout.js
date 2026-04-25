import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";


const poppins =Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["400","500","600","700"],
})

export const montserrat = Montserrat({
  variable:"--font-montserrat",
  subsets:["latin"],
  weight:["400","500","600","700"],
})

export const metadata = {
  title: "Standard News- best news Portal in bangladesh",
  description: "Standard News: The most trusted news portal in Bangladesh. Get real-time updates on politics, economy, sports, technology, and breaking news from across the globe.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dat-theme="light"

    >
      <body className={`${poppins.className}min-h-full flex flex-col`}>
      
        {children}</body>
    </html>
  );
}
