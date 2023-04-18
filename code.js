onEvent("slider1", "change", function( ) {
  for (var i = 1; i < getNumber("slider1"); i++) {
    penUp();
    moveTo(177, 277);
    penDown();
    penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
    penWidth(1);
    moveForward(i);
    turnRight(getNumber("slider2"));
    hide();
  }
});
onEvent("button1", "click", function( ) {
  penColor(getProperty("screen1", "background-color"));
  dot(1000);
});
