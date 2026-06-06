import "./globals.css";
import InitialLoader from "./components/InitialLoader";


export const metadata = {
  title: "David Pešek - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
