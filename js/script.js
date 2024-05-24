import tabs from './modules/tabs';
import cards from './modules/cards';
import timer from './modules/timer';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    calc();
    timer('.timer', '2024-07-15');
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});
