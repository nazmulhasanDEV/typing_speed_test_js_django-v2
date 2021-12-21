const choosen_duration = document.querySelector('.typing_duration_time');
const click_to_start = document.querySelector('.start_typing_btn');
const reset_typing_speed_tst_btn = document.querySelector('.reset_typing_speed_test');
const textTyping_box = document.querySelector('#typed_text');
const final_wpm = document.querySelector('#final_wpm');
const final_accuracy_measur = document.querySelector('#final_accuracy_measur');


const smaple_test_txt = document.querySelector('#sample_text_content');
const len_of_sample_txt = document.querySelector('.out_of');
const no_error_calc = document.querySelector('.error_calc');

// new
const smaple_txt = document.querySelector('#sample_text_content');
const typed_text = document.querySelector('#typed_text');

const out_of = document.querySelector('.out_of');
const error_calc = document.querySelector('.error_calc');

// give test result
const result_msg_main_box = document.querySelector('#result_msg_main_box');
const elapsed_duration_for_res = document.querySelector('#elapsed_duration_for_res');
const word_per_minute_for_res = document.querySelector('#word_per_minute_for_res');
const accuracy_in_prcntg_res = document.querySelector('#accuracy_in_prcntg_res');
const no_wrong_typed_characters_res = document.querySelector('#no_wrong_typed_characters_res');

const handsAndKeyboard = document.querySelector('#hands_withKeyboard');

const charOfLeftHands = ['q', 'Q', 'a', 'A', 'w', 'W', 's', 'S', 'z', 'Z', 'e', 'd', 'D', 'x', 'X', 'r', 'R', 't', 'T', 'f', 'F', 'g', 'G', 'c', 'C', 'v', 'V'];

const charOfRightHands = ['y', 'Y', 'u', 'U', 'h', 'H', 'j', 'J', 'b', 'B', 'n', 'N', 'i', 'I', 'k', 'm', 'M', 'o', 'O', 'l', 'L', ',', 'p', 'P', ';', '.', '"', "'", ':'];

const numbr_list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const leftHandfingerSettingOnKeyboard = {
    // '1': 'images/hands/LH-5.png',
    'q': 'images/hands_key/Q.png',
    'Q': 'images/hands_key/Q.png',
    'a': 'images/hands_key/A.png',
    'A': 'images/hands_key/A.png',

    // '2': 'images/hands/LH-4.png',
    'w': 'images/hands_key/W.png',
    'W': 'images/hands_key/W.png',
    's': 'images/hands_key/S.png',
    'S': 'images/hands_key/S.png',
    'z': 'images/hands_key/Z.png',
    'Z': 'images/hands_key/Z.png',

    // '3': 'images/hands/LH-3.png',
    'e': 'images/hands_key/E.png',
    'E': 'images/hands_key/E.png',
    'd': 'images/hands_key/D.png',
    'D': 'images/hands_key/D.png',
    'x': 'images/hands_key/X.png',
    'X': 'images/hands_key/X.png',

    // '4': 'images/hands/LH-2.png',
    // '5': 'images/hands/LH-2.png',
    'r': 'images/hands_key/R.png',
    'R': 'images/hands_key/R.png',
    't': 'images/hands_key/T.png',
    'T': 'images/hands_key/T.png',
    'f': 'images/hands_key/F.png',
    'F': 'images/hands_key/F.png',
    'g': 'images/hands_key/G.png',
    'G': 'images/hands_key/G.png',
    'c': 'images/hands_key/C.png',
    'C': 'images/hands_key/C.png',
    'v': 'images/hands_key/V.png',
    'V': 'images/hands_key/V.png',

};

const rightHandFingerSettingOnKeyboard = {
    
    'y': 'images/hands_key/Y.png',
    'Y': 'images/hands_key/Y.png',
    'u': 'images/hands_key/U.png',
    'U': 'images/hands_key/U.png',
    'h': 'images/hands_key/H.png',
    'H': 'images/hands_key/H.png',
    'j': 'images/hands_key/J.png',
    'J': 'images/hands_key/J.png',
    'b': 'images/hands_key/B.png',
    'B': 'images/hands_key/B.png',
    'n': 'images/hands_key/N.png',
    'N': 'images/hands_key/N.png',

    'i': 'images/hands_key/I.png',
    'I': 'images/hands_key/I.png',
    'k': 'images/hands_key/K.png',
    'K': 'images/hands_key/K.png',
    'm': 'images/hands_key/M.png',
    'M': 'images/hands_key/M.png',

    'o': 'images/hands_key/O.png',
    'O': 'images/hands_key/O.png',
    'l': 'images/hands_key/L.png',
    'L': 'images/hands_key/L.png',
    ',': 'images/hands_key/Space.png',

    'p': 'images/hands_key/P.png',
    'P': 'images/hands_key/P.png',
    ';': 'images/hands_key/extra/col_semicol.png',
    ':': 'images/hands_key/extra/col_semicol.png',
    '.': 'images/hands_key/extra/full_stop.png',
    'enter': 'images/hands_key/extra/Enter.png',
    ',': 'images/hands_key/extra/comma.png',
    "'": 'images/hands_key/extra/qoutation.png',
    '"': 'images/hands_key/extra/qoutation.png',
    " ": 'images/hands_key/Space.png'
};

