$('#footer').click(function() {
  $('.container').css('background-image', 'url(images/gradient.png)')
  $('.container').css('background-size', '100% 60px')
  $('html').css('background-image', 'none')
  $('html').css('color', 'black')
  $('#image-test').remove()
  $('.social').remove()
  $('.footer').remove()
  $('.headers').remove()
  $($('.item')[1]).remove()


})

$('#image1').click(function() {
  $('.container').removeAttr('style')
  $('html').removeAttr('style')

})
