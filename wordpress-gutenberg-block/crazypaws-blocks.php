<?php
/**
 * Plugin Name: Crazypaws Gutenberg Blocks
 * Plugin URI: https://crazypaws-global.com
 * Description: Custom Gutenberg blocks for Crazypaws Global website - Pet Supplies Manufacturer
 * Version: 1.0.0
 * Author: Crazypaws Global
 * Author URI: https://crazypaws-global.com
 * License: GPL2+
 * Text Domain: crazypaws-blocks
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Define plugin constants
 */
define('CRAZYPAWS_BLOCKS_VERSION', '1.0.0');
define('CRAZYPAWS_BLOCKS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CRAZYPAWS_BLOCKS_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Register custom Gutenberg blocks
 */
function crazypaws_register_blocks() {
    // Register the Product Showcase Block
    register_block_type(CRAZYPAWS_BLOCKS_PLUGIN_DIR . 'build/product-showcase');

    // Register the Service Features Block
    register_block_type(CRAZYPAWS_BLOCKS_PLUGIN_DIR . 'build/service-features');

    // Register the CTA Section Block
    register_block_type(CRAZYPAWS_BLOCKS_PLUGIN_DIR . 'build/cta-section');
}
add_action('init', 'crazypaws_register_blocks');

/**
 * Enqueue block editor assets
 */
function crazypaws_enqueue_block_editor_assets() {
    // Enqueue editor styles
    wp_enqueue_style(
        'crazypaws-blocks-editor',
        CRAZYPAWS_BLOCKS_PLUGIN_URL . 'build/editor.css',
        array('wp-edit-blocks'),
        CRAZYPAWS_BLOCKS_VERSION
    );
}
add_action('enqueue_block_editor_assets', 'crazypaws_enqueue_block_editor_assets');

/**
 * Enqueue frontend assets
 */
function crazypaws_enqueue_block_assets() {
    // Enqueue frontend styles
    wp_enqueue_style(
        'crazypaws-blocks-style',
        CRAZYPAWS_BLOCKS_PLUGIN_URL . 'build/style.css',
        array(),
        CRAZYPAWS_BLOCKS_VERSION
    );
}
add_action('enqueue_block_assets', 'crazypaws_enqueue_block_assets');

/**
 * Register custom block category
 */
function crazypaws_block_categories($categories) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'crazypaws',
                'title' => __('Crazypaws Blocks', 'crazypaws-blocks'),
                'icon'  => 'pets',
            ),
        )
    );
}
add_filter('block_categories_all', 'crazypaws_block_categories', 10, 1);
