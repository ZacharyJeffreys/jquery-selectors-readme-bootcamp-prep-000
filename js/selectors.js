function paragraphSelector(){
  var elements = $(`p`);
  return elements;
}

function lastImageSelector(){
  var image = $(`pics`);
  const index = image.legth;
  return image[index];
}