import Head from 'next/head'
import LandingPage from './components/LandingPage'
import Features from './components/Features'
import Footer from './components/Footer'

export default function Home() {
  return (
		<div>
			<Head>
				<title>Dog Treat Finance</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<LandingPage />
      <Features />
      <Footer />
		</div>
	)
}
