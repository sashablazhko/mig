jQuery(function($) {

  // var $body = $('body'),
  //   $wrapper = $('.body-innerwrapper'),
  //   $toggler = $('#offcanvas-toggler'),
  //   $close = $('.close-offcanvas'),
  //   $offCanvas = $('.offcanvas-menu');
  //
  // $toggler.on('click', function(event){
  //   event.preventDefault();
  //   stopBubble (event);
  //   setTimeout(offCanvasShow, 50);
  // });
  //
  // $close.on('click', function(event){
  //   event.preventDefault();
  //   offCanvasClose();
  // });
  //
  // var offCanvasShow = function(){
  //   $body.addClass('offcanvas');
  //   $wrapper.on('click',offCanvasClose);
  //   $close.on('click',offCanvasClose);
  //   $offCanvas.on('click',stopBubble);
  //
  // };
  //
  // var offCanvasClose = function(){
  //   $body.removeClass('offcanvas');
  //   $wrapper.off('click',offCanvasClose);
  //   $close.off('click',offCanvasClose);
  //   $offCanvas.off('click',stopBubble);
  // };
  //
  // var stopBubble = function (e) {
  //   e.stopPropagation();
  //   return true;
  // };
  //
  // //Mega Menu
  // $('.sp-megamenu-wrapper').parent().parent().css('position','static').parent().css('position', 'relative');
  // $('.sp-menu-full').each(function(){
  //   $(this).parent().addClass('menu-justify');
  // });
  //
  // //Sticky Menu
  // $(document).ready(function(){
  //   $("body.sticky-header").find('#sp-header').sticky({topSpacing:0})
  // });
  //
  // //Tooltip
  // $('[data-toggle="tooltip"]').tooltip();
  //
  // $(document).on('click', '.sp-rating .star', function(event) {
  //   event.preventDefault();
  //
  //   var data = {
  //     'action':'voting',
  //     'user_rating' : $(this).data('number'),
  //     'id' : $(this).closest('.post_rating').attr('id')
  //   };
  //
  //   var request = {
  //     'option' : 'com_ajax',
  //     'plugin' : 'helix3',
  //     'data'   : data,
  //     'format' : 'json'
  //   };
  //
  //   $.ajax({
  //     type   : 'POST',
  //     data   : request,
  //     beforeSend: function(){
  //       $('.post_rating .ajax-loader').show();
  //     },
  //     success: function (response) {
  //       var data = $.parseJSON(response.data);
  //
  //       $('.post_rating .ajax-loader').hide();
  //
  //       if (data.status == 'invalid') {
  //         $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
  //       }else if(data.status == 'false'){
  //         $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
  //       }else if(data.status == 'true'){
  //         var rate = data.action;
  //         $('.voting-symbol').find('.star').each(function(i) {
  //           if (i < rate) {
  //             $( ".star" ).eq( -(i+1) ).addClass('active');
  //           }
  //         });
  //
  //         $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
  //       }
  //
  //     },
  //     error: function(){
  //       $('.post_rating .ajax-loader').hide();
  //       $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
  //     }
  //   });
  // });
  // $('.sppb-tak-tour-title').each(function() {
  //   var word = $(this).html();
  //   var index = word.indexOf(' ');
  //   if(index == -1) {
  //     index = word.length;
  //   }
  //   $(this).html('<span>' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
  // });

  $('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 300
  });
  $('.sec1-slid').slick({
    dots: false,
    infinite: true,
    speed: 300
  });
  $('.sec3-slid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.content-form-inp').inputmask({"mask": "8 (999) 999-99-99"}); //specifying options
  $('.sec4-cont-block-phone-inp').inputmask({"mask": "8 (999) 999-99-99"});

  $('#menu').slicknav({
    prependTo: '.sp-megamenu-wrapper'
  });

  $('.sec12-item-img-slid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.sec14-left-slid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.sec14-right-slid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.sec16-slid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//  slider for news page
  $('.news-item-img-slid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
//  END slider for news page

//  sec6 переключение вкладок desktop
  $('.sec6-tab').on('click', function(e) {
    e.preventDefault();
    $('.sec6-tab').each(function(indx, element){
      $(element).removeClass('sec6-tab--active');
    });
    $(this).addClass('sec6-tab--active');

    var clickId = $(this).data('id');
    $('.sec6-cont').each(function(indx, element){
      if (indx == clickId)
        $(element).addClass('sec6-cont--active');
      else {
        $(element).removeClass('sec6-cont--active');
      }
    });
  });
//  END sec6 переключение вкладок desktop
//  sec6 переключение вкладок mobile
  $('#sec6-sel').on('change', function() {
    var selId = $("#sec6-sel :selected").val();
    $('.sec6-cont').each(function(indx, element){
      if (indx == selId)
        $(element).addClass('sec6-cont--active');
      else {
        $(element).removeClass('sec6-cont--active');
      }
    });
  });
//  END sec6 переключение вкладок mobile

//  sec15 переключение вкладок desktop
  $('.sec15-cont-left-list-item-link').on('click', function(e){
    e.preventDefault();

    $('.sec15-cont-left-list-item-link').each(function(){
      $(this).removeClass('sec15-cont-left-list-item-link--active');
    });
    $(this).addClass('sec15-cont-left-list-item-link--active');

    var clickId = $(this).data('id');
    $('.sec15-cont-right').each(function(indx, element){
      if (indx == clickId)
        // $(this).removeClass('sec15-cont-left-list-item-link--active');
        $(element).addClass('sec15-cont-right--active');
      else {
        $(element).removeClass('sec15-cont-right--active');
      }
    });


  });
//  END sec15 переключение вкладок desktop

//  sec15 переключение вкладок mobile
  enquire.register("(max-width: 992px)", {

    match : function() {
      $('.sec15-cont-left-list-item-link').each(function(){
        $(this).removeClass('sec15-cont-left-list-item-link--active');
      });

      $('.sec15-cont-left-list-item-link').on('click', function(e){
        e.preventDefault();

        $(this).siblings('.sec15-cont-left-list-item-mobile').toggleClass('sec15-cont-left-list-item-mobile--active');

      });

    },

    unmatch : function() {

    }

  });
//  END sec15 переключение вкладок mobile

  $('.label-tooltip2-text2-close2').on('click', function () {
    $('.label-tooltip2-text2-wrap2').css({
      "visibility":"hidden",
      "opacity":"0"
    });
  });
  $('.label-tooltip2-text2-close22').on('click', function () {
    $('.label-tooltip2-text2-wrap22').css({
      "visibility":"hidden",
      "opacity":"0"
    });
  });

//  calculator

  $('input[name="salary"]').val(currentSalary);
  $('input[name="salary2"]').val(currentSalary2);
  calculatePercent();
  calculatePercent2();

  function changeSalary() {
    amount = $('input[name="amount"]').val();
    if (tax == 1 && rate == 3 && region == 1) {
      currentSalary = MPOTMoskow * 0.25 * amount;
      minSalary = currentSalary;
      $('input[name="salary"]').val(currentSalary);
    } else if (tax == 1 && rate == 3 && region == 2) {
      currentSalary = MPOTObl * 0.25 * amount;
      minSalary = currentSalary;
      $('input[name="salary"]').val(currentSalary);
    } else if (tax == 1 && rate == 2 && region == 1) {
      currentSalary = MPOTMoskow * 0.5 * amount;
      minSalary = currentSalary;
      $('input[name="salary"]').val(currentSalary);
    } else if (tax == 1 && rate == 2 && region == 2) {
      currentSalary = MPOTObl * 0.5 * amount;
      minSalary = currentSalary;
      $('input[name="salary"]').val(currentSalary);
    } else if (tax == 1 && rate == 1 && region == 1) {
      currentSalary = MPOTMoskow * amount;
      minSalary = currentSalary;
      $('input[name="salary"]').val(currentSalary);
    } else if (tax == 1 && rate == 1 && region == 2) {
      currentSalary = MPOTObl * amount;
      minSalary = currentSalary;
      $('input[name="salary"]').val(currentSalary);
    } else if (tax == 2) {
      currentSalary = salaryYCHDedault;
      minSalary = 1;
      $('input[name="salary"]').val(currentSalary);
    }
  }

  function changeSalary2() {
    amount2 = $('input[name="amount2"]').val();
    if (tax2 == 1 && rate2 == 3 && region2 == 1) {
      currentSalary2 = MPOTMoskow2 * 0.25 * amount2;
      minSalary2 = currentSalary2;
      $('input[name="salary2"]').val(currentSalary2);
    } else if (tax2 == 1 && rate2 == 3 && region2 == 2) {
      currentSalary2 = MPOTObl2 * 0.25 * amount2;
      minSalary2 = currentSalary2;
      $('input[name="salary2"]').val(currentSalary2);
    } else if (tax2 == 1 && rate2 == 2 && region2 == 1) {
      currentSalary2 = MPOTMoskow2 * 0.5 * amount2;
      minSalary2 = currentSalary2;
      $('input[name="salary2"]').val(currentSalary2);
    } else if (tax2 == 1 && rate2 == 2 && region2 == 2) {
      currentSalary2 = MPOTObl2 * 0.5 * amount2;
      minSalary2 = currentSalary2;
      $('input[name="salary2"]').val(currentSalary2);
    } else if (tax2 == 1 && rate2 == 1 && region2 == 1) {
      currentSalary2 = MPOTMoskow2 * amount2;
      minSalary2 = currentSalary2;
      $('input[name="salary2"]').val(currentSalary2);
    } else if (tax2 == 1 && rate2 == 1 && region2 == 2) {
      currentSalary2 = MPOTObl2 * amount2;
      minSalary2 = currentSalary2;
      $('input[name="salary2"]').val(currentSalary2);
    } else if (tax2 == 2) {
      currentSalary2 = salaryYCHDedault2;
      minSalary2 = 1;
      $('input[name="salary2"]').val(currentSalary2);
    }
  }

  $('input[name="radio-tax"]').on('click', function(e) { //'click change'
    tax = $('input[name="radio-tax"]:checked').val();
    changeSalary();
    if (tax == 1) {
      $('input[name="radio-rate"]').prop('disabled', false);
    } else {
      $('input[name="radio-rate"]').first().prop('checked', true);
      $('input[name="radio-rate"]').prop('disabled', true);
    }
    calculatePercent();
  });
  $('input[name="radio-tax2"]').on('click', function(e) { //'click change'
    tax2 = $('input[name="radio-tax2"]:checked').val();
    changeSalary2();
    if (tax2 == 1) {
      $('input[name="radio-rate2"]').prop('disabled', false);
    } else {
      $('input[name="radio-rate2"]').first().prop('checked', true);
      $('input[name="radio-rate2"]').prop('disabled', true);
    }
    calculatePercent2();
  });

  $('input[name="radio-national"]').on('click', function(e) {
    national = $('input[name="radio-national"]:checked').val();
    changeSalary();
    calculatePercent();
  });
  $('input[name="radio-national2"]').on('click', function(e) {
    national2 = $('input[name="radio-national2"]:checked').val();
    changeSalary2();
    calculatePercent2();
  });

  $('input[name="radio-type"]').on('click', function(e) {
    type = $('input[name="radio-type"]:checked').val();
    changeSalary();
    calculatePercent();
  });
  $('input[name="radio-type2"]').on('click', function(e) {
    type2 = $('input[name="radio-type2"]:checked').val();
    changeSalary2();
    calculatePercent2();
  });

  $('input[name="radio-region"]').on('click', function(e) {
    region = $('input[name="radio-region"]:checked').val();
    changeSalary();
    calculatePercent();
  });
  $('input[name="radio-region2"]').on('click', function(e) {
    region2 = $('input[name="radio-region2"]:checked').val();
    changeSalary2();
    calculatePercent2();
  });

  $('input[name="radio-rate"]').on('click', function(e) {
    rate = $('input[name="radio-rate"]:checked').val();
    changeSalary();
    calculatePercent();
  });
  $('input[name="radio-rate2"]').on('click', function(e) {
    rate2 = $('input[name="radio-rate2"]:checked').val();
    changeSalary2();
    calculatePercent2();
  });

  //когда меняется поле amount tab1
  var typingTimerAmount;                //timer identifier
  var doneTypingIntervalAmount = 1000;  //time in ms, 1 second for example
  var $inputAmount = $('#amount');

//on keyup, start the countdown
  $inputAmount.on('keyup', function () {
    clearTimeout(typingTimerAmount);
    typingTimerAmount = setTimeout(doneTypingAmount, doneTypingIntervalAmount);
  });

//on keydown, clear the countdown
  $inputAmount.on('keydown', function () {
    clearTimeout(typingTimerAmount);
  });

//user is "finished typing," do something
  function doneTypingAmount () {
    amount = $('input[name="amount"]').val();
    amountEl = $('input[name="amount"]');
    if (amount < 1) {
      amountEl.val(1);
      amountCoef = 1;
    } else if (amount >= 1 && amount <= 10) {
      amountCoef = 1;
    } else if (amount >= 11 && amount <= 49) {
      amountCoef = 0.9;
    } else {
      amountCoef = 0.7;
    }
    changeSalary();
    calculatePercent();
  }
  //когда меняется поле amount tab2
  var typingTimerAmount2;                //timer identifier
  var doneTypingIntervalAmount2 = 1000;  //time in ms, 1 second for example
  var $inputAmount2 = $('#amount2');

//on keyup, start the countdown
  $inputAmount2.on('keyup', function () {
    clearTimeout(typingTimerAmount2);
    typingTimerAmount2 = setTimeout(doneTypingAmount2, doneTypingIntervalAmount2);
  });

//on keydown, clear the countdown
  $inputAmount2.on('keydown', function () {
    clearTimeout(typingTimerAmount2);
  });

//user is "finished typing," do something
  function doneTypingAmount2 () {
    amount2 = $('input[name="amount2"]').val();
    amountEl2 = $('input[name="amount2"]');
    if (amount2 < 1) {
      amountEl2.val(1);
      amountCoef2 = 1;
    } else if (amount2 >= 1 && amount2 <= 10) {
      amountCoef2 = 1;
    } else if (amount2 >= 11 && amount2 <= 49) {
      amountCoef2 = 0.9;
    } else {
      amountCoef2 = 0.7;
    }
    changeSalary2();
    calculatePercent2();
  }

  //когда меняется поле salary tab1
  //setup before functions
  var typingTimer;                //timer identifier
  var doneTypingInterval = 1000;  //time in ms, 1 second for example
  var $input = $('#salary');

//on keyup, start the countdown
  $input.on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });

//on keydown, clear the countdown
  $input.on('keydown', function () {
    clearTimeout(typingTimer);
  });

//user is "finished typing," do something
  function doneTyping () {
    currentSalary = $('input[name="salary"]').val();
    if (currentSalary < minSalary) {
      currentSalary = minSalary;
      changeSalary();
      calculatePercent();
      $('.label-tooltip2-text2-wrap2').css({
        "visibility":"visible",
        "opacity":"1"
      });
      // console.log('cant be less than MPOT');
    } else {
      calculatePercent();
    }

  }
  //когда меняется поле salary tab2
  //setup before functions
  var typingTimer2;                //timer identifier
  var doneTypingInterval2 = 1000;  //time in ms, 1 second for example
  var $input2 = $('#salary2');

//on keyup, start the countdown
  $input2.on('keyup', function () {
    clearTimeout(typingTimer2);
    typingTimer2 = setTimeout(doneTyping2, doneTypingInterval2);
  });

//on keydown, clear the countdown
  $input2.on('keydown', function () {
    clearTimeout(typingTimer2);
  });

//user is "finished typing," do something
  function doneTyping2 () {
    currentSalary2 = $('input[name="salary2"]').val();
    if (currentSalary2 < minSalary2) {
      currentSalary2 = minSalary2;
      changeSalary2();
      calculatePercent2();
      $('.label-tooltip2-text2-wrap22').css({
        "visibility":"visible",
        "opacity":"1"
      });
      // console.log('cant be less than MPOT');
    } else {
      calculatePercent2();
    }

  }


//  END calculator

});

