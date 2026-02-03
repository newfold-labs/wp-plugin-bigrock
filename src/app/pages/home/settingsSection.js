import ActionField from "../../components/action-field";
import { Container } from "@newfold/ui-component-library";

const SettingsSection = () => {
	return (
		<Container.SettingsField
			title={__('Settings and Performance', 'wp-plugin-bigrock')}
			description={__('Customize & fine-tune your site.', 'wp-plugin-bigrock')}
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-5">
				<ActionField
					label={__("Manage Settings", 'wp-plugin-bigrock')}
					buttonLabel={__("Settings", 'wp-plugin-bigrock')}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(`admin.php?page=bigrock#/settings`)}
					className={"wppbr-app-home-settings-action"}
				>
					{__('Manage your site settings. You can ajdust automatic updates, comments, revisions and more.', 'wp-plugin-bigrock')}
				</ActionField>

				<ActionField
					label={__("Performance", 'wp-plugin-bigrock')}
					buttonLabel={__("Performance", 'wp-plugin-bigrock')}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(`admin.php?page=bigrock#/settings/performance`)}
					className={"wppbr-app-home-performance-action"}
				>
					{__('Manage site performance and caching settings as well as clear the site cache.', 'wp-plugin-bigrock')}
				</ActionField>

				<ActionField
					label={__("Marketplace", 'wp-plugin-bigrock')}
					buttonLabel={__("Visit Marketplace", 'wp-plugin-bigrock')}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(`admin.php?page=bigrock#/marketplace`)}
					className={"wppbr-app-home-marketplace-action"}
				>
					{__('Add site services, themes or plugins from the marketplace.', 'wp-plugin-bigrock')}
				</ActionField>
			</div>
		</Container.SettingsField >
	);
};

export default SettingsSection;
