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

$restaurantCategories = $context['main_restaurant_categories'];
$isMenu = $post->post_type == "menu";
$context['is_menu'] = $isMenu;
$restaurant = null;
if ($isMenu) {
	$restaurant = getRestaurant($post, $restaurantCategories);
}

$parent = null;
if ($post->post_parent || $isMenu) {
	$parent = $isMenu ? $restaurant : $post->post_parent;
	$context['parent'] = get_post($parent);
	$context['parent_title'] = get_the_title($parent);
	$context['parent_link'] = get_permalink($parent);
}



function getRestaurant($post, $categories) {
	foreach($categories as $cat) {
		if (in_category($cat, $post)) {
			return get_posts(array(
				"category" => $cat,
				"post_type" => "restaurant"
			))[0];
		}
	}
}

$post_id = $isMenu ? $parent->ID : $post->ID;
$context['menus'] = get_field('menus', $post_id);
$context['tastingmenus'] = get_field('tasting_menus', $post_id);
$context['events'] = get_field('events_listing', $post_id);

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}
