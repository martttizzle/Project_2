$(document).ready(function () {


    var rest = "restaurant";
    var pyrmont;
    var googleapiKey = "AIzaSyBAhNxc8BbsIMC5tFTNUSADF8vhSiNxXmA";
    var locationURL;
    var map;


    $("#find-location").on("click", function () {
        // $("input:text").val();
        var zip = $("#zip").val();
        console.log(zip);
        locationURL = geocodeQueryBuild(zip);
        console.log(locationURL);
        callgeocodeAPI(locationURL);
    });

    // "https://maps.googleapis.com/maps/api/geocode/json?address=" + input + "&key=" + googleapiKey;

    function geocodeQueryBuild(input) {
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + input + "&key=" + googleapiKey;
        return queryURL;
    };
    // + googleapiKey;
    // This function calls the geocode API and gets lang & latt
    function callgeocodeAPI(queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (gecodeoResp) {
            ilat = parseFloat(gecodeoResp.results[0].geometry.location.lat);
            ilng = parseFloat(gecodeoResp.results[0].geometry.location.lng);
            console.log(ilat, ilng);
            pyrmont = {
                lat: ilat,
                lng: ilng
            }
            console.log(gecodeoResp);
            init();
        });



        function init() {

            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: pyrmont
            });

            var request = {
                location: pyrmont,
                radius: 5,
                query: [rest]
            };

            var service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback());

            function callback(results, status) {


                console.log(results);

                function callback(results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            var place = results[i];
                            console.log(place);

                        }
                    }
                }
            }
        }
    }
})