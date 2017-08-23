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
  var nav = $('<nav id="nav"></nav>')
  var logo = $('<div id="image-item" class="left"><img src="images/logo-2.png"/></div>')
  $('.container').append(nav)
  $('#nav').append(logo)
  var input = $('<input type="checkbox" id="checkbox-toggle">')
  $('#nav').append(input)
  var label = $('<label id="label" for="checkbox-toggle"></label>')
  $('#nav').append(label)
  var ul = $('<ul id="menu"></ul>')
  $('#label').append(ul)

  var terms =  $('<li class="nav-item selected" id="terms"><a href="#">Terms of Service</a></li>')
  var privacy =  $('<li class="nav-item" id="privacy"><a href="#">Privacy Policy</a></li>')
  var community =  $('<li class="nav-item" id="community"><a href="#">Community Guidelines</a></li>')
  var amendment =  $('<li class="nav-item" id="ammendment"><a href="#">Amendment</a></li>')

  $('#menu').append(terms)
  $('#menu').append(privacy)
  $('#menu').append(community)
  $('#menu').append(amendment)

  var span = $('<span class="toggle">☰</span>')

  $('#label').append(span)

  var content = $('<div id="content"></div>')
  $('body').append(content)
  var termsHeader = $('<div class="tac"><h1 id="termsHeaders">Terms of Service</h1></div>')
  var termsSubheader = $('<h3 id="termsSubheaders">If you live in the United States, you are agreeing to Tribe’s Terms of Service</h3>')
  $('#content').append(termsHeader)
  $('.tac').append(termsSubheader)

  var details = $("<div id='paragraphs'><p class='details'>Welcome!</p><p class='details'>We&#39;re thrilled you&#39;ve decided to use Tribe and our other products and services, all of which we refer to simply as the &#39;Services.&#39;</p><p class='details'>We&#39;ve drafted these Terms of Service (which we call the &#39;Terms&#39;) so you’ll know the rules that govern our relationship with you. Although we have tried our best to strip the legalese from the Terms, there are places where these Terms may still read like a traditional contract. There&#39;s a good reason for that: These Terms do indeed form a legally binding contract between you and Snap Inc. So please read them carefully.</p><p class='details'>By using the Services, you agree to the Terms. Of course, if you don’t agree with them, then don&#39;t use the Services.</p><p class='details'>ARBITRATION NOTICE: THESE TERMS CONTAIN AN ARBITRATION CLAUSE A LITTLE LATER ON. EXCEPT FOR CERTAIN TYPES OF DISPUTES MENTIONED IN THAT ARBITRATION CLAUSE, YOU AND SNAP INC. AGREE THAT DISPUTES BETWEEN US WILL BE RESOLVED BY MANDATORY BINDING ARBITRATION, AND YOU AND SNAP INC. WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p><p class='details'>1. Who Can Use the Services</p><p class='details'>No one under 13 is allowed to create an account or use the Services. We may offer additional Services with additional terms that may require you to be even older to use them. So please read all terms carefully.</p><p class='details'>By using the Services, you state that:</p></div>")

  $('#content').append(details)



})

$('#image1').click(function() {
  $('.container').removeAttr('style')
  $('html').removeAttr('style')

})
