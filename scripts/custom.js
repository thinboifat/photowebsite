/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var clicks = 0;
var myCenter=new google.maps.LatLng(50.7947319,-1.0909327);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:13,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter
  });

marker.setMap(map);


var infowindow = new google.maps.InfoWindow({
  content:"<h4>We are Here!</h4><p> Room 1.08, Eldon Building</p>"
  });

  infowindow.open(map,marker)

  google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });

  

// Zoom when clicking on marker
google.maps.event.addListener(marker,'click',function() {
  if (clicks != 1) {
  map.setZoom(16);
  clicks = 1;
  }
  else { 
  map.setZoom(13);
  clicks = 0;
  }
  map.setCenter(marker.getPosition());
  });

  
  
}

google.maps.event.addDomListener(window, 'load', initialize);



//window.onload = rotate;
//Create an array of images, and cycle through the array over time.

var imageID = 0;
var images = ["url(img/banner/banner-1.jpg)", "url(img/banner/banner-2.jpg)", "url(img/banner/banner-3.jpg)", "url(img/banner/banner-4.jpg)"];


function rotate() {
    //console.log("entered rotate");
    imageID++;
    if (imageID === 4) imageID = 0;
    document.getElementById("header").backgroundImage = images[imageID];
    //console.log(imageID);
    setTimeout(rotate, 10 * 1000);
}
