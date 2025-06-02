import "@/styles/globals.scss";

export const metadata = {
  title: "FAQ For Everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
