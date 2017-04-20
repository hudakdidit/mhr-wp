<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$children = Timber::get_posts("post_type=restaurant&post_parent=$post->ID&posts_per_page=-1");
$siblings = Timber::get_posts("post_type=restaurant&post_parent=$post->post_parent&exclude=>$post->ID");
$context['submenu'] = $children ? $children : $siblings;

if ($post->post_parent) {
	$context['parent'] = get_post($post->post_parent);
  $context['parent_title'] = get_the_title($post->post_parent);
  $context['parent_link'] = get_permalink($post->post_parent);
}

$context['menus'] = get_field('menus');
$context['events'] = get_field('events_listing');

print_r(get_field('event_listing'));

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}
