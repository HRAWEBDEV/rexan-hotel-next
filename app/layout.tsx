import '../public/icons/style.css';
import './styles/reset.scss';
import './styles/comp-button-link.scss';
import './styles/comp-img.scss';
import './styles/comp-form.scss';
import '@/app/styles/layout.scss';
// *
export const metadata = {
 title: 'هتل رکسان',
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
