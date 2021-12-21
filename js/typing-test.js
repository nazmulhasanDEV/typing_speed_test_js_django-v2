const duration_oneMin = document.querySelector('.duraton_oneMin');
const duration_threeMin = document.querySelector('.duraton_threeMins');
const duration_fiveMins = document.querySelector('.duration_5Mins');

const typing_duration_time = document.querySelector('.typing_duration_time');


function setTypingDuration(val, event) {
    typing_duration_time.innerHTML = val;
    console.log(event.target);
    if (event.target === duraton_oneMin) {
        duration_threeMin.disabled = true;
        duration_fiveMins.disabled = true;
        duration_threeMin.style.opacity = '0.1';
        duration_fiveMins.style.opacity = '0.1';
    }
    if (event.target === duration_threeMin) {
        duration_oneMin.disabled = true;
        duration_fiveMins.disabled = true;
        duration_oneMin.style.opacity = '0.1';
        duration_fiveMins.style.opacity = '0.1';
    }
    if (event.target === duration_fiveMins) {
        duration_oneMin.disabled = true;
        duration_threeMin.disabled = true;
        duration_oneMin.style.opacity = '0.1';
        duration_threeMin.style.opacity = '0.1';
    }
}