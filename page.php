<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * To generate specific templates for your pages you can use:
 * /mytheme/views/page-mypage.twig
 * (which will still route through this PHP file)
 * OR
 * /mytheme/page-mypage.php
 * (in which case you'll want to duplicate this file and save to the above path)
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['children'] = Timber::get_posts("post_type=page&post_parent=$post->ID&posts_per_page=-1");
$context['siblings'] = Timber::get_posts("post_type=page&post_parent=$post->post_parent&exclude=>$post->ID");
if ($post->post_parent) {
  $context['parent_title'] = get_the_title($post->post_parent);
  $context['parent_link'] = get_permalink($post->post_parent);
}

if ($post->post_name == 'about') {
	$context['siblings'] = $context['children'];
}

Timber::render( array( 'page-' . $post->post_name . '.twig', 'page.twig' ), $context );
