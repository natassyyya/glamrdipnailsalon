import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={icons:{icon:[{url:'/brand/glamrdip-icon.png',type:'image/png',sizes:'256x256'}],apple:[{url:'/brand/glamrdip-icon.png',sizes:'256x256'}]},title:'GLAMRDiP+ | Beautiful Nails, Brighter You',description:'Your little beauty escape. Discover premium manicures, gel nails and bespoke nail art at GLAMRDiP+ in Beverly Hills, California.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
