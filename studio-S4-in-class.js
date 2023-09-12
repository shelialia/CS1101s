// Q1
function every_second(xs) {
    return is_null(xs) || is_null(tail(xs))
        ? null
        : pair(head(tail(xs)), every_second(tail(tail(xs))));
}

draw_data(every_second(list("a", "x", "b", "y", "c", "z", "d")));
  // Value: ["x", ["y", ["z", null]]]
  
// Q2: iterative version
function sums(num) {
    function g(xs, is_even, even_count, odd_count) {
        return is_null(xs)
            ? list(even_count, odd_count)
            : is_even
                ? g(tail(xs), false, even_count + head(xs), odd_count)
                : g(tail(xs), true, even_count, odd_count + head(xs));
    }
    return g(num, true, 0, 0);
}

sums(list(1, 2, 3, 4, 5));
  // Value: [9, [6, null]]
 