// '1-1-1-1' (ОСН) - ЕАЭС (РФ) - Гражданско-правовой договр - (МОСКВА)
// '1-2-1-1' (ОСН) - НЕ ЕАЭС   - Гражданско-правовой договр - (МОСКВА)
// '1-1-2-1' (ОСН) - ЕАЭС (РФ) - Трудовой договор           - (МОСКВА)
// '1-2-2-1' (ОСН) - НЕ ЕАЭС   - Трудовой договор           - (МОСКВА)
// '1-1-1-2' (ОСН) - ЕАЭС (РФ) - Гражданско-правовой договр - (Московская область)
// '1-2-1-2' (ОСН) - НЕ ЕАЭС   - Гражданско-правовой договр - (Московская область)
// '1-1-2-2' (ОСН) - ЕАЭС (РФ) - Трудовой договор           - (Московская область)
// '1-2-2-2' (ОСН) - НЕ ЕАЭС   - Трудовой договор           - (Московская область)
// '2-1-1-1' (УСН) - ЕАЭС (РФ) - Гражданско-правовой договр - (МОСКВА)
// '2-2-1-1' (УСН) - НЕ ЕАЭС   - Гражданско-правовой договр - (МОСКВА)
// '2-1-2-1' (УСН) - ЕАЭС (РФ) - Трудовой договор           - (МОСКВА)
// '2-2-2-1' (УСН) - НЕ ЕАЭС   - Трудовой договор           - (МОСКВА)
// '2-1-1-2' (УСН) - ЕАЭС (РФ) - Гражданско-правовой договр - (Московская область)
// '2-2-1-2' (УСН) - НЕ ЕАЭС   - Гражданско-правовой договр - (Московская область)
// '2-1-2-2' (УСН) - ЕАЭС (РФ) - Трудовой договор           - (Московская область)
// '2-2-2-2' (УСН) - НЕ ЕАЭС   - Трудовой договор           - (Московская область)
var MPOTMoskow = 18742;
var MPOTMoskow2 = 18742;
var MPOTObl = 13750;
var MPOTObl2 = 13750;
var salaryYCHDedault = 5000;
var salaryYCHDedault2 = 5000;
var priceMIG = 2000;
var economyFOT = 5000;
var currentSalary = MPOTMoskow;
var currentSalary2 = MPOTMoskow2;
var minSalary = MPOTMoskow;
var minSalary2 = MPOTMoskow;
var amountCoef = 1;
var amountCoef2 = 1;

