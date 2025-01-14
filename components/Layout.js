import { Inter } from 'next/font/google'

const inter = Inter ({
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({ featuredImage, children }) {
  return (
    <>
      {featuredImage}
      {children}
    </>
  );
}
