var markers = []; // To push markers in this array

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), { // initialize the map for the app
        center: {lat: 28.095703,lng: 30.763693},
        zoom: 13,
		mapTypeControl: false,
        disableDefaultUI: true,
		styles: [ // got this theme from googple maps API documentation https://developers.google.com/maps/documentation/javascript/styling
		  {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
		  {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
		  {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
		  {
			featureType: 'administrative',
			elementType: 'geometry.stroke',
			stylers: [{color: '#c9b2a6'}]
		  },
		  {
			featureType: 'administrative.land_parcel',
			elementType: 'geometry.stroke',
			stylers: [{color: '#dcd2be'}]
		  },
		  {
			featureType: 'administrative.land_parcel',
			elementType: 'labels.text.fill',
			stylers: [{color: '#ae9e90'}]
		  },
		  {
			featureType: 'landscape.natural',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		  },
		  {
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		  },
		  {
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{color: '#93817c'}]
		  },
		  {
			featureType: 'poi.park',
			elementType: 'geometry.fill',
			stylers: [{color: '#a5b076'}]
		  },
		  {
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{color: '#447530'}]
		  },
		  {
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{color: '#f5f1e6'}]
		  },
		  {
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [{color: '#fdfcf8'}]
		  },
		  {
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{color: '#f8c967'}]
		  },
		  {
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{color: '#e9bc62'}]
		  },
		  {
			featureType: 'road.highway.controlled_access',
			elementType: 'geometry',
			stylers: [{color: '#e98d58'}]
		  },
		  {
			featureType: 'road.highway.controlled_access',
			elementType: 'geometry.stroke',
			stylers: [{color: '#db8555'}]
		  },
		  {
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [{color: '#806b63'}]
		  },
		  {
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		  },
		  {
			featureType: 'transit.line',
			elementType: 'labels.text.fill',
			stylers: [{color: '#8f7d77'}]
		  },
		  {
			featureType: 'transit.line',
			elementType: 'labels.text.stroke',
			stylers: [{color: '#ebe3cd'}]
		  },
		  {
			featureType: 'transit.station',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		  },
		  {
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [{color: '#b9d3c2'}]
		  },
		  {
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{color: '#92998d'}]
		  }
		]
    });

    var infoWindow = new google.maps.InfoWindow({
        content: null // I will fill it in the AJAX request below
    });

    for (var i = 0; i < initLocations.length; i++) { // Loop through the array of markers and bind them into the map
        var marker = initLocations[i];
        marker = new google.maps.Marker({
            position: {lat: marker.Latitude,lng: marker.Longitude},
            map: map,
            title: marker.title,
            Latitude: marker.Latitude,
            Longitude: marker.Longitude,
            contact: marker.contact,
            streetAddress: marker.streetAddress,
            animation: google.maps.Animation.DROP,
			draggable: true,
        });

        markers.push(marker); // bind this marker to markers array
        marker.setMap(map);

        marker.addListener('click', createInfoWindow(marker, infoWindow)); // add listener to each marker to show its info

        view.initLocations()[i].marker = marker; // pass the marker which belongs to each location to the viewmodel
    }
}

var initLocations = [{
        title: "Government Office",
        Latitude: 28.080027,
        Longitude: 30.80616,
        contact: "<em>086</em> - 2111178",
        streetAddress: "Central Road, New Al Minya"
    },
    {
        title: "Spinneys hyper market",
        Latitude: 28.085346,
        Longitude: 30.803296,
        contact: "<em>086</em> - 2111106",
        streetAddress: "Central Road, New Al Minya"
    },
	{
        title: "Al Minya Railway station",
        Latitude: 28.096787,
        Longitude: 30.753860,
        contact: "<em>086</em> - 2341156",
        streetAddress: "Saad Zaghloul street"
    },
    {
        title: "Minya Sporting Club",
        Latitude: 28.108402,
        Longitude: 30.752079,
        contact: "<em>086</em> - 2356744",
        streetAddress: "Taha Hussien Str, Al Minya"
    },
	{
        title: "Al Homeat Hospital",
        Latitude: 28.087537,
        Longitude: 30.762781,
        contact: "<em>086</em> - 2350000",
        streetAddress: "El Horeya Street"
    },
    {
        title: "Minya Secondary School",
        Latitude: 28.107503,
        Longitude: 30.743877,
        contact: "<em>086</em> - 2345678",
        streetAddress: "Taha Hussien Str, Al Minya"
    },
	{
        title: "Faculty Of Engineering",
        Latitude: 28.105374,
        Longitude: 30.753384,
        contact: "<em>086</em> - 2345678",
        streetAddress: "Taha Hussien Str, Al Minya"
    },
    {
        title: "Al Nile Bridge",
        Latitude: 28.090836,
        Longitude: 30.765313,
        contact: "<em>086</em> - 3509802",
        streetAddress: "Korniesh Al Nile"
    },
    {
        title: "Minya University Hospital",
        Latitude: 28.090013,
        Longitude: 30.76505,
        contact: "<em>086</em> - 3312692",
        streetAddress: "Al Nile Bridge, Al Minya"
    }

];