var percent = {
  '1-1-1-1': {
   'v1': 0.13,
   'v2': 0.22,
   'v3': 0,
   'v4': 0,
   'v5': 0.051,
   'v6': 0.18,
   'v7': priceMIG,
   'v8': 0.18,
   'v9': 0.18,
   'v10': 0.2
  },
  '1-2-1-1': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0,
    'v4': 0,
    'v5': 0,
    'v6': 0.18,
    'v7': priceMIG,
    'v8': 0.18,
    'v9': 0.18,
    'v10': 0.2
  },
  '1-1-2-1': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.029,
    'v4': 0.002,
    'v5': 0.051,
    'v6': 0.18,
    'v7': priceMIG,
    'v8': 0.18,
    'v9': 0.18,
    'v10': 0.2
  },
  '1-2-2-1': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.018,
    'v4': 0.002,
    'v5': 0,
    'v6': 0.18,
    'v7': priceMIG,
    'v8': 0.18,
    'v9': 0.18,
    'v10': 0.2
  },
  '1-1-1-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0,
    'v4': 0,
    'v5': 0.051,
    'v6': 0.18,
    'v7': priceMIG,
    'v8': 0.18,
    'v9': 0.18,
    'v10': 0.2
  },
  '1-2-1-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0,
    'v4': 0,
    'v5': 0,
    'v6': 0.18,
    'v7': priceMIG,
    'v8': 0.18,
    'v9': 0.18,
    'v10': 0.2
  },
  '1-1-2-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.029,
    'v4': 0.002,
    'v5': 0.051,
    'v6': 0.18,
    'v7': priceMIG,
    'v8': 0.18,
    'v9': 0.18,
    'v10': 0.2
  },
  '1-2-2-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.018,
    'v4': 0.002,
    'v5': 0,
    'v6': 0.18,
    'v7': priceMIG,
    'v8': 0.18,
    'v9': 0.18,
    'v10': 0.2
  },

  '2-1-1-1': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0,
    'v4': 0,
    'v5': 0.051,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  },
  '2-2-1-1': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0,
    'v4': 0,
    'v5': 0,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  },
  '2-1-2-1': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.029,
    'v4': 0.002,
    'v5': 0.051,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  },
  '2-2-2-1': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.018,
    'v4': 0.002,
    'v5': 0,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  },
  '2-1-1-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0,
    'v4': 0,
    'v5': 0.051,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  },
  '2-2-1-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0,
    'v4': 0,
    'v5': 0,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  },
  '2-1-2-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.029,
    'v4': 0.002,
    'v5': 0.051,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  },
  '2-2-2-2': {
    'v1': 0.13,
    'v2': 0.22,
    'v3': 0.018,
    'v4': 0.002,
    'v5': 0,
    'v6': 0,
    'v7': priceMIG,
    'v11': economyFOT
  }
};

