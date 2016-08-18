var map;
var marker;
var infowindow;
var locations = [{
    name: 'bairut',
    lat: 33.893197,  
    lng: 35.501933
  },
  {
    name: "Alrawshe",
    lat: 33.887212,
    lng: 35.473351
  },
  {
    name: 'sanae',
    lat: 33.893421,  
    lng: 35.490153 
  },
  {
    name: 'amircan unevercity',
    lat: 33.889787, 
    lng: 35.474789
  },
  {
    name: 'International College',
    lat: 33.893421,  
    lng: 35.490153
  },
  {
    name: "barbar",
    lat: 33.892744,
    lng: 35.471570
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 33.893197,
      lng: 35.501933
    },
    zoom: 13
  });
  infowindow = new google.maps.InfoWindow({
    content: "<p>My Info Window Content</p>"
  });
  
  var viewModel = function() {
    var self = this;
    self.locations = ko.observableArray(locations);
    
    for (var i = 0; i < self.locations().length; i++) {
    self.locations()[i].marker = createMarker(new google.maps.LatLng(self.locations()[i].lat, self.locations()[i].lng));
    // Call the 'createClickEvent' function, and pass the current location as a parameter
    createClickEvent(self.locations()[i]);
}

function createClickEvent(location) {
    location.marker.addListener('click', function() {
        /* Start off by logging the location object to the console
         * This will let you view the location object, and see if this `createClickEvent` function is working properly so far
         */
        console.log(location);

        /*
         * Inside this 'createClickEvent' function, the marker object can be accessed using 'location.marker'.
         * You can use the marker variable to complete the necessary click functionality
         */

        /* TODO: use the 'setContent()' method to update the content of the 'infowindow' object */

        /* TODO: open the 'infowindow' object */
        infowindow.open(map, marker);

        /* TODO: bounce the map marker icon */
        marker.addListener('click', toggleBounce);

    });
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
    self.value = ko.observable('');
  self.search = ko.computed(function() {
      return ko.utils.arrayFilter(self.locations(), function(place) {
        console.log(place);
        var match = place.name.toLowerCase().indexOf(self.value().toLowerCase()) >= 0;
        place.marker.setVisible(match);
        return match;
      });
    });
    
  };


  ko.applyBindings(new viewModel());
}

  function createMarker(latlng) {
  marker = new google.maps.Marker({
    position: latlng,
    map: map
  });

 return marker;
} 

function googleError(){
  window.alert(" please try again");
}



