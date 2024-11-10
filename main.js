// let myelement = document.getElementById('dollar');
// myelement.addEventListener('input', function() {
//     // Get the current value of the input
//     let inputValue = myelement.value;

//     // Display the input value in the paragraph
//     document.getElementById('output').innerText = "User input: " + inputValue;
// });
// function changeValue() {
//     let value = document.getElementById('dollar').value;
//     let dollars = document.getElementById('dollarValue').innerHTML=value;
//     let poundValue=value*15.6;
//     let pounds =document.getElementById('poundValue').innerHTML=parseFloat(poundValue).toFixed(2);
// }
// let myimg = document.getElementsByTagName('img');
// let haveText = 'Old';
// let dontHaveText = 'Elzero New';
// // if (myimg[0].hasAttribute("alt")) {
// //     console.log('yes')
// // }
// for(let i=0 ; i < 5 ; i++){
//     if(myimg[i].hasAttribute('alt')){
//         myimg[i].setAttribute('alt' , haveText);
//     }else{
//         myimg[i].setAttribute('alt' , dontHaveText);
//     }
// }

// let submitb = document.querySelector("[name='create']");
// submitb.onclick = function (e) {
//     e.preventDefault();
//     let num = document.querySelector("[name='elements']").value;
//     let elementText = document.querySelector("[name='texts']").value;
//     let elementType = document.querySelector("[name='type']").value;
//     let result = document.getElementsByClassName('results')[0];
//     // Clear previous results
//     result.innerHTML = '';
//     for (let i = 0; i < num; i++) {
//         let newElement = document.createElement(elementType.toLowerCase());
//         let elTxt = document.createTextNode(elementText);
//         newElement.appendChild(elTxt);
//         result.appendChild(newElement);
//         newElement.id='id-' + i ;
//         newElement.className = 'box';
//         newElement.setAttribute('title', 'Element');

//     }
// };
// let par = document.getElementsByTagName('p');
// par[0].remove();
// let newup = document.createElement('div');
// newup.setAttribute('className' ,"start");
// newup.setAttribute('tilte' ,"start element");
// newup.setAttribute('data-vslue' ,"start");
// let upiner=document.createTextNode('start');
// newup.appendChild(upiner);

// let newdown = document.createElement('div');
// newdown.setAttribute('className' ,"end");
// newdown.setAttribute('tilte' ,"end element");
// newdown.setAttribute('data-vslue' ,"end");
// let downiner=document.createTextNode('end');
// newdown.appendChild(downiner);

// let mydiv = document.getElementsByClassName("our-element");
// mydiv[0].before(newup);
// mydiv[0].after(newdown);
// let req = document.getElementsByTagName('span');
// let com=req[0].nextSibling;
// console.log(com.nextSibling.nextSibling);

//---------------------------------------------------------------------------------------------------------
//   ---------------- the big task in section of video 94 to 101----------------

// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let spanList = document.querySelector(".classes-list");
// let currentElement = document.querySelector(".element");
// currentElement.addEventListener("click", createSpan);
// currentElement.addEventListener("click", removeSpan);
// function createSpan() {
//     let inputText = add.value;
//     let input = inputText;
//     let words = input.trim().split(' ');
//     for (let i = 0; i < words.length; i++) {
//         let spanName = words[i];
//         if (spanName.trim() !== "") {
//             spanName = spanName.toLowerCase();
//             let newSpan = document.createElement('span');
//             newSpan.className = spanName;
//             let text = spanName;
//             newSpan.innerText = spanName;
//             let container = spanList.getElementsByTagName('div')[0];
//             container.appendChild(newSpan);
//             add.value = "";
//             sortSpans();
//         }
//     }
//     let numberOfSpans = spanList.querySelectorAll("span").length; // Count the number of span elements
//     if (numberOfSpans === 0) {
//         let existingH2 = spanList.querySelector('h2.empty-message');
//         if (!existingH2) {
//             let h2 = document.createElement('h2');
//             h2.innerText = "No spans available.";
//             h2.className = "empty-message";
//             spanList.appendChild(h2);
//         }
//     }else {
//         let existingH2 = spanList.querySelector('h2.empty-message');
//             if (existingH2){
//                 spanList.removeChild(existingH2);
//             }
//     }
// }
// function removeSpan() {
//     let inputText = remove.value;
//     if (inputText.trim() !== "") {
//         let input = inputText;
//         let words = input.trim().split(' ');
//         for (let i = 0; i < words.length; i++) {
//             let spanName = words[i].toLowerCase();
//             let container = spanList;
//             let spanToRemove = container.querySelector(`span.${spanName}`);
//             if (spanToRemove) {
//                 spanToRemove.remove();
//             }
//         }
//         remove.value = "";
//         let numberOfSpans = spanList.querySelectorAll("span").length; // Count the number of span elements
//         if (numberOfSpans === 0) {
//             let existingH2 = spanList.querySelector('h2.empty-message');
//             if (!existingH2) {
//                 let h2 = document.createElement('h2');
//                 h2.innerText = "No spans available.";
//                 h2.className = "empty-message";
//                 spanList.appendChild(h2);
//             }
//         }
//         else {
//             let existingH2 = spanList.querySelector('h2.empty-message');
//             if (existingH2){                                                       
//                 spanList.removeChild(existingH2);
//             }
//             sortSpans();
//         }
//     }
// }
// function sortSpans() {
//     let container = spanList.getElementsByTagName('div')[0];
//     let spans = Array.from(container.getElementsByTagName('span'));
//     spans.sort((a, b) => a.innerText.localeCompare(b.innerText));
//     container.innerHTML = "";
//     spans.forEach(span => container.appendChild(span));

