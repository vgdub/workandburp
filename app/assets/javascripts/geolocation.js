
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