var tax = 1; //Система налогообложения: (ОСН) (УСН)
var national = 1; //Гражданство сотрудника: ЕАЭС НЕ ЕАЭС РФ
var type = 1; //Вид договора: Гражданско-правовой договор Трудовой договор
var region = 1; //Местоположение объекта: Москва Московская область
var rate = 1; //Ставка сотрудника: 1 0.5 0.25
var amount = 1; //количество сотрудников:
var salary = 1; //Заработная плата:

// tab2
var tax2 = 1; //Система налогообложения: (ОСН) (УСН)
var national2 = 1; //Гражданство сотрудника: ЕАЭС НЕ ЕАЭС РФ
var type2 = 1; //Вид договора: Гражданско-правовой договор Трудовой договор
var region2 = 1; //Местоположение объекта: Москва Московская область
var rate2 = 1; //Ставка сотрудника: 1 0.5 0.25
var amount2 = 1; //количество сотрудников:
var salary2 = 1; //Заработная плата:

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

function calculatePercent() {
  tax = $('input[name="radio-tax"]:checked').val();
  national = $('input[name="radio-national"]:checked').val();
  type = $('input[name="radio-type"]:checked').val();
  region = $('input[name="radio-region"]:checked').val();
  rate = $('input[name="radio-rate"]:checked').val();
  amount = $('input[name="amount"]').val();
  salary = $('input[name="salary"]').val();

  var key = tax+'-'+national+'-'+type+'-'+region;

  var one = Math.round(currentSalary - (currentSalary * percent[key].v1));

  var two = Math.round((currentSalary * percent[key].v2)+(currentSalary * percent[key].v3)+(currentSalary * percent[key].v4)+(currentSalary * percent[key].v5));

  var threeTmp = one + (currentSalary * percent[key].v1)+(currentSalary * percent[key].v2)+(currentSalary * percent[key].v3)+(currentSalary * percent[key].v4)+(currentSalary * percent[key].v5);
  var three = Math.round(threeTmp + threeTmp * percent[key].v6);

  var four = Math.round(percent[key].v7 * amountCoef);

  var five, six;
  var one100, two100, three100, four100, five100, six100;
  if (tax == 1) {
    five = Math.round((threeTmp + percent[key].v7 * amountCoef) * percent[key].v10 + (threeTmp + percent[key].v7 * amountCoef) * percent[key].v9 - percent[key].v7* amountCoef * percent[key].v8 - percent[key].v7 * amountCoef);

    six = Math.round((five / three) * 100);

    one100 = Math.round(currentSalary);
    two100 = Math.round(threeTmp * percent[key].v6 + percent[key].v7* amountCoef * percent[key].v8);
    three100 = Math.round(three + percent[key].v7* amountCoef + percent[key].v7* amountCoef * percent[key].v8);
    four100 = Math.round(percent[key].v7* amountCoef + percent[key].v7* amountCoef * percent[key].v8);
    five100 = five;
    six100 = six;

  } else {
    five = 0;

    six = Math.round(100 - ((three + four) / (three + percent[key].v11)) * 100);

    one100 = +currentSalary + currentSalary * percent[key].v1;
    two100 = two + currentSalary * percent[key].v1;
    three100 = three + percent[key].v7* amountCoef;
    four100 = percent[key].v7* amountCoef;
    five100 = 1;
    six100 = six;

  }

  // console.log('One: ' + one + ' :: ' + one100);
  // console.log('Two: ' + two + ' :: ' + two100);
  // console.log('Three: ' + three + ' :: ' + three100);
  // console.log('Four: ' + four + ' :: ' + four100);
  // console.log('Five: ' + five + ' :: ' + five100);
  // console.log('Six: ' + six + ' :: ' + six100);

  var onePercent;
  if (one / one100 > 1){
    onePercent = 1;
  } else {
    onePercent = one / one100;
  }
  onePercent = onePercent.toFixed(2);
  $('#one-sum').text(one);
  circle1.animate(onePercent);

  var twoPercent;
  if (two / two100 > 1){
    twoPercent = 1;
  } else {
    twoPercent = two / two100;
  }
  twoPercent = twoPercent.toFixed(2);
  $('#two-sum').text(two);
  circle2.animate(twoPercent);

  var threePercent;
  if (three / three100 > 1){
    threePercent = 1;
  } else {
    threePercent = three / three100;
  }
  threePercent = threePercent.toFixed(2);
  $('#three-sum').text(three);
  circle3.animate(threePercent);

  var fourPercent;
  if (four / four100 > 1){
    fourPercent = 1;
  } else {
    fourPercent = four / four100;
  }
  fourPercent = fourPercent.toFixed(2);
  $('#four-sum').text(four);
  line1.animate(fourPercent);

  var fivePercent;
  if (five / five100 > 1){
    fivePercent = 1;
  } else {
    fivePercent = five / five100;
  }
  fivePercent = fivePercent.toFixed(2);
  $('#five-sum').text(five);
  line2.animate(fivePercent);

  var sixPercent;
  if (six / six100 > 1){
    sixPercent = 1;
  } else {
    sixPercent = six / six100;
  }
  sixPercent = sixPercent.toFixed(2);
  $('#six-sum').text(six);
  line3.animate(sixPercent);

}

