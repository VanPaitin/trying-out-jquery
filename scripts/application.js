$(document).ready(function () {
  generateDivs(16);
  $('select').on("change", function() {
    var mode = $('select').val();
    switch(mode) {
      case "colorful":
        randomColor();
        break;
      case "normal":
        normalBehaviour();
        break;
      case "paint":
        paintGrid()
        break;
      default:
        console.log("Nothing to do");
    }
  });
  normalBehaviour()
  $('button').on('click', getNumber)
});

function randomColor() {
  var colors = ["#FAEBD7", "#00FFFF", "#7FFFD4", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#FF7F50", "#6495ED", "#DC143C", "#A9A9A9", "#006400", "#8B008B", "  #FF8C00", "#8B0000", "#FF1493", " #1E90FF", " #228B22", "#FF00FF", "#FFD700", " #ADFF2F", "#FF0000"];
  $('.container').off().on('mouseenter', '.child-div', function() {
    resetOpacity(this);
    $(this).animate({'background-color': colors[Math.floor(Math.random() * colors.length)]}, 'fast')
  });
}

function normalBehaviour() {
  $('.container').off().on('mouseenter', '.child-div', function() {
    resetOpacity(this);
    $(this).animate({'background-color': $('#pen-color').val()}, 'fast')
  });
  $('.container').on('mouseleave', '.child-div', function() {
    $(this).animate({'background-color': '#E6E6E6'}, 'slow')
  });
}

function paintGrid() {
  $('.child-div').css({"opacity": "0", "background-color": $('#pen-color').val()})
  $('.container').off().on('mouseenter', '.child-div', function() {
    $(this).css({'opacity': +$(this).css('opacity') + 0.1,
                 "background-color": $('#pen-color').val()})
  });
  $('button').on('click', function() {
    $('.child-div').css({"opacity": "0", "background-color": $('#pen-color').val()})
  })
}

function generateDivs(numberOfRows) {
  var size = $('.container').height();
  var childHeight = size/numberOfRows
  $('.container').empty()
  for (var i = 1; i <= (numberOfRows * numberOfRows); i++) {
    $('<div class="child-div"></div>').appendTo('.container')
  }
  $('.child-div').css({"height": childHeight + "px",
                       "width": childHeight + "px"})
}

function getNumber() {
  var number = prompt("Enter the number of rows you want");
  if (isNaN(parseInt(number))) {
    number = 16
  } else if (parseInt(number) > 100) {
    number = 100
  } else if (parseInt(number) < 1) {
    number = 1
  } else {
    number = parseInt(number);
  }
  generateDivs(number)
}

function resetOpacity(element) {
  $(element).css("opacity", 1);
}