var duration = 0;

const x = (button) => {

    // disabling "start typing button"
    button.disabled = true;
    button.style.opacity = '.3';

    reset_typing_speed_tst_btn.disabled = false;
    reset_typing_speed_tst_btn.style.opacity = '1';
    // ends 


    textTyping_box.focus();

    typed_text.addEventListener('input', function (e) {

        const qouted_text_spanList = smaple_txt.querySelectorAll('span');
    
        const arrayOfInputValue = typed_text.value.split('');
    
        var no_of_errors = 0;
    
        // finding elements which is not in typed text 
        if (arrayOfInputValue) {
            if (qouted_text_spanList.length !== arrayOfInputValue.length) {

                // current character should type
                const current_target_span = qouted_text_spanList[arrayOfInputValue.length];
                const current_char = current_target_span.innerHTML;

                // changing background of current targeted span
                for (let i=0; i<qouted_text_spanList.length; i++) {
                    if (qouted_text_spanList[i] !== current_target_span) {
                        qouted_text_spanList[i].classList.remove('current_target_span');
                    }else {
                        current_target_span.classList.add('current_target_span');
                    }
                }

                if (charOfLeftHands.includes(current_char)) {
                    handsAndKeyboard.src = leftHandfingerSettingOnKeyboard[current_char];
                } else if (numbr_list.includes(current_char)) {
                    handsAndKeyboard.src = rightHandFingerSettingOnKeyboard[" "];
                }
                else {
                    handsAndKeyboard.src = rightHandFingerSettingOnKeyboard[current_char];
                }
            }else {
                typed_text.blur();
                clearInterval(intervalFunc);
                result_msg_main_box.style.display = 'block';
                elapsed_duration_for_res.value = choosen_duration.innerText + ' Mins';
                word_per_minute_for_res.value = final_wpm.innerText;
                no_wrong_typed_characters_res.value = no_error_calc.innerText;
                accuracy_in_prcntg_res.value = final_accuracy_measur.innerText;
            }
    
        }
        
        // calculating wpm
        let no_of_total_given_words = smaple_txt.innerText.split(' ').length; 
        let wpm = ((no_of_total_given_words*60)/(duration))
        final_wpm.innerText = Math.round(wpm);

        // preventing back-space 
        window.onkeydown = function (event) {
            if (event.which == 8) {
                event.preventDefault();   // turn off browser transition to the previous page 
            }
        };
    
    
        qouted_text_spanList.forEach((char, index) => {
            const character = arrayOfInputValue[index];
            if (character == null) {
                char.classList.remove('correct_txt');
                char.classList.remove('wrong_txt');
            }
    
            else if (character === char.innerText) {
                char.classList.add('correct_txt');
                char.classList.remove('wrong_txt');
            } else {
                char.classList.remove('correct_txt');
                char.classList.add('wrong_txt');
            }
    
        })
    
        qouted_text_spanList.forEach((char) => {
            if (char.classList.contains('wrong_txt')) {
                no_of_errors += 1;
                error_calc.innerText = no_of_errors;
            } else {
                console.log("right");
            }
        })

        // acccuracy
        let accuracy = 100 - ((100*no_of_errors)/(smaple_txt.innerText.length));
        if (accuracy <= 0) {
            final_accuracy_measur.innerText = '0' + "%";
        }
        if (accuracy > 0) {
            final_accuracy_measur.innerText = accuracy.toFixed(2)+"%";
        }
    })

    const intervalFunc = setInterval(() => {

        duration++;

        var min = Math.floor(duration / 60);
        var second = Math.floor((duration % 60));

        if (min.toString().length <= 1 && second.toString().length <= 1) {
            min = '0' + min.toString();
            second = '0' + second.toString();
            choosen_duration.innerHTML = min + ":" + second;   
        }else if (min.toString().length <= 1) {
            min = '0' + min.toString();
            choosen_duration.innerHTML = min + ":" + second;
        }else if (second.toString().length <= 1) {
            second = '0' + second.toString();
            choosen_duration.innerHTML = min + ":" + second;
        }else{
            choosen_duration.innerHTML = min + " : " + second;
        }

    }, 1000);


    reset_typing_speed_tst_btn.onclick = (event) =>{
        if (event.target.style.opacity === '1') {
            event.target.style.opacity = '0.2';
            event.target.disabled = true;
        }
        clearInterval(intervalFunc);
        choosen_duration.innerHTML = "00:00";
        no_error_calc.innerHTML = 0;
        len_of_sample_txt.innerHTML = smaple_test_txt.querySelectorAll('span').length;

        // disabling "start typing button"
        button.disabled = false;
        button.style.opacity = '1';
        duration = 0;
        // ends 
    }

};


// converting sample text into span and array of span
function convertQoutedTextIntoSpan() {
    const qotedTextArray = smaple_txt.innerHTML.split('');
    smaple_txt.innerHTML = '';
    qotedTextArray.forEach((char, index) => {
        const createSpan = document.createElement('span');
        createSpan.innerText = char;
        smaple_txt.appendChild(createSpan);
    })
    typed_text.value = '';
    const qoute_len = smaple_txt.querySelectorAll('span');
    out_of.innerText = qoute_len.length;
}

convertQoutedTextIntoSpan();



