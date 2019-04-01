(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.el.classList.add("pure-table")
            this.el.innerHTML =  createTable(data)
            this.data = data;
            this.el.onclick = el =>{

                    if(  el.target.nodeName !== 'A' ) {
                        return
                    }
                    let tr = el.target.parentElement.parentElement
                    let id = +tr.cells[0].textContent
                    tr.remove()

                    this.onRemoved(id)


            }
        }

        /**
         * Метод который вызывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            console.log(`Из таблицы удален пользователь ${id}`)


        }

    }
    function createTable(items) {

        let thead = '<thead class = "table__header">'

        thead +=  '<tr class = "table__row table__row_header">'
        for ( const key in items[ 0 ] ){
            thead +=  `<td class = "table__cell table__cell_header">${key}</td>`
        }
        thead += '<td></td></tr> </thead>'

        let tbody = `<tbody class = "table__body">`
        for ( let i = 0; i < items.length; i++ ){
            tbody += '<tr class = "table__row table__row_body">'
            for ( const key in items[ i ] ){
                tbody +=  `<td class = "table__cell table__cell_body">${items[ i ][key]}</td>`
            }

            tbody += `<td><a href="#delete">X</a></td </tr>`
        }

        tbody += `</tbody>`

        return thead + tbody
    }



    let table = new ClearedTable([{
        id: 1,
        name: 'Ilia',
        age: 25,
        salary: '1000',
        city: 'Petrozavods'
    }]);
    console.log(table);

    table.el.querySelector('a').dispatchEvent(new Event('click', {bubbles: true}));
    console.log(table);
    console.log('check',table.el.querySelectorAll('tbody tr').length)


    window.ClearedTable = ClearedTable;
})();


