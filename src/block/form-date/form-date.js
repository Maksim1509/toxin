import $ from 'jquery';
import airDatapicker from 'air-datepicker';

const formDates = $('.form-date');
Array.from(formDates).map(formDate => $(formDate).datepicker({
    inline: true,
    navTitles: {
        days: 'MM <i>yyyy</i>'
    },
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>',
    clearButton: true
}));
