import '../public/icons/style.css';
import './styles/reset.scss';
import './styles/layout.scss';
export const metadata = {
 title: 'rexan hotel',
 description: '',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='fa'>
   <body dir='rtl'>{children}</body>
  </html>
 );
}
