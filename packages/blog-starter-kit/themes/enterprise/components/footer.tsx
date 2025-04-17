import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-10">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-10 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex w-full grid-cols-5 items-center justify-center gap-5 ">
				
					<div className="flex flex-row items-center justify-center gap-5 text-right text-slate-600  md:text-left">
						<SocialLinks />
						<p>&copy; 2025 Jay Tillu.</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
