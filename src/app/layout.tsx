import '@/app/global.css';
import { Banner } from 'fumadocs-ui/components/banner';
import { RootProvider } from 'fumadocs-ui/provider/next';
import 'katex/dist/katex.css';
import { Construction } from "lucide-react";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Banner id="global-banner" variant="rainbow"><Construction />This site is under construction.</Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
