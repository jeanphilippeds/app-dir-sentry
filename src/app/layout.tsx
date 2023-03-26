import { Poppins } from '@next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'My Shop',
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <Script
        id='test-script'>
        {`console.log('test');`}
      </Script>
      <body className={`${poppins.className}`}>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
