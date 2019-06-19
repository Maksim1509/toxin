import $ from 'jquery';
import airDatapicker from 'air-datepicker';

const formDates = $('.form-date');
Array.from(formDates).map(formDate => $(formDate).datepicker());
