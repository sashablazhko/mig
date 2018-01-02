jQuery(function($) {

  var $body = $('body'),
    $wrapper = $('.body-innerwrapper'),
    $toggler = $('#offcanvas-toggler'),
    $close = $('.close-offcanvas'),
    $offCanvas = $('.offcanvas-menu');

  $toggler.on('click', function(event){
    event.preventDefault();
    stopBubble (event);
    setTimeout(offCanvasShow, 50);
  });

  $close.on('click', function(event){
    event.preventDefault();
    offCanvasClose();
  });

  var offCanvasShow = function(){
    $body.addClass('offcanvas');
    $wrapper.on('click',offCanvasClose);
    $close.on('click',offCanvasClose);
    $offCanvas.on('click',stopBubble);

  };

  var offCanvasClose = function(){
    $body.removeClass('offcanvas');
    $wrapper.off('click',offCanvasClose);
    $close.off('click',offCanvasClose);
    $offCanvas.off('click',stopBubble);
  };

  var stopBubble = function (e) {
    e.stopPropagation();
    return true;
  };

  //Mega Menu
  $('.sp-megamenu-wrapper').parent().parent().css('position','static').parent().css('position', 'relative');
  $('.sp-menu-full').each(function(){
    $(this).parent().addClass('menu-justify');
  });

  //Sticky Menu
  $(document).ready(function(){
    $("body.sticky-header").find('#sp-header').sticky({topSpacing:0})
  });

  //Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  $(document).on('click', '.sp-rating .star', function(event) {
    event.preventDefault();

    var data = {
      'action':'voting',
      'user_rating' : $(this).data('number'),
      'id' : $(this).closest('.post_rating').attr('id')
    };

    var request = {
      'option' : 'com_ajax',
      'plugin' : 'helix3',
      'data'   : data,
      'format' : 'json'
    };

    $.ajax({
      type   : 'POST',
      data   : request,
      beforeSend: function(){
        $('.post_rating .ajax-loader').show();
      },
      success: function (response) {
        var data = $.parseJSON(response.data);

        $('.post_rating .ajax-loader').hide();

        if (data.status == 'invalid') {
          $('.post_rating .voting-result').text('You have already rated this entry!').fadeIn('fast');
        }else if(data.status == 'false'){
          $('.post_rating .voting-result').text('Somethings wrong here, try again!').fadeIn('fast');
        }else if(data.status == 'true'){
          var rate = data.action;
          $('.voting-symbol').find('.star').each(function(i) {
            if (i < rate) {
              $( ".star" ).eq( -(i+1) ).addClass('active');
            }
          });

          $('.post_rating .voting-result').text('Thank You!').fadeIn('fast');
        }

      },
      error: function(){
        $('.post_rating .ajax-loader').hide();
        $('.post_rating .voting-result').text('Failed to rate, try again!').fadeIn('fast');
      }
    });
  });
  $('.sppb-tak-tour-title').each(function() {
    var word = $(this).html();
    var index = word.indexOf(' ');
    if(index == -1) {
      index = word.length;
    }
    $(this).html('<span>' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
  });

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
    slidesToScroll: 2
  });

  $('.sec16-slid').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1
  });

//  sec6 переключение вкладок desktop
  $('.sec6-tab').on('click', function(e) {
    e.preventDefault();
    $('.sec6-tab').each(function(indx, element){
      $(element).removeClass('sec6-tab--active');
    });
    $(this).addClass('sec6-tab--active');
  });

//  END sec6 переключение вкладок desktop

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

//  calculator

  $('input[name="salary"]').val(currentSalary);
  calculatePercent();

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

  $('input[name="radio-tax"]').on('click', function(e) { //'click change'
    tax = $('input[name="radio-tax"]:checked').val();
    changeSalary();
    if (tax == 1) {
      $('input[name="radio-rate"]').attr('disabled', false);
    } else {
      $('input[name="radio-rate"]').first().prop('checked', true);
      $('input[name="radio-rate"]').attr('disabled', true);
    }
    calculatePercent();
  });

  $('input[name="radio-national"]').on('click', function(e) {
    national = $('input[name="radio-national"]:checked').val();
    changeSalary();
    calculatePercent();
  });

  $('input[name="radio-type"]').on('click', function(e) {
    type = $('input[name="radio-type"]:checked').val();
    changeSalary();
    calculatePercent();
  });

  $('input[name="radio-region"]').on('click', function(e) {
    region = $('input[name="radio-region"]:checked').val();
    changeSalary();
    calculatePercent();
  });

  $('input[name="radio-rate"]').on('click', function(e) {
    rate = $('input[name="radio-rate"]:checked').val();
    changeSalary();
    calculatePercent();
  });

  //когда меняется поле amount
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

  //когда меняется поле salary
  //setup before functions
  var typingTimer;                //timer identifier
  var doneTypingInterval = 2000;  //time in ms, 2 second for example
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
      console.log('cant be less than MPOT');
    } else {
      calculatePercent();

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
var MPOTMoskow = 18742;
var MPOTObl = 13750;
var salaryYCHDedault = 5000;
var priceMIG = 2000;
var economyFOT = 5000;
var currentSalary = MPOTMoskow;
var minSalary = MPOTMoskow;
var amountCoef = 1;
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
  // console.log(tax = $('input[name="radio-tax"]:checked').val());
  // console.log(national = $('input[name="radio-national"]:checked').val());
  // console.log(type = $('input[name="radio-type"]:checked').val());
  // console.log(region = $('input[name="radio-region"]:checked').val());
  // console.log(rate = $('input[name="radio-rate"]:checked').val());
  // console.log(amount = $('input[name="amount"]').val());
  // console.log(salary = $('input[name="salary"]').val());

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
var line1 = new ProgressBar.Line('#progress4', {
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
var line3 = new ProgressBar.Line('#progress6', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e72530',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '18px'}
});

