require('dotenv').config();

var googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_KEY 
});

var googlePlacesClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_PLACES
})
 //running geocode with different apikey to see if it
googleMapsClient.geocode({

   address: '2908 84th ave north brooklyn park'
    
  }, function(err, response) {
    if (!err) {

    //   console.log(response.json.results);
       console.log(response.json.results[0], "RESULTS");
      //   console.log(response.json.results[0], "RESULTS");
      
        var ilng = parseFloat(response.json.results[0].geometry.location.lng);
        var  ilat = parseFloat(response.json.results[0].geometry.location.lat);
        // console.log(ilat,ilng);
        coord = {
            lat: ilat,
            lng: ilng
        }
        getlocationQuery(coord);
    }
  });
//Geocode an address.
function getlocationQuery(coord){
   var latitude, longitude;
   latitude = pyrmont.lat;
   longitude = pyrmont.lng;
   console.log(latitude);
   console.log(longitude);

googlePlacesClient.placesNearby({

    location: [44.98951769999999,-93.25131069999999],
    radius: 100,
    type: 'restaurant'
}, function (err, response) {
    if (!err) {
        for(let i = 0; i < response.length; i++) {}
    //   console.log(response.json.results[0]);
    // console.log(response.json.results[0].geometry.location); // latitude and longitude 
    // console.log(response.json.results[0].photos[0].photo_reference ); //photo reference 
    // console.log(response.json.results[0].rating)// rating
    // console.log(response.json.results[0].name)// name of restaurant
    // console.log(response.json.results[0].vicinity)//address
    // console.log(response.json.results[0].place_id)//address
    

    }
    else if (err === 'timeout'){
        console.log("Timeout");
    }
    else {
        console.log(err.json);
    }
});
}
// "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAY0U67E3KYLT8jrELDUbWW9cR3Vt205uzzpBFp4BhMwDszYWx24U6GyB76WihOCArfRUxavQ78-ah3qw-7pR-xghFKdLTHPTF2hxlSftFFy0-eBE5cSK9u1PZsLIci18VEhCgx-Yk88z-I2UtY913sSUBGhR3JVkhLS23wGnK-PjuFEV6A2MMPg&key=AIzaSyAqwUr61c2v1IB62ie5sJKPsvMWlMAmE0g"

// "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ-SDIlncts1IRxlaSi4Kah2c&key=AIzaSyAqwUr61c2v1IB62ie5sJKPsvMWlMAmE0g"