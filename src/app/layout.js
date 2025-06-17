import Navbar from "@/components/Navbar";
import "@/styles/globals.scss";

export const metadata = {
  title: "FAQ For Everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar/>{children}</body>
    </html>
  );
}
