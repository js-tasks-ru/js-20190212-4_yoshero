(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement( 'div' );
            this.el.style.position = 'absolute';
            this.el.style.border = '1px solid black';
            this._mouseOver = this._mouseOver.bind( this )
            this._mouseOut = this._mouseOut.bind( this )
            this.el.classList.add( this.name );
            document.body.appendChild( this.el );
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            this.el.root = root;
            root.addEventListener( 'mouseover', this._mouseOver )
            root.addEventListener( 'mouseout', this._mouseOut )
        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {

            this.el.classList.remove( 'tooltip_active' )
            this.el.root.removeEventListener( 'mouseover', this._mouseOver )
            this.el.root.removeEventListener( 'mouseout', this._mouseOut )

        }

        _mouseOver( element ){

            if( !element.target.getAttribute( 'data-tooltip' ) ) {
                return
            }

            this.el.textContent =  element.target.getAttribute( 'data-tooltip' )
            let coords = element.target.getBoundingClientRect()
            this.el.classList.add( 'tooltip_active')

            if ( coords.top < this.el.offsetHeight + this.indent ){

                this.el.style.top = `${ coords.bottom + this.indent }px`
            } else {
                this.el.style.top = `${ coords.top - this.el.offsetHeight + this.indent }px`
            }
        }
        _mouseOut( element ){

            if( !element.target.getAttribute( 'data-tooltip' ) ) {
                return
            }
            this.el.classList.remove( 'tooltip_active' )

        }

    }

    window.Tooltip = Tooltip;
})();
