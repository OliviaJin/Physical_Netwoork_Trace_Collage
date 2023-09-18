
const access_key = 'pk.eyJ1Ijoib2xpdmlhamluIiwiYSI6ImNsbW10aXYzZTBtbDkydm13dHRkcGR4NHAifQ.GHPhSYYmMhKWliG11KSp-w';
const style = "mapbox://styles/oliviajin/clmmr4ktp04lp01qi9bczaj3r";

const options = {  
  lat: 55.615,
  lng: 12.421,
  zoom: 13,
  style: style,
};

const mappa = new Mappa('MapboxGL', access_key);  
let myMap;

function setup() {  
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(drawPoint);

}

function draw() {
    clear();
    var pos = myMap.latLngToPixel(40.708,-74.015)
    ellipse(pos.x, pos.y, 200, 200);
    fill(200, 100, 100);
}

//function drawPoint(){
//    clear();
//    var pos = myMap.latLngToPixel(40.708,-74.015)
//    ellipse(pos.x, pos.y, 200, 200);
//    fill(200, 100, 100);
 // }