function calculatePercent2() {
  tax2 = $('input[name="radio-tax2"]:checked').val();
  national2 = $('input[name="radio-national2"]:checked').val();
  type2 = $('input[name="radio-type2"]:checked').val();
  region2 = $('input[name="radio-region2"]:checked').val();
  rate2 = $('input[name="radio-rate2"]:checked').val();
  amount2 = $('input[name="amount2"]').val();
  salary2 = $('input[name="salary2"]').val();

  var key2 = tax2+'-'+national2+'-'+type2+'-'+region2;

  var one2 = Math.round(currentSalary2 - (currentSalary2 * percent[key2].v1));

  var two2 = Math.round((currentSalary2 * percent[key2].v2)+(currentSalary2 * percent[key2].v3)+(currentSalary2 * percent[key2].v4)+(currentSalary2 * percent[key2].v5));

  var threeTmp2 = one2 + (currentSalary2 * percent[key2].v1)+(currentSalary2 * percent[key2].v2)+(currentSalary2 * percent[key2].v3)+(currentSalary2 * percent[key2].v4)+(currentSalary2 * percent[key2].v5);
  var three2 = Math.round(threeTmp2 + threeTmp2 * percent[key2].v6);

  var four2 = Math.round(percent[key2].v7 * amountCoef2);

  var five2, six2;
  var one1002, two1002, three1002, four1002, five1002, six1002;
  if (tax2 == 1) {
    five2 = Math.round((threeTmp2 + percent[key2].v7 * amountCoef2) * percent[key2].v10 + (threeTmp2 + percent[key2].v7 * amountCoef2) * percent[key2].v9 - percent[key2].v7* amountCoef2 * percent[key2].v8 - percent[key2].v7 * amountCoef2);

    six2 = Math.round((five2 / three2) * 100);

    one1002 = Math.round(currentSalary2);
    two1002 = Math.round(threeTmp2 * percent[key2].v6 + percent[key2].v7* amountCoef2 * percent[key2].v8);
    three1002 = Math.round(three2 + percent[key2].v7* amountCoef2 + percent[key2].v7* amountCoef2 * percent[key2].v8);
    four1002 = Math.round(percent[key2].v7* amountCoef2 + percent[key2].v7* amountCoef2 * percent[key2].v8);
    five1002 = five2;
    six1002 = six2;

  } else {
    five2 = 0;

    six2 = Math.round(100 - ((three2 + four2) / (three2 + percent[key2].v11)) * 100);

    one1002 = +currentSalary2 + currentSalary2 * percent[key2].v1;
    two1002 = two2 + currentSalary2 * percent[key2].v1;
    three1002 = three2 + percent[key2].v7* amountCoef2;
    four1002 = percent[key2].v7* amountCoef2;
    five1002 = 1;
    six1002 = six2;

  }

  // console.log('One: ' + one2 + ' :: ' + one1002);
  // console.log('Two: ' + two2 + ' :: ' + two1002);
  // console.log('Three: ' + three2 + ' :: ' + three1002);
  // console.log('Four: ' + four2 + ' :: ' + four1002);
  // console.log('Five: ' + five2 + ' :: ' + five1002);
  // console.log('Six: ' + six2 + ' :: ' + six1002);

  var onePercent2;
  if (one2 / one1002 > 1){
    onePercent2 = 1;
  } else {
    onePercent2 = one2 / one1002;
  }
  onePercent2 = onePercent2.toFixed(2);
  $('#one-sum2').text(one2);
  circle12.animate(onePercent2);

  var twoPercent2;
  if (two2 / two1002 > 1){
    twoPercent2 = 1;
  } else {
    twoPercent2 = two2 / two1002;
  }
  twoPercent2 = twoPercent2.toFixed(2);
  $('#two-sum2').text(two2);
  circle22.animate(twoPercent2);

  var threePercent2;
  if (three2 / three1002 > 1){
    threePercent2 = 1;
  } else {
    threePercent2 = three2 / three1002;
  }
  threePercent2 = threePercent2.toFixed(2);
  $('#three-sum2').text(three2);
  circle32.animate(threePercent2);

  var fourPercent2;
  if (four2 / four1002 > 1){
    fourPercent2 = 1;
  } else {
    fourPercent2 = four2 / four1002;
  }
  fourPercent2 = fourPercent2.toFixed(2);
  $('#four-sum2').text(four2);
  line12.animate(fourPercent2);

  var fivePercent2;
  if (five2 / five1002 > 1){
    fivePercent2 = 1;
  } else {
    fivePercent2 = five2 / five1002;
  }
  fivePercent2 = fivePercent2.toFixed(2);
  $('#five-sum2').text(five2);
  line22.animate(fivePercent2);

  var sixPercent2;
  if (six2 / six1002 > 1){
    sixPercent2 = 1;
  } else {
    sixPercent2 = six2 / six1002;
  }
  sixPercent2 = sixPercent2.toFixed(2);
  $('#six-sum2').text(six2);
  line32.animate(sixPercent2);

}