function showInfoWindow(marker, infoWindow) {
    var latlng = marker.Latitude + ',' + marker.Longitude;

        var darkskyTimeOut = setTimeout(function () {
            alert("Darksky API informations Not Avilable,\nCheck your connection");
        }, 2000);

        var Url = "https://api.darksky.net/forecast/fe5cb931b8b191b94ab1d4a5783efb3e/" + latlng; // return the info for the weather for this lat & lng

        var weatherInfo = ""; // to store the data of the wheather in the infoWindow

        $.ajax({
            url: Url,
            dataType: "jsonp",
            success: function (data) {
                info = data;

                var sum = info.hourly.icon;
				var temp = info.currently.temperature;

                weatherInfo = "<i class='fa fa-cloud'></i><b><em> "+sum+" </em></b>"+
								"<i class='fa fa-thermometer-empty' aria-hidden='true'> "+temp+"</i>";
                clearTimeout(darkskyTimeOut);

                var APIdata = '<h3><b>Title: </b>'+marker.title+'.</h3><p><b>Contact: </b>'+marker.contact+'.</p><p><b>Address: </b>'+marker.streetAddress+'.</p> <small>Info from <b>darksky</b> API: </small>'+weatherInfo;

                infoWindow.setContent(APIdata); // bind the content for infoWindow
            }

        });

		marker.setAnimation(google.maps.Animation.BOUNCE);

        setTimeout(function () {
            marker.setAnimation(null);
        }, 1400);

        infoWindow.open(map, marker);
}

function createInfoWindow(marker, infoWindow) {
    return function () {
        showInfoWindow(marker, infoWindow);
    };
}


var viewModel = function () {

    var self = this;

    self.initLocations = ko.observableArray(initLocations); // array of Al minya initLocations
    self.computedArray = ko.observableArray([]); // to store the result of filtered titles of the initLocations
    self.searchStr = ko.observable(""); // for the search input in the view
    self.infoWindows = ko.observableArray([]);

    self.showInfoWindowData = function (data) {

        var infoWindow = new google.maps.InfoWindow({
            content: null // to reset the infoWindow previous data
        });

        for (var i = 0; i<markers.length; i++) {
            if (markers[i].title === data.title) {
                self.infoWindows().forEach(function(inf) {
                    if (true) {
                        inf.close();
                    }
                });

                showInfoWindow(markers[i], infoWindow);
            }
        }
        self.infoWindows.push(infoWindow);
    };

    self.computedArray = ko.computed(function () {


        return ko.utils.arrayFilter(self.initLocations(), function (text) { // function to filter the array data

            if (text.title.toLowerCase().indexOf(self.searchStr().toLowerCase()) !== -1) { // this condition to check if the search text is valid or not

                if (text.marker) { // if the search valid, bind the marker to the map view
                    text.marker.setVisible(true);
                }
            } else {
                if (text.marker) // if the search is not valid, set the visibility to false
                    text.marker.setVisible(false);
            }
            return text.title.toLowerCase().indexOf(self.searchStr().toLowerCase()) !== -1;
        });
    }, self);


};

view = new viewModel(); // bind the viewModel data to the view{} object

$(function () {
	ko.applyBindings(view);
});

function LoadError() { // in the case of a problem occured due to the internet connection
	window.alert("Error in loading map Check your Internet Connection and try again");
}
