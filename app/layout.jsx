import "./globals.css";
import CursorGlow from "@/app/components/CursorGlow";

export const metadata = {
  title: "Yahya Saeed - Frontend Developer",
  description:
    "I build modern, responsive, high-performance websites and web applications using React and Next.js.",
  openGraph: {
    title: "Yahya Saeed",
    description:
      "Frontend Developer specializing in React, Next.js and modern UI.",
    images: ["/og-image.png"],
  },
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Web Developer",
  ],
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <CursorGlow />

        {children}
      </body>
    </html>
  );
}
