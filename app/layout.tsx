import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'GLAMRDiP+ | Beautiful Nails, Brighter You',description:'Your little beauty escape. Discover premium manicures, gel nails and bespoke nail art at GLAMRDiP+ in Beverly Hills, California.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
