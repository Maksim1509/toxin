import $ from 'jquery';
import slick from 'slick-carousel';

$(document).ready(() => {
  $('.card-room__photos').slick({
    dots: true,
    prevArrow: "<i class='slick-prev material-icons'>expand_more</i>",
    nextArrow: "<i class='slick-next material-icons'>expand_more</i>",
  })
})

