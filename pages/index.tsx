import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
useEffect(() => {
 
  if ( navigator.serviceWorker ) {

    navigator.serviceWorker.register( 'sw.js' )
    console.log('object');

}
}, [])


  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main >
      hello
      </main>
    </>
  )
}
