import Header from "@/components/Header";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
        />
        <title> 
          Super Web Application
        </title>

      </head>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
