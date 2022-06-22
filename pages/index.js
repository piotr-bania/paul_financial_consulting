import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logoPFC.svg'

export default function Home() {
return (
<div>

	<Head>
		<title>Paul Financial Consulting</title>
		<meta name="description" content="Paul Financial Consulting" />
		<link rel="icon" href="/favicon.ico" />
	</Head>

	<header>
		<div className="parent">
			<div className="logo">
				<Image src={logo} alt="logo" layout="responsive" object-fit="scale-down" />
			</div>

			<li className="menu">
				<a href="#">Home</a>
				<a href="#">Services</a>
				<a href="#">Tax</a>
				<a href="#">Useful Links</a>
				<a href="#">News</a>
				<a href="#">Contact</a>
			</li>

			<button className="button">Button</button>
		</div>
	</header>

	<main>
		
	</main>

	<footer>

	</footer>
</div>
)
}