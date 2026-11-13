import "./globals.css";

export const metadata = {
  title: "TeamFlow",
  description: "Collaborative task management for teams."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
