import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Roboto, Raleway } from 'next/font/google'
import './styles.css'

export const metadata = {
  title: "Pro System - IT Аутсорсинг",
  description: "Комплексное Обслуживание IT инфраструктуры вашего бизнеса",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const raleway = Raleway({ subsets: ['cyrillic'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${raleway.className} ${roboto.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
