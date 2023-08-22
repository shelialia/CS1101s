// No need to do anything here.

// Qns 1
function biggie size(combo) {
    // Convert regular combo to biggie-sized combo
    return combo + 4;
}

// Qns 2
function unbiggie_size(combo) {
    return combo - 4;
}

// Qns 3
function is_biggie_size(combo) {
    combo > 4;
}

// Qns 4
function combo_price(combo) {
    return is_biggie_size(combo)? 1.17 * combo + 0.50: 1.17 * combo;
}

// Qns 5
function empty_order() {
    return 0;
}

// Qns 6
function add_to_order(order, combo) {
    returns 10 * order + combo;
}

// Qns 7
function last_combo(order) {
    const lastDigit = order % 10;
    return lastDigit;
}

// Qns 8
function other_combos(order) {
    // divide order by 10 to get rid of the last number then use math_floor to get rid of the decimal
    return math_floor(order / 10);
} 
