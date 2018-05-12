
var boxText = ['RED', 'BLUE', 'GREEN'];

var boxColor = ['red', 'green', 'blue'];

exports.getBoxText = function(){
    var idx = Math.floor(Math.random() * boxText.length);
    return boxText[idx];
}

exports.getBoxColor = function(){
    var idx = Math.floor(Math.random() * boxColor.length);
    return boxColor[idx];
}