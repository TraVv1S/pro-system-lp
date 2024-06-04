export const metadata = {
  title: "Pro System - IT Аутсорсинг",
  description: "Комплексное Обслуживание IT инфраструктуры вашего бизнеса",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
