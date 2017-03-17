/*function drawAtBaseSheet(graphic, idx, atX, atY) {
  canvasContext.save(); 
  canvasContext.translate(atX, atY);
  canvasContext.drawImage(graphic,
    idx * PLAYER_W, 0,
    PLAYER_W, PLAYER_H,
    -PLAYER_W/4, -PLAYER_H,
    PLAYER_W, PLAYER_H);
  canvasContext.restore();
}*/

function drawAtBaseSheetSprite(graphic, idx, atX, atY) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.drawImage(graphic,
    idx * PLAYER_W, 0,
    PLAYER_W, PLAYER_H,
    -PLAYER_W/4, -PLAYER_H,
    PLAYER_W, PLAYER_H);
  canvasContext.restore();
}

function drawBallAtBaseSheetSprite(graphic, idx, atX, atY) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.drawImage(graphic,
    idx * BALL_W, 0,
    BALL_W, BALL_H,
    -BALL_W/4, -BALL_H,
    BALL_W, BALL_H);
  canvasContext.restore();
}

function drawBitmapCenteredWithRotation(useBitmap, atX,atY, withAng) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(useBitmap, -useBitmap.width/2, -useBitmap.height/2);
  canvasContext.restore();
}

function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY, withAngle, atScale) {
  if(atScale == undefined) {
    atScale = 1.0;
  }
  scaledContext.save(); // allows us to undo translate movement and rotate spin
  //var parPt = worldCoordToParCoord( atX, atY );
  scaledContext.translate(atX,atY); // sets the point where our graphic will go
  var scaleExagg = atScale;
  scaledContext.scale(scaleExagg,scaleExagg);
  scaledContext.rotate(withAngle); // sets the rotation
  scaledContext.drawImage(graphic,-graphic.width,-graphic.height); // TODO: REMOVED /2 ON WIDTH AND HEIGHT BECAUSE THIS.X FOR P1 IS ALREADY CENTERED AT THIS.RESET
  scaledContext.restore(); // undo the translation movement and rotation since save()
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorCircle(centerX,centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX,centerY, 10, 0,Math.PI*2, true);
  canvasContext.fill();
}

function colorText(showWords, textX,textY, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.font="30px Verdana";
  canvasContext.fillText(showWords, textX, textY);
}

function drawBallAtBaseSheet(graphic, idx, atX, atY) {
  canvasContext.save(); 
  var dimPerFrame = graphic.height;
  canvasContext.translate(atX-Math.floor(dimPerFrame/2),
                          atY-Math.floor(dimPerFrame*1.2));
  canvasContext.drawImage(graphic,
    idx * BALL_W, 0,
    BALL_W, BALL_H,
    0, 0,
    BALL_W, BALL_H);
  canvasContext.restore();
}

function drawPlayerAtBaseSheet(graphic, idx, atX, atY) {
  canvasContext.save(); 
  var dimPerFrame = graphic.height;
  canvasContext.translate(atX-dimPerFrame/2,
                          atY-dimPerFrame*1.2);
  canvasContext.drawImage(graphic,
    idx * PLAYER_W, 0,
    PLAYER_W, PLAYER_H,
    0, 0,
    PLAYER_W, PLAYER_H);
  canvasContext.restore();
}

function drawPlayerAtBaseSheet_p1_shot_top_right(graphic, idx, atX, atY) {
  canvasContext.save(); 
  var dimPerFrame = graphic.height;
  canvasContext.translate(atX-dimPerFrame/2,
                          atY-dimPerFrame/2);
  canvasContext.drawImage(graphic,
    idx * PLAYER_W, 0,
    PLAYER_W, PLAYER_H,
    0, 0,
    PLAYER_W, PLAYER_H);
  canvasContext.restore();
}
