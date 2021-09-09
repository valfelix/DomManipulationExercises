// 1. Select the section with an id of container without using querySelector.
document.getElementById('container');

// 2. Select the section with an id of container using querySelector.
document.querySelector('#container');

// 3. Select all of the list items with a class of “second”.
document.getElementsByClassName('second');

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third'); // This one I kept trying ('ol > third') instead. Need to memorize when to use '#' '>' ' ' or '.'

// 5. Give the section with an id of container the text “Hello!”.
const container = document.getElementById('container'); // Does this work the same as let container = document.querySelector("#container"); ?
//container.innerText = 'Hello!' 

// 6. Add the class main to the div with a class of footer.
const footer = document.getElementsByClassName('footer'); // Does this work the same as let footer = document.querySelector(".footer"); ?
footer.classList.add('main');

// 7. Remove the class main on the div with a class of footer.
// Footer defined in example 6
footer.classList.remove('main');

// 8. Create a new li element.
const newLi = document.createElement('li');

// 9. Give the li the text “four”.
newLi.innerText = 'four';

// 10. Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newLi);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
    /* const ol = document.getElementsByTagName('ol');
    const listItems = document.querySelectorAll('li');
    for (let listItem of listItems){
        listItem.style.backgroundColor = 'green';
    }; 
    Incorrectly did not loop over just li items in ol, instead looped through all */

const liInOl = document.querySelectorAll('ol li');
for (let i=0; i < liInOl.length; i++){
    liInOl[i].style.backgroundColor = 'green';
}; 

    /* for (let listItem of liInOl){
        listItem.style.backgroundColor = 'green'
    } would this work the same? */

// 12. Remove the div with a class of footer
// Footer defined in example 6
footer.remove();
