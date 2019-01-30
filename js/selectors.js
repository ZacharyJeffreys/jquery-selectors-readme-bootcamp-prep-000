function paragraphSelector(){
  var elements = $(`p`);
  return elements;
}

function lastImageSelector(){
  var image = $(`pic-list`);
  const index = image.legth;
  return image[index];
}