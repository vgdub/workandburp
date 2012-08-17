
  	function getGeoLocation() {

	  navigator.geolocation.getCurrentPosition(setGeoCookie);
	}

	function setGeoCookie(position) {
		var latitude = position.coords.latitude;
	    var longitude = position.coords.longitude;
	    var accuracy = position.coords.accuracy;

	    
	    document.cookie = "lon=" + escape(longitude) + ";max-age=30";
        document.cookie = "lat=" + escape(latitude) + ";max-age=30";
	    document.cookie = "acc=" + escape(accuracy) + ";max-age=30";
	}

	 //    var directionsDisplay;
		// var directionsService = new google.maps.DirectionsService();
		// var map;
		// var start = new google.maps.LatLng(<%= @lat %>, <%= @lon %>);
		// var end = new google.maps.LatLng(<%= @lat %>, <%= @lon %>);


  //   map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions); 
  //   directionsDisplay.setMap(map);

	  function initialize() {
	  	navigator.geolocation.getCurrentPosition(setGeoLocation);
		}

		function setGeoLocation(position) {
			var latitude = position.coords.latitude;
		    var longitude = position.coords.longitude;
		    var accuracy = position.coords.accuracy;

        var location = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
                zoom:15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: location
        }

        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        var marker = new google.maps.Marker({
		      position: location,
		      map: map,
		      title:"Hello World!"
		  });



//         var layer = new google.maps.FusionTablesLayer({
//                 query: {
//                         select: 'location',
//                         from: '1KlcxGqe8GBKtCaeA0Pvjbd701kygcwjoOsn14fQ'
//                 },
// heatmap: {
//                         enabled: isHeatmap
//                 }
//         })

//         layer.setMap(map);

}