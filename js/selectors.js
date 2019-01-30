function paragraphSelector(){
  var elements = $(`p`);
  return elements;
}

function lastImageSelector(){
  var image = $(`pics`);
  const index = image.length;
  return image[index];
}