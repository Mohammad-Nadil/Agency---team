import "./globals.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title className="capitalize"> ORTENCEY </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </head>
      <body className="bg-gray-300 overflow-hidden">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
