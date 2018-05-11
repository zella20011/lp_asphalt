$(document).ready(function () {
	$('.order .right form .phone').inputmask({
		"mask": "+7(999) 999-9999",
		//"onincomplete": function(){ alert('Ведите номер полносью'); },
	});
	$('.modal-call form .phone').inputmask({
		"mask": "+7(999) 999-9999",
		"onincomplete": function(){ alert('Ведите номер полносью'); },
	});
	$('.modal-order form .phone').inputmask({
		"mask": "+7(999) 999-9999",
		"onincomplete": function(){ alert('Ведите номер полносью'); },
	});

	$("header nav").on("click","a", function (event) {
	   event.preventDefault();
	   var id  = $(this).attr('href'),
	   	top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);
	});
	
	$(document).on('click','.price .type .asp',function(){
		self = $(this);
		self.closest('ul').find('li').removeClass('active');
		self.addClass('active');
		self.closest('.center').children('div').css('display', 'none');
		self.closest('.center').find('.asphalt').css('display', 'block');

	});
	$(document).on('click','.price .type .bet',function(){
		self = $(this);
		self.closest('ul').find('li').removeClass('active');
		self.addClass('active');
		self.closest('.center').children('div').css('display', 'none');
		self.closest('.center').find('.concrete').css('display', 'block');
	});

	

	/*$(document).on('click','.asphalt .list .colum',function(){
		//$(this).closest('.list').find('li').removeClass('active');
		//$(this).closest('.list').find('div').removeClass('hover');
		$(this).toggleClass('active');//.addClass('active');
		$(this).next().slideToggle(500).addClass('hover');
	});
	$(document).on('click','.concrete .list .colum',function(){
		//$(this).closest('.list').find('li').removeClass('active');
		//$(this).closest('.list').find('div').removeClass('hover');
		$(this).toggleClass('active');//.addClass('active');
		$(this).next().slideToggle(500).addClass('hover');
	});*/

	$('.asphalt .list .colum').click(function() {
    
    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.list');
    
    if (findArticle.is(':visible')) {
    	$(this).removeClass('active');
      findArticle.slideUp(500);
    }
    else {
    	findWrapper.find('>li').removeClass('active');
    	$(this).addClass('active');
      findWrapper.find('>div').slideUp(500);
      findArticle.slideDown(500);
    }
   });

	$('.concrete .list .colum').click(function() {
    
    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.list');
    
    if (findArticle.is(':visible')) {
    	$(this).removeClass('active');
      findArticle.slideUp(500);
    }
    else {
    	findWrapper.find('>li').removeClass('active');
    	$(this).addClass('active');
      findWrapper.find('>div').slideUp(500);
      findArticle.slideDown(500);
    }
   });





	$('#open-menu').click( function(event){
		event.preventDefault();
		$('#center .left').animate({left: "0"},800);
		$('.overlay-menu').fadeIn(400).css('display', 'block');
	});

	$('.close, .overlay-menu').click( function(){
		$('#center .left').animate({left: "-100%"},800);
		$('.overlay-menu').fadeIn(400).css('display', 'none');
	});


	//modal-call
	$('header .button-white').click(function(event) {
		event.preventDefault();
		$('.modal-call').fadeIn(400).css('display', 'block');
		$('.overlay').fadeIn(400).css('display', 'block');
	});
	$('.main-top .left .button').click(function(event){
		event.preventDefault();
		$('.modal-call').fadeIn(400).css('display', 'block');
		$('.overlay').fadeIn(400).css('display', 'block');
	});
	$('.price .center div ul div .mod-call').click(function(event){
		event.preventDefault();
		$('.modal-call').fadeIn(400).css('display', 'block');
		$('.overlay').fadeIn(400).css('display', 'block');
	});
	//modal-call-end
	//modal-order
	$('.price .center div ul div .mod-order').click(function(event){
		event.preventDefault();
		$('.modal-order').fadeIn(400).css('display', 'block');
		$('.overlay').fadeIn(400).css('display', 'block');
	});
	//modal-order end
	//modal close
	$('.close, .overlay').click( function(){
		$('.modal-call').fadeIn(400).css('display', 'none');
		$('.modal-order').fadeIn(400).css('display', 'none');
		$('.overlay').fadeIn(400).css('display', 'none');
	});
	//modal close end


	$(document).on('submit','.form-order-big',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-big.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.modal-call').fadeIn(400).css('display', 'block');
                        $('.modal-call .block').css('display', 'none');
                        $('.overlay').fadeIn(400).css('display', 'block');
                        $('.modal-call .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.modal-call').fadeIn(400).css('display', 'none');
                        	$('.overlay').fadeIn(400).css('display', 'none');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });
	$(document).on('submit','.form-call',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-call.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.modal-call .block').css('display', 'none');
                        $('.modal-call .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.modal-call .sucsses').css('display', 'none');
                        	$('.modal-call .block').css('display', 'block');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });
	$(document).on('submit','.form-order',function(e){
      e.preventDefault();
      form = $(this);
       $.ajax({
                    url: 'ajax-order.php',
                    data: form.serialize(),
                    type: "post",
                    dataType: "json",
                    success: function (resp) {
                        console.log(resp);
                        form[0].reset();
                        $('.modal-order .block').css('display', 'none');
                        $('.modal-order .sucsses').css('display', 'block');
                        setTimeout(function () {
                        	$('.modal-order .sucsses').css('display', 'none');
                        	$('.modal-order .block').css('display', 'block');
                        },3000);
                                //$('#success').modal('show');
                                //setTimeout(function () {
                                  //  $('#success').modal('hide');
                               // },3000);
                    }
              });
  });

});