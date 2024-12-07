import { GeistSans } from 'geist/font/sans';
import { AppProps } from 'next/app';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={GeistSans.className}>
			<Component {...pageProps} />
		</main>
	);
}
