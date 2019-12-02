'use strict';

var isMobileScreen = function isMobileScreen() {
  return document.body.clientWidth < 992;
};

var app = {
  hero: function () {
    $('.hero').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false
        }
      }] // fade: true
      // adaptiveHeight: true

    });
  } // validateContact: function () {
  //     const status = localStorage.getItem('lock-screen');
  //
  //     if(status) {
  //         $('body').addClass('un-lock');
  //         // $('.form-un-lock').hide();
  //     }
  //
  //     $.validator.addMethod('emailExt', function(value, element, param) {
  //         return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
  //     },'This field is invalid.');
  //     //validate form
  //     $('.form-un-lock').validate({
  //         highlight: function (element, errorClass, validClass) {
  //             $(element).closest('.form-group').addClass(errorClass).removeClass(validClass);
  //         },
  //         unhighlight: function (element, errorClass, validClass) {
  //             $(element).closest('.form-group').addClass(validClass).removeClass(errorClass);
  //         },
  //         rules: {
  //             name: {
  //                 required: true
  //             },
  //             subject: {
  //                 required: true
  //             },
  //             message: {
  //                 required: true
  //             },
  //
  //             email: {
  //                 required: true,
  //                 emailExt: true
  //             }
  //         },
  //         messages: {
  //             name: 'This field is required.',
  //             subject: 'This field is required.',
  //             message: 'This field is required.',
  //             email: {
  //                 required: 'This field is required.',
  //                 emailExt: 'This field is invalid.',
  //             },
  //
  //         },
  //         submitHandler: function(form) {
  //             $('#btn-submit').attr('disabled',true).text('Loading...');
  //             // return false;
  //             var data = {
  //                 name:$(form).find('#name').val(),
  //                 email: $(form).find('#email').val(),
  //                 subject: $(form).find('#subject').val(),
  //                 message: $(form).find('#message').val(),
  //             };
  //             $.ajax({
  //                 dataType: 'json',
  //                 method: 'POST',
  //                 url: 'https://hooks.zapier.com/hooks/catch/5795140/o2wpzi0/',
  //                 context: document.body,
  //                 data:data
  //             }).done(function(e) {
  //                 $('#btn-submit').attr('disabled',false).text('Contact us');
  //                 // $('body').addClass('un-lock');
  //                 // localStorage.setItem('lock-screen',true);
  //                 $('.alert-success').removeClass('hide');
  //                 setTimeout(function () {
  //                     $('.alert-success').addClass('hide');
  //                 },3000);
  //
  //             }).fail(function() {
  //                 $('.alert-danger').removeClass('hide');
  //                 $('#btn-submit').attr('disabled',false).text('Contact us');
  //             });
  //
  //         }
  //     });
  // },
  // common: function() {
  //     $( '#dev-modal' ).on('shown.bs.modal', function(event){
  //         var modal = $(this);
  //         var button = $(event.relatedTarget);
  //         var detail = button.closest('.card').find('.detail').clone();
  //         modal.find('.modal-body').empty().append(detail);
  //         // modal.find('.modal-body')
  //     });
  //     $('.sticky-header').sticky({topSpacing:0});
  //     $('.navbar-nav-scroll li a,.btn-go-to').click(function(e) {
  //         e.preventDefault();
  //         var heightHeader = $('.header').height();
  //         var element = $(this).attr('href');
  //         $([document.documentElement, document.body]).animate({
  //             scrollTop: $(element).offset().top - heightHeader
  //         }, 500);
  //     });
  //
  // }

};
$(document).ready(function () {
  // app.validateContact();
  app.hero();
  $('.datetimepicker').datetimepicker({
    inline: true,
    sideBySide: true
  });
  $('[data-toggle="tooltip"]').tooltip();
  var resizeId;
  $(window).resize(function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(function () {});
  });
  $(window).scroll(function () {});
});
$(window).on('load', function () {});
//# sourceMappingURL=main.js.map
