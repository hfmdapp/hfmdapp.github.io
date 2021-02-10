import Form from '../components/Form';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<>
			<Navbar />
			<div>
				<Head>
					<title>HFMD Support Center</title>
					<link rel='icon' href='/favicon.ico' />
					<link rel="preconnect" href="https://fonts.gstatic.com" /> 
					<link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet"></link>
				</Head>

				<main>
					<Form />
				</main>
			</div>
		</>
	);
}
