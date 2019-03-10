'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends){
    let newUl = document.createElement('ul')
    for (const el of friends ){

        let newLi = document.createElement('li');
        newLi.innerHTML = `${el.firstName} ${el.lastName}`
        newUl.appendChild(newLi)
    }
    return newUl
}
