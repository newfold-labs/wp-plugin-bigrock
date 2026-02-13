import ActionField from "../../components/action-field";
import { Container } from "@newfold/ui-component-library";

const WebContentSection = () => {
	return (
		<Container.SettingsField
			title={__('Website Content', 'wp-plugin-bigrock')}
			description={__('Create, manage & sort your story.', 'wp-plugin-bigrock')}
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-5">
				<ActionField
					label={__("Blog", 'wp-plugin-bigrock')}
					buttonLabel={__("New Post", 'wp-plugin-bigrock')}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(window.NewfoldRuntime.adminUrl + 'post-new.php')}
					className={"wppbr-app-home-blog-action"}
				>
					{__('Write a new blog post.', 'wp-plugin-bigrock')}
				</ActionField>

				<ActionField
					label={__("Pages", 'wp-plugin-bigrock')}
					buttonLabel={__("New Page", 'wp-plugin-bigrock')}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(window.NewfoldRuntime.adminUrl + 'post-new.php?post_type=page')}
					className={"wppbr-app-home-pages-action"}
				>
					{__('Add fresh pages to your website.', 'wp-plugin-bigrock')}
				</ActionField>

				<ActionField
					label={__("Categories", 'wp-plugin-bigrock')}
					buttonLabel={__("Manage Categories", 'wp-plugin-bigrock')}
					href={window.NewfoldRuntime.linkTracker.addUtmParams(window.NewfoldRuntime.adminUrl + 'edit-tags.php?taxonomy=category')}
					className={"wppbr-app-home-categories-action"}
				>
					{__('Organize existing content into categories.', 'wp-plugin-bigrock')}
				</ActionField>
			</div>
		</Container.SettingsField >
	);
};

export default WebContentSection;
