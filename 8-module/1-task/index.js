'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');

    this.el.innerHTML =  createTable(items)


    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        const table = this.el
        const tbody = this.el.querySelector("tbody")
        const trAll  = table.rows
        const trAllInBody = [].slice.call(trAll,1)

        trAllInBody.sort(function ( a, b) {

            if ( desc === true ){
                console.log("obratni")
                if ( column === 2 || column === 1 ){
                    return +a.cells[column].textContent < +b.cells[column].textContent ? 1 : -1
                }
                return a.cells[column].textContent < b.cells[column].textContent ? 1 : -1
            }


            if ( column === 2 || column === 1 ){
                return +a.cells[column].textContent > +b.cells[column].textContent ? 1 : -1
            }
            return a.cells[column].textContent > b.cells[column].textContent ? 1 : -1

        })


        for ( let i = 0; i< trAllInBody.length; i++){
            tbody.append(trAllInBody[i])
         }

    };

}

function createTable(items) {

    let thead = '<thead class = "table__header">'

    thead +=  '<tr class = "table__row table__row_header">'
    for ( const key in items[ 0 ] ){
        thead +=  `<td class = "table__cell table__cell_header">${key}</td>`
    }
    thead += '</tr> </thead>'

    let tbody = `<tbody class = "table__body">`
    for ( let i = 0; i < items.length; i++ ){
        tbody += '<tr class = "table__row table__row_body">'
        for ( const key in items[ i ] ){
            tbody +=  `<td class = "table__cell table__cell_body">${items[ i ][key]}</td>`
        }
        tbody += `</tr>`
    }

    tbody += `</tbody>`

    return thead + tbody
}


