// const smaple_txt = document.querySelector('#sample_text_content');
// const typed_text = document.querySelector('#typed_text');

// const out_of = document.querySelector('.out_of');
// const error_calc = document.querySelector('.error_calc');

// const handsAndKeyboard = document.querySelector('#hands_withKeyboard');

// const charOfLeftHands = ['1', 'q', 'Q', 'a', 'A', '2', 'w', 'W', 's', 'S', 'z', 'Z', '3', 'e', 'd', 'x', 'X', '4', '5', 'r', 'R', 't', 'T', 'f', 'F', 'g', 'G', 'c', 'C', 'v', 'V'];

// const charOfRightHands = ['6', '7', 'y', 'Y', 'u', 'U', 'h', 'H', 'j', 'J', 'b', 'B', 'n', 'N', '8', 'i', 'I', 'k', 'm', 'M', '9', 'o', 'O', 'l', 'L', ',', '0', 'p', 'P', ';', '.'];

// const leftHandfingerSettingOnKeyboard = {
//     // '1': 'images/hands/LH-5.png',
//     'q': 'images/hands_key/Q.png',
//     'Q': 'images/hands_key/Q.png',
//     'a': 'images/hands_key/A.png',
//     'A': 'images/hands_key/A.png',

//     // '2': 'images/hands/LH-4.png',
//     'w': 'images/hands_key/W.png',
//     'W': 'images/hands_key/W.png',
//     's': 'images/hands_key/S.png',
//     'S': 'images/hands_key/S.png',
//     'z': 'images/hands_key/Z.png',
//     'Z': 'images/hands_key/Z.png',

//     // '3': 'images/hands/LH-3.png',
//     'e': 'images/hands_key/E.png',
//     'E': 'images/hands_key/E.png',
//     'd': 'images/hands_key/D.png',
//     'D': 'images/hands_key/D.png',
//     'x': 'images/hands_key/X.png',
//     'X': 'images/hands_key/X.png',

//     // '4': 'images/hands/LH-2.png',
//     // '5': 'images/hands/LH-2.png',
//     'r': 'images/hands_key/R.png',
//     'R': 'images/hands_key/R.png',
//     't': 'images/hands_key/T.png',
//     'T': 'images/hands_key/T.png',
//     'f': 'images/hands_key/F.png',
//     'F': 'images/hands_key/F.png',
//     'g': 'images/hands_key/G.png',
//     'G': 'images/hands_key/G.png',
//     'c': 'images/hands_key/C.png',
//     'C': 'images/hands_key/C.png',
//     'v': 'images/hands_key/V.png',
//     'V': 'images/hands_key/V.png',

// };

// const fingerSettingForSpaceBtn = {
//     'space_1': 'images/hands_key/Space.png',
// };

// const rightHandFingerSettingOnKeyboard = {
//     // '6': 'images/hands/RH-2.png',
//     // '7': 'images/hands/RH-2.png',
//     'y': 'images/hands_key/Y.png',
//     'Y': 'images/hands_key/Y.png',
//     'u': 'images/hands_key/U.png',
//     'U': 'images/hands_key/U.png',
//     'h': 'images/hands_key/H.png',
//     'H': 'images/hands_key/H.png',
//     'j': 'images/hands_key/J.png',
//     'J': 'images/hands_key/J.png',
//     'b': 'images/hands_key/B.png',
//     'B': 'images/hands_key/B.png',
//     'n': 'images/hands_key/N.png',
//     'N': 'images/hands_key/N.png',

//     // '8': 'images/hands/RH-3.png',
//     'i': 'images/hands_key/I.png',
//     'I': 'images/hands_key/I.png',
//     'k': 'images/hands_key/K.png',
//     'K': 'images/hands_key/K.png',
//     'm': 'images/hands_key/M.png',
//     'M': 'images/hands_key/M.png',

//     // '9': 'images/hands/RH-4.png',
//     'o': 'images/hands_key/O.png',
//     'O': 'images/hands_key/O.png',
//     'l': 'images/hands_key/L.png',
//     'L': 'images/hands_key/L.png',
//     ',': 'images/hands_key/Space.png',

//     // '0': 'images/hands/RH-5.png',
//     'p': 'images/hands_key/P.png',
//     'P': 'images/hands_key/P.png',
//     ';': 'images/hands_key/Space.png',
//     '.': 'images/hands_key/Space.png'
// };





// // converting sample text into span and array of span
// function convertQoutedTextIntoSpan() {
//     const qotedTextArray = smaple_txt.innerHTML.split('');
//     smaple_txt.innerHTML = '';
//     qotedTextArray.forEach((char, index) => {
//         const createSpan = document.createElement('span');
//         createSpan.innerText = char;
//         smaple_txt.appendChild(createSpan);
//     })
//     typed_text.value = '';
//     const qoute_len = smaple_txt.querySelectorAll('span');
//     out_of.innerText = qoute_len.length;
// }

// convertQoutedTextIntoSpan();
