import ActionField from "../../components/action-field";
import { Container } from "@newfold/ui-component-library";

const WebHostingSection = () => {
	return (
		<Container.SettingsField
			title={__('BigRock Hosting', 'wp-plugin-bigrock')}
			description={__('Access & manage your BigRock account.', 'wp-plugin-bigrock')}
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-5">
				<ActionField
					label={__("Manage BigRock Account", 'wp-plugin-bigrock')}
					buttonLabel={__("Manage BigRock Account", 'wp-plugin-bigrock')}
					href={
						`https://www.bigrock.in/login?` +
						`&utm_campaign=` +
						`&utm_content=home_hosting_sites_link` +
						`&utm_term=manage_sites` +
						`&utm_medium=brand_plugin` +
						`&utm_source=wp-admin/admin.php?page=bigrock#/home`
					}
					target="_blank"
					className={"wppbr-app-home-sites-action"}
				>
					{__("Manage BigRock account products, options and billing.", 'wp-plugin-bigrock')}
				</ActionField>
			</div>
		</Container.SettingsField>
	);
};

export default WebHostingSection;
