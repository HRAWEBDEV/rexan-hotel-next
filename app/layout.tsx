import '../public/icons/style.css';
import './styles/reset.scss';
import './styles/comp-button-link.scss';
import './styles/comp-img.scss';
import './styles/comp-form.scss';
import './styles/layout.scss';
// *
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
   {/* <head>
    <link rel='icon' type='image/x-icon' href='' />
   </head> */}
   <body dir='rtl'>{children}</body>
  </html>
 );
}
