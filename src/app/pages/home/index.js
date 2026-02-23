
import { Page, Container, Title } from "@newfold/ui-component-library";
import { HomeIcon } from '@heroicons/react/24/outline';
import ComingSoon from 'App/pages/settings/comingSoon';
import SettingsSection from 'App/pages/home/settingsSection';
import WebContentSection from 'App/pages/home/webContentSection';
import WebHostingSection from 'App/pages/home/webHostingSection';

const Home = () => {

	useEffect( () => {
		// run when mounts
		const comingSoonPortal =
			document.getElementById( 'coming-soon-portal' );

		if ( comingSoonPortal ) {
			window.NFDPortalRegistry.registerPortal(
				'coming-soon',
				comingSoonPortal
			);
		}

		// run when unmounts
		return () => {
			window.NFDPortalRegistry.unregisterPortal( 'coming-soon' );
		};
	}, [] );

	return (
	<Page title="Home" className={"wppbr-app-home-page wppbr-home"}>
		<Container className="nfd-max-w-full nfd-p-8 nfd-shadow-none nfd-rounded-xl nfd-border ">
				<div id="coming-soon-portal" />
		</Container>
		<Container className={'wppbr-app-home-container'}>
			<Container.Header className={'wppbr-app-home-header'}>
				<Title as="h2" className="nfd-flex nfd-items-center nfd-gap-2">
					<HomeIcon className="nfd-w-8 nfd-h-8" />
					{__('Home', 'wp-plugin-bigrock')}
				</Title>
				<span>{__('Manage your website settings and content.', 'wp-plugin-bigrock')}</span>
			</Container.Header>

			<Container.Block separator={true} className={'wppbr-app-home-coming-soon'}>
				<ComingSoon />
			</Container.Block>

			<Container.Block separator={true} className={'wppbr-app-home-content'}>
				<WebContentSection />
			</Container.Block>

			<Container.Block separator={true} className={'wppbr-app-home-settings'}>
				<SettingsSection />
			</Container.Block>

			<Container.Block separator={false} className={'wppbr-app-home-hosting'}>
				<WebHostingSection />
			</Container.Block>
		</Container>
	</Page>
	);
};

export default Home;
