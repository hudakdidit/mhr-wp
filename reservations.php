<?php
    /**
    * Template Name: Reservations
    */



$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( array( 'page-' . $post->post_name . '.twig', 'reservations.twig' ), $context );
?>
