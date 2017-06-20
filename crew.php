<?php
    /**
    * Template Name: Crew
    */



$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['crew'] = get_field('crew', 'option');
// print_r($context);
Timber::render( array( 'page-' . $post->post_name . '.twig', 'crew.twig' ), $context );
?>