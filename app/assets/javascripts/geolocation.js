// if (navigator.geolocation){
// 		navigator.geolocation.getCurrentPosition(
//                                     success_handler, 
//                                     error_handler, 
//                                     {enableHighAccuracy:true});
// 	}
// 	else {
// 		alert('Geolocation not available')
// 	}
// 	function success_handler(position) {
//         latitude = position.coords.latitude;
//         longitude = position.coords.longitude;
//         accuracy = position.coords.accuracy;

//         $.cookie("posLat", latitude);
//         $.cookie("posLon", longitude);
//         $.cookie("posAccuracy", accuracy);
//     }

  	function getGeoLocation() {
	  navigator.geolocation.getCurrentPosition(setGeoCookie);
	}

	function setGeoCookie(position) {
		var latitude = position.coords.latitude;
	    var longitude = position.coords.longitude;
	    var accuracy = position.coords.accuracy;

	    document.cookie = "lat=" + escape(latitude);
	    document.cookie = "lon=" + escape(longitude);
	    document.cookie = "acc=" + escape(accuracy);
	}

	 //    var directionsDisplay;
		// var directionsService = new google.maps.DirectionsService();
		// var map;
		// var start = new google.maps.LatLng(<%= @lat %>, <%= @lon %>);
		// var end = new google.maps.LatLng(<%= @lat %>, <%= @lon %>);


  //   map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions); 
  //   directionsDisplay.setMap(map);

	  function initialize() {
        directionsDisplay = new google.maps.DirectionsRenderer();
        var chicago = new google.maps.LatLng(41.850033, -87.6500523);
        var mapOptions = {
                zoom:10,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: chicago
        }

        map = new
google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        directionsDisplay.setMap(map);



        var layer = new google.maps.FusionTablesLayer({
                query: {
                        select: 'location',
                        from: '1KlcxGqe8GBKtCaeA0Pvjbd701kygcwjoOsn14fQ'
                },
heatmap: {
                        enabled: isHeatmap
                }
        })

        layer.setMap(map);

}