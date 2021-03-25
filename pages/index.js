import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
      useEffect(() => {
        const iframe = document.getElementById("iframe");
        const scrollHeight = iframe.contentDocument.documentElement.scrollHeight;
    }, [])
  return (
        <iframe
            width='100%'
            id='iframe'
            src='./index.html'
        ></iframe>
  )
}
