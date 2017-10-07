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

$restaurantPostType = $post->post_type == "restaurant";
$restaurantCategories = $context['main_restaurant_categories'];
$isRestaurantChildPage = $post->post_type == ("menu" || "gift_certificates" || "event");
$hasParentRestaurantPage = $post->post_type == "restaurant" || $isRestaurantChildPage;

$context['is_menu'] = $post->post_type == "menu";
$context['hasParentRestaurantPage'] = $hasParentRestaurantPage;
$restaurant = null;
if ($hasParentRestaurantPage) {
	$restaurant = getRestaurant($post, $restaurantCategories);
}

global $parent;
if ($isRestaurantChildPage || $post->post_parent) {
	$parent = $hasParentRestaurantPage ? $restaurant : $post->post_parent;
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


$post_id = $hasParentRestaurantPage ? $parent->ID : $post->ID;
function getRestaurantMenus($post_id, $post) {
	$categories = wp_get_post_categories($post_id);
	$category = count($categories) > 0 ? $categories[0] : null;
	if ($post->post_name == 'catering') {
		$category = get_cat_ID('Catering');
	} else {// not sure why I need to do this...
		$category = $categories[0];
	}

	$tasting_category = get_cat_ID('Tasting Menu');
	if ($category) {
		
		return get_posts(array(
			"category" => $category,
			"post_type" => "menu",
			"category__not_in" => array($tasting_category)
		));
	}
}
function getRestaurantTastingMenus($post_id) {
	$categories = wp_get_post_categories($post_id);
	$tasting_category = $category_id = get_cat_ID('Tasting Menu');
	if (count($categories) > 0) {
		return get_posts(array(
			"post_type" => "menu",
			"category__and" => array($categories[0], $tasting_category)
		));
	}
}

$context['photo_gallery'] = get_field('photo_gallery', $post_id);

// $context['menus'] = get_field('menus', $post_id);
// $context['tastingmenus'] = get_field('tasting_menus', $post_id);
$context['menus'] = getRestaurantMenus($post_id, $post);
$context['tastingmenus'] = getRestaurantTastingMenus($post_id);

function getRestaurantEvents($post_id) {
	$categories = wp_get_post_categories($post_id);
	if (count($categories) > 0) {
		return get_posts(array(
			"category" => $categories[0],
			"post_type" => "event"
		));
	}
}
$events = null;
if ($hasParentRestaurantPage || $restaurantPostType) {
	$events = getRestaurantEvents($post_id);
}
$context['events'] = $events;

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}
