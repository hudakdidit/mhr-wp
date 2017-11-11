<?php
    /**
    * Template Name: Crew
    */



$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;


$context['crew'] = get_posts(array(
    "post_type" => "person",
    "posts_per_page" => -1,
));
Timber::render( array( 'page-' . $post->post_name . '.twig', 'crew.twig' ), $context );
?>