// }

//------------------------------------------------------------------------------

// let cont = document.querySelector('.cont'); // Select the container
// let elements = cont.querySelectorAll('*'); // Select all child elements

// for(let i=0;i<elements.length;i++){
//     elements[i].addEventListener('click', function(){                                  <== last task in section of video 94 to 101
//         let elementType = elements[i].tagName;
//         console.log("Tag Name:", elementType);
//     });
// }
// function setInLocal(key, value) {
//     console.log(`Saving ${key} = ${value} to local storage`);
//     document.body.style[key] = value;
//     window.localStorage.setItem(key, value);

// }

// function setInLocal(key, value) {
//     console.log(`Saving ${key} = ${value} to local storage`);
//     // Apply styles based on key
//     if (key === 'backgroundColor') {
//         document.body.style.backgroundColor = value; // Apply background color
//     } else {
//         document.body.style[key] = value; // Apply other styles (fontFamily, fontSize)
//     }
//     window.localStorage.setItem(key, value);
// }

// {
// function getSelectedColor() {
//     let selectedColor = document.getElementById('Color').value;
//     setInLocal('backgroundColor', selectedColor);
// }
// function getSelectedFont() {
//     let selectedFont = document.getElementById('fonts').value;
//     setInLocal('fontFamily', selectedFont);
// }
// function getSelectedSize() {
//     let selectedSize = document.getElementById('Size').value;
//     setInLocal('fontSize', selectedSize + 'px');
// }
// function applySavedStyles() {
//     const backgroundColor = localStorage.getItem('backgroundColor');
//     const fontFamily = localStorage.getItem('fontFamily');
//     const fontSize = localStorage.getItem('fontSize');
//     //     console.log(`Loaded from local storage: color = ${color}, fontFamily = ${fontFamily}, fontSize = ${fontSize}`);
//     // Apply the saved styles if they exist
//     if (backgroundColor){ document.body.style.backgroundColor = backgroundColor;
//         document.getElementById('Color').value=backgroundColor;
//     }
//     else document.body.style.backgroundColor = document.getElementById('Color').selectedIndex = 0;
//     if (fontFamily) {document.body.style.fontFamily = fontFamily;
//         document.getElementById('fonts').value=fontFamily;
//     }
//     else document.body.style.fontFamily = document.getElementById('fonts').selectedIndex = 0;
//     if (fontSize){ document.body.style.fontSize = fontSize;
//         document.getElementById('Size').value=fontSize.replace('px',' ');
//     }
//     else document.body.style.fontSize = document.getElementById('Size').selectedIndex = 0;
// }
// window.onload = function () {
//     applySavedStyles();  // Apply saved styles from localStorage
//     // setDefaultOptions(); // Ensure first option is selected if nothing is stored
// };}


function setInsession(key, value) {
    // console.log(`Saving ${key} = ${value} to local storage`);
    // document.body.style[key] = value;
    window.sessionStorage.setItem(key, value);
}
function getSelectedColor() {
    let selectedColor = document.getElementById('Color').value;
    document.body.style.backgroundColor = selectedColor;
    setInsession('backgroundColor', selectedColor);
}

function getFirstName() {
    let firstName = document.getElementById('First').value;
    setInsession('FirstName', firstName);
}
function getSecondName() {
    let secondName = document.getElementById('Second').value;
    setInsession('SecondName', secondName);
} function getNickName() {
    let nickName = document.getElementById('Nick').value;
    setInsession('NickName', nickName);
}
function applyChange() {
    let first = sessionStorage.getItem('FirstName');
    if (first) document.getElementById('First').value = first;
    let second = sessionStorage.getItem('SecondName');
    if (second) document.getElementById('Second').value = second;
    let nick = sessionStorage.getItem('NickName');
    if (nick) document.getElementById('Nick').value = nick;
    let Color = sessionStorage.getItem('backgroundColor');
    if (Color) {
        document.body.style.backgroundColor = Color;
        document.getElementById('Color').value = Color;
    }
    else {
        getSelectedColor('backgroundColor', document.getElementById('Color').selectedIndex = 0);
    }
}
window.onload = function () {
    applyChange();
}