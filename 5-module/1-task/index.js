'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 * Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
 * - Проставит аттрибут hidden, если такого атрибута нет вообще
 * Проставит класс male/female, в зависимости от содержимого ячекйки Gender
 * Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18
 */


function highlight(table) {

    let trAll = table.rows;
    for ( let i = 0; i < trAll.length; i++ ){

        if ( trAll[i].querySelector('td[data-available="true"]') ){
           trAll[i].className += ' available'

        } else {
            if ( trAll[i].querySelector('td[data-available="false"]') ){
                trAll[i].className += ' unavailable'

             } else {
                trAll[i].hidden = 'true'
             }
        }

        if ( trAll[i].cells[2].textContent === 'm' ){
            trAll[i].className += ' male'

        } else {
            if ( trAll[i].cells[2].textContent === 'f' ){
                trAll[i].className += ' female'
            }
        }

        if ( parseInt(trAll[i].cells[1].textContent) < 18 ){

            trAll[i].style.textDecoration = "line-through"
        }
    }

}
