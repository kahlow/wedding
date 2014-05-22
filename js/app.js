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
      content: "Here"
	});

    google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);