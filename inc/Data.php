<?php
/**
 * All data retrieval and saving happens from this file.
 *
 * @package WPPluginBigRock
 */

namespace Bigrock;

/**
 * \Bigrock\Data
 * This class does not have a constructor to get instantiated, just static methods.
 */
final class Data {
	/**
	 * Data loaded onto window.NewfoldRuntime
	 *
	 * @return array
	 */
	public static function runtime() {
		global $bigrock_module_container;
		$runtime = array(
			'plugin' => array(
				'url'     => BIGROCK_BUILD_URL,
				'version' => BIGROCK_PLUGIN_VERSION,
				'assets'  => BIGROCK_PLUGIN_URL . 'assets/',
				'brand'   => $bigrock_module_container->plugin()->brand,
			),
		);
		return $runtime;
	}

}