var circle1 = new ProgressBar.Circle('#progress1', {
  strokeWidth: 4,
  color: '#e72530',
  trailColor: '#fff',
  duration: 3000,
  easing: 'easeInOut',
  text: {
    value: 'руб'
  }
});
var circle12 = new ProgressBar.Circle('#progress12', {
  strokeWidth: 4,
  color: '#e72530',
  trailColor: '#fff',
  duration: 3000,
  easing: 'easeInOut',
  text: {
    value: 'руб'
  }
});
var circle2 = new ProgressBar.Circle('#progress2', {
  strokeWidth: 4,
  color: '#e72530',
  trailColor: '#fff',
  duration: 3000,
  easing: 'easeInOut',
  text: {
    value: 'руб'
  }
});
var circle22 = new ProgressBar.Circle('#progress22', {
  strokeWidth: 4,
  color: '#e72530',
  trailColor: '#fff',
  duration: 3000,
  easing: 'easeInOut',
  text: {
    value: 'руб'
  }
});
var circle3 = new ProgressBar.Circle('#progress3', {
  strokeWidth: 4,
  color: '#e72530',
  trailColor: '#fff',
  duration: 3000,
  easing: 'easeInOut',
  text: {
    value: 'руб'
  }
});
var circle32 = new ProgressBar.Circle('#progress32', {
  strokeWidth: 4,
  color: '#e72530',
  trailColor: '#fff',
  duration: 3000,
  easing: 'easeInOut',
  text: {
    value: 'руб'
  }
});
var line1 = new ProgressBar.Line('#progress4', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e72530',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '18px'}
});
var line12 = new ProgressBar.Line('#progress42', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e72530',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '18px'}
});
var line2 = new ProgressBar.Line('#progress5', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e72530',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '18px'}
});
var line22 = new ProgressBar.Line('#progress52', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e72530',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '18px'}
});
var line3 = new ProgressBar.Line('#progress6', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e72530',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '18px'}
});
var line32 = new ProgressBar.Line('#progress62', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e72530',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '18px'}
});

