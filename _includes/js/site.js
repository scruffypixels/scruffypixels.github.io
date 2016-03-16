document.addEventListener('DOMContentLoaded', function() {

	console.log( "Let there be javascript." );
	
	var body = document.querySelector( 'body' );
	var nav = document.getElementById( 'primaryNav' );
	
	primaryNav.addEventListener( 'click', function(e) {
		if( e.target.classList.contains( 'toggle' ) ) {
			e.preventDefault();
			body.classList.toggle( 'nav-active' );			
		}
	});
	
});