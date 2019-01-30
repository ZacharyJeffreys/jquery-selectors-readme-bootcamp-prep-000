function paragraphSelector(){
  var elements = $(`p`);
  return elements;
}

function lastImageSelector(){
  var image = $(`#img`);
  const index = image.length - 1 
  return image[index];
}