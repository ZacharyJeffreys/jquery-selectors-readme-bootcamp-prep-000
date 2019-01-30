function paragraphSelector(){
  var elements = $(`p`);
  return elements;
}

function lastImageSelector(){
  var image = $(`div img: :last-of-type`);
  return image;
}