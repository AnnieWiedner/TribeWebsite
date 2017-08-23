$('#footer').click(function() {
  $('.container').css('background-image', 'url(images/gradient.png)')
  $('.container').css('background-size', '100% 60px')
  $('html').css('background-image', 'none')
  $('html').css('color', 'black')
  $('#image2').remove()
  $('.logos').remove()
  $('.social').remove()
  $('.footer').remove()
  $('.headers').remove()
  var nav = $('<div id="nav"></div>')
  $('.container').append(nav)
  var terms =  $('<div class="nav-item" id="terms">Terms of Service</div>')
  var privacy =  $('<div class="nav-item" id="privacy">Privacy Policy</div>')
  var community =  $('<div class="nav-item" id="community">Community Guidelines</div>')
  var amendment =  $('<div class="nav-item" id="ammendment">Amendment</div>')
  var logo = $('<div id="image-item" class="left nav-item"><img src="images/logo-2.png"/></div>')
  $('#nav').append(logo)
  $('#nav').append(terms)
  $('#nav').append(privacy)
  $('#nav').append(community)
  $('#nav').append(amendment)


})

$('#image1').click(function() {
  $('.container').removeAttr('style')
  $('html').removeAttr('style')

})
