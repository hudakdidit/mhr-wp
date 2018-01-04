<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		} );
	return;
}

Timber::$dirname = array('templates', 'views');



class StarterSite extends TimberSite {

	function change_menus(){
		
		remove_menu_page( 'index.php' );                  //Dashboard
		// remove_menu_page( 'jetpack' );                    //Jetpack* 
		// remove_menu_page( 'edit.php' );                   //Posts
		// remove_menu_page( 'upload.php' );                 //Media
		// remove_menu_page( 'edit.php?post_type=page' );    //Pages
		remove_menu_page( 'edit-comments.php' );          //Comments
		// remove_menu_page( 'themes.php' );                 //Appearance
		// remove_menu_page( 'plugins.php' );                //Plugins
		// remove_menu_page( 'users.php' );                  //Users
		// remove_menu_page( 'tools.php' );                  //Tools
		// remove_menu_page( 'options-general.php' );        //Settings
		add_menu_page( 'Tilth Menus', 'Tilth Menus', 'edit_posts', 'edit.php?s&post_status=all&post_type=menu&action=-1&m=0&cat=1&filter_action=Filter&paged=1&action2=-1');
		add_menu_page( 'Agrodolce Menus', 'Agrodolce Menus', 'edit_posts', 'edit.php?s&post_status=all&post_type=menu&action=-1&m=0&cat=70&filter_action=Filter&paged=1&action2=-1');
		add_menu_page( 'Catering Menus', 'Catering Menus', 'edit_posts', 'edit.php?s&post_status=all&post_type=menu&action=-1&m=0&cat=73&filter_action=Filter&paged=1&action2=-1');
	}

	/* Redirect the user logging in to a custom admin page. */
	function new_dashboard_home($username, $user){
		if(array_key_exists('administrator', $user->caps)){
				wp_redirect(admin_url('edit.php?post_type=menu'), 301);
				exit;
		}
	}


	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_action('wp_login', array( $this, 'new_dashboard_home'), 10, 2);
		add_action( 'init', array( $this, 'register_menus' ) );
		add_action( 'init', array( $this, 'register_options' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'init', array( $this, 'custom_routes' ) );
		add_action( 'admin_menu', array( $this, 'change_menus') );
		add_action( 'template_redirect', array( $this, 'redirects' ) );

		add_image_size( 'restaurant_gallery', 800, 600 );
		add_image_size( 'background_photo', 1024, 1024 );



		if (!is_admin() && !in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php'))) {
			add_filter( 'timber_context', array( $this, 'add_to_context' ) );
			add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
			add_filter( 'post_gallery', array( $this, 'custom_gallery'), 10, 2);
			add_action( 'init', array( $this, 'enqueue_stylesheets' ) );
			add_action( 'init', array( $this, 'enqueue_javascripts' ) );
			parent::__construct();
		}
	}





	function enqueue_stylesheets() {
		wp_enqueue_style( 'fawesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', array());
		wp_enqueue_style( 'font', 'http://fonts.googleapis.com/css?family=Quicksand:400,700', array());
		$template_directory_uri = get_template_directory_uri();
		wp_enqueue_style( 'main', "$template_directory_uri/static/site.css", array(), '112017');
	}

	function enqueue_javascripts() {
		$template_directory_uri = get_template_directory_uri();
		if (defined('_DEV_')) {
			$assets_directory = "http://localhost:3000";
		} else {
			$assets_directory = "$template_directory_uri/static";
		}
		wp_deregister_script( 'wp-embed' );
		wp_deregister_script( 'jquery' );
		wp_enqueue_script( 'jquery', "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", array(), null, true);
		wp_enqueue_script( 'respondjs', "https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js", array('jquery'), null, true);
		wp_enqueue_script( 'main', "$assets_directory/site.js", array('jquery'), '112017', true);
	}

	function register_options() {
		// if( function_exists('acf_add_options_page') ) {
		//
		// 	acf_add_options_page('Website Settings');
		//
		// }

		
		
		// Add category metabox to page
		register_taxonomy_for_object_type('category', 'page');  
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function custom_routes() {
		add_rewrite_endpoint( 'restaurants/tilth/menus', EP_ROOT );
	}

	function redirects() {
		
	}

	function register_menus() {
    register_nav_menus(
      array(
        'primary' => __( 'Primary Menu' ),
        'footer' => __( 'Footer Menu' )
      )
    );
  }

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['primary_menu'] = new TimberMenu("primary");
		$context['footer_menu'] = new TimberMenu("footer");
		$context['background_image'] = get_field('background_image', 'option');
		$context['footer_background_image'] = get_field('footer_background_image', 'option');
		$context['featured_person'] = get_field('featured_person', 'option');
		$context['footer_links'] = get_field('footer_links', 'option');
		$context['restaurants'] = get_field('restaurants', 'option');
		$context['logo'] = get_field('logo', 'option');
		$context['site'] = $this;
		$context['main_restaurant_categories'] = get_field('main_restaurant_categories', 'option');

		global $post;
		
		$context['page_slug'] = $post ? $post->post_name : "";
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own fuctions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter( new Twig_SimpleFilter('post_url_by_id', 'get_post_url_by_id') );
		$twig->addFilter( new Twig_SimpleFilter('post_thumbnail', 'get_post_thumbnail') );
		$twig->addFilter( new Twig_SimpleFilter('attachment_url', 'get_attachment_url') );
		return $twig;
	}

	function custom_gallery($output, $attr) {
    	global $post;

    	if (isset($attr['orderby'])) {
        	$attr['orderby'] = sanitize_sql_orderby($attr['orderby']);
        	if (!$attr['orderby'])
            	unset($attr['orderby']);
    		}

    	extract(shortcode_atts(array(
        	'order' => 'ASC',
        	'orderby' => 'menu_order ID',
        	'id' => $post->ID,
        	'itemtag' => 'dl',
        	'icontag' => 'dt',
        	'captiontag' => 'dd',
        	'columns' => 3,
        	'size' => 'thumbnail',
        	'include' => '',
        	'exclude' => ''
    	), $attr));

    	$id = intval($id);
    	if ('RAND' == $order) $orderby = 'none';

    	if (!empty($include)) {
        	$include = preg_replace('/[^0-9,]+/', '', $include);
        	$_attachments = get_posts(array('include' => $include, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby));

        	$attachments = array();
        	foreach ($_attachments as $key => $val) {
            	$attachments[$val->ID] = $_attachments[$key];
        	}
    	}

    	if (empty($attachments)) return '';

    	// Here's your actual output, you may customize it to your need
    	$output = "<div class=\"grid\">\n";

    	// Now you loop through each attachment
    	foreach ($attachments as $id => $attachment) {
        	// Fetch the thumbnail (or full image, it's up to you)
					//      $img = wp_get_attachment_image_src($id, 'medium');
					//      $img = wp_get_attachment_image_src($id, 'my-custom-image-size');
        	$img = wp_get_attachment_image_src($id, 'full');

        	$output .= "<div class=\"grid-item\"><img src=\"{$img[0]}\" width=\"{$img[1]}\" height=\"{$img[2]}\" alt=\"\" /></div>";
    	}

    	$output .= "</div>\n";

    	return $output;
		}

}

function get_attachment_url($id) {
	return wp_get_attachment_url($id);
}

function get_post_url_by_id($id) {
	return wp_make_link_relative(get_permalink($id));
}

function get_post_thumbnail($id, $size = 'post-thumbnail') {
	wp_get_attachment_image_src( get_post_thumbnail_id($id), $size );
}




new StarterSite();
