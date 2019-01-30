function paragraphSelector(){
  var elements = $(`p`);
  return elements;
}

function lastImageSelector(){
  var image = $(`img`);
  const index = image.length;
  return image[index];
}