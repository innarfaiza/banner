import Navbar from "@components/navbar/navbar";
import "@styles/global.css";

export const metadata = {
  title: "Innar Faiza Syahrani",
  description: "Banner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
