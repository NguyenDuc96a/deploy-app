'use client'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import EmotionRootStyleRegistry from "../mui/EmotionRootStyleRegistry";
import Footer from '../components/Layout/Footer';
import { useTranslation } from '../i18n'
import { Header } from '../components/Header';
import AppBar from '../components/Layout/Appbar';
import { Layout } from '../components/Layout';
import WrapperRedux from '../redux/WrapperRedux'
import Drawer from '../components/Layout/Drawer'

// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'optional',
// })

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en"  >
//       <head />
//       <body >
//         <WrapperRedux>
//           <EmotionRootStyleRegistry>
//             {/* <AppBarMui lng={lng}>
//          </AppBarMui> */}
//             <AppBar />
//             {children}
//             <Footer />


//             {/* <Header/> */}
//           </EmotionRootStyleRegistry>
//         </WrapperRedux>
//       </body>
//     </html>
//   )
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WrapperRedux>
          <EmotionRootStyleRegistry>
            <AppBar />
            {children}
            <Footer />
          </EmotionRootStyleRegistry>
        </WrapperRedux>
      </body>
    </html>
  );
}