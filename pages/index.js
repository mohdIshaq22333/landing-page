import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from "../components/header";
import Sec1 from "../components/sec1";
import Sec2 from "../components/sec2";
import Sec3 from "../components/sec3";
import Sec4 from "../components/sec4";
import Sec5 from "../components/sec5";
import Gal from "../components/gal";
import Footer from "../components/footer";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Sec1/>
    <Sec2/>
    <Sec3/>
    <Sec4/>
    <Sec5/>
    <Gal/>
    <Footer/>
    </>
  )
}



// {
//   "extends": "next/core-web-vitals"
// }
