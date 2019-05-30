import $ from 'jquery';
import './jquery-ui.min';

$(() => {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 20000,
    step: 100,
    values: [5000, 10000],
    slide: (event, ui) => {
      $('#amount').val(`${ui.values[0]}₽ - ${ui.values[1]}₽`);
    },
  });
  $('#amount').val(`${$('#slider-range').slider('values', 0)}₽ -
 ${$('#slider-range').slider('values', 1)}₽`);
});
