<?php
/**
 * Created by PhpStorm.
 * User: montu007
 * Date: 10/2/18
 * Time: 9:13 PM
 */

/**
 * Plugin Name: Basic FIrst Blocks
 */

add_action( 'init', 'register_blocks' );
function register_blocks() {
    $jshandle = 'basic-block';
    $csshandle = 'basic-style';
    wp_register_script( $jshandle, plugins_url( 'block.build.js', __FILE__ ), array( 'wp-blocks', 'wp-element', 'wp-i18n' ) );
    wp_register_style( $csshandle, plugins_url( 'style.css', __FILE__ ) );
    register_block_type( 'basic/basic-static', array(
        'script' => $jshandle,
        'style'  => $csshandle
    ) );
    register_block_type( 'basic/sitename', array(
        'script' => $jshandle,
        'style'  => $csshandle
    ) );
    register_block_type( 'basic/inputfield', array(
        'script' => $jshandle,
        'style'  => $csshandle
    ) );
    register_block_type(
        'basic/editabletext', array(
            'script' => $jshandle,
            'style'  => $csshandle
        )
    );
}