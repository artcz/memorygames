var running_sum = 0,
    DIGITS = 1,
    a_number = 0,
    wrong_counter = 0,
    running_sum_field = document.getElementById('running_sum'),
    number_field = document.getElementById('number'),
    p_feedback = document.getElementById('p_feedback'),
    input_field = document.getElementById('input');

running_sum_field.innerHTML = running_sum;

get_random_number = function(digits) {
    return Math.floor(Math.random() * 10 ** digits)
}

set_new_number = function() {
    a_number = get_random_number(DIGITS);
    number_field.innerHTML = a_number;
}

update_running_sum = function() {
    running_sum += number.innerHTML|0    // force int conversion
    running_sum_field.innerHTML = running_sum
}

clear_input_field = function() {
    input_field.value = '';
}

start = function() {
    set_new_number();
}
start();

correct = function() {
    feedback("correct");
    wrong_counter = 0;
    update_running_sum();
    set_new_number();
    clear_input_field();
}

feedback = function(message) {
    p_feedback.innerHTML = message;
}

press_enter = function(event) {
    event.preventDefault();
    KEY_ENTER = 13
    if(event.keyCode == KEY_ENTER) {
        check();
    }
}

input_field.addEventListener("keyup", press_enter);

wrong = function() {
    wrong_counter += 1;
    feedback("wrong [" + wrong_counter + "] times");
}

check = function() {
    if((input_field.value|0) === running_sum + a_number) {
        correct();
    } else {
        wrong()
    }
}
