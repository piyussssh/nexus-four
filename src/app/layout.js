import Navbar from "@/components/navbar";
import ReduxProvider from "@/store/ReduxProvider";
import "@/styles/globals.scss";

export const metadata = {
  title: "FAQ For Everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar/>
        <ReduxProvider>{children}</ReduxProvider>
        </body>
    </html>
  );
}
