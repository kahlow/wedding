$(document).foundation();

function initialize() {
    var mapCanvas = document.getElementById('googleMap');

    var locations = ['<h4>Wedding location</h4>', 33.968302,-81.384349];

    var myLatLng = new google.maps.LatLng(33.968302,-81.384349);

    var mapOptions = {
        center: myLatLng,
        zoom: 12,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '<h4>Harmon\'s tree farm</h4>'
    });

    var infowindow = new google.maps.InfoWindow({
      content: "<p class='text-center'><a href='http://www.harmonstreefarmllc.com/'>Harmons Tree Farm</a></br>" + 
                "<a href='https://goo.gl/maps/BdLsw'>3152 Augusta Rd, Gilbert, SC 29054</a><br/>" +
                "(803) 359-4454</p>"
	});

    google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
    $( ".when-nav" ).click(function() {
        $('html,body').animate({
            scrollTop: $('.when-pagebreak').offset().top
        });
    });

    $( ".home-nav" ).click(function() {
        $('html,body').animate({
            scrollTop: $('.promo').offset().top
        });
    });

    $( ".where-nav" ).click(function() {
        $('html,body').animate({
            scrollTop: $('#googleMap').offset().top
        });
    });

    $( ".give-nav" ).click(function() {
        $('html,body').animate({
            scrollTop: $('.give').offset().top
        });
    });

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'kahlow2014',
        clientId: 'c8891fa90e64440989271dc1b18c53b9'
    });
    feed.run();
});