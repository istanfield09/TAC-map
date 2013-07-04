var map;
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(40.71435,-38.00597),
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL,
          }
        };
var map = new google.maps.Map(document.getElementById("map"),mapOptions);
      

    
var layer = new google.maps.FusionTablesLayer({
  query: {
    select: 'location',
    from: '1BkkG2nCVzFvvott2H2gPUb0eghfR7Nk37UZ76wQ',
  		},
  	options: {
  		styleId: 4,
  		templateId: 5
  	},  
    styles: [
      { markerOptions: 
        {iconName: 'red_blank'}
      }]
  
  
  
});
layer.setMap(map);


}




google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
	console.log('ready!');
		
	$("#check1").change(function() {
  		var $input = $(this);
  		if ($input.is(':checked')) {
  			alert("You checked a box! Go you!")
  		}
	}).change();

});



