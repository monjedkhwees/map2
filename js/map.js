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
  // test marker with different position
  var marker = new google.maps.Marker({
    position: {
      lat: 33.890002,
      lng: 35.499708
    },
    map: map,
    title: 'Patriarcat'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

for (var i = 0; i < AppViewModel.allLocations().length; i++) {
var marker = new google.maps.Marker({
  map: map,
  draggable: true,
  animation: google.maps.Animation.DROP,
  position: {
    lat: 33.893197,
      lng: 35.501933
  }
});

marker.addListener('click', toggleBounce);

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
}
  var viewModel = function() {
    var self = this;
    self.locations = ko.observableArray(locations);
    
    for (var i = 0; i < self.locations().length; i++) { // <- use the ko observableArray instead of the loactions array
      self.locations()[i].marker = createMarker(new google.maps.LatLng(  //<- use the ko observableArray instead of the loactions array
        self.locations()[i].lat, self.locations()[i].lng));  //<- use the ko observableArray instead of the loactions array

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



/*

infowindow = new google.maps.InfoWindow({
        content: '<div class="info">loading...</div>'
    });

markerClick = function() {
        ViewModel.showInfo(this);

for (var i = 0; i < ViewModel.allLocations().length; i++) {
        marker[i] = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: {
                lat: locations[i].lon,
                lng: locations[i].lat
            }
        });
        google.maps.event.addListener(marker[i], 'click', markerClick);
    }
}

function toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        window.setTimeout(function() {
            marker.setAnimation(null);
        }, 2000);
    }
}

*/