import { fetchWeatherData } from "./api/route";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

fetchWeatherData(25.6774, 139.65);

