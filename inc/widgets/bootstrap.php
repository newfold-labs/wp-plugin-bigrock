<?php
/**
 * Widgets bootstrap file
 *
 * @package WPPluginBigRock
 */

namespace Bigrock\Widgets;

use Bigrock\Widgets\SitePreview;

require_once BIGROCK_PLUGIN_DIR . '/inc/widgets/SitePreview.php';

/* Start up the Dashboards */
if ( is_admin() ) {
	new SitePreview();
}
