$('#footer').click(function() {
  $('.container').css('background-image', 'url(images/gradient.png)')
  $('.container').css('background-size', '100% 60px')
  $('html').css('background-image', 'none')
  $('html').css('color', 'black')
  $('#image2').remove()
  $('#image3').remove()
  $('#image4').remove()
  $('.footer').remove()

})
