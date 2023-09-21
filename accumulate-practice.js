// function remove_duplicates(lst) {
//     return accumulate((curr, wish) => pair(curr, remove(curr, wish)), null, lst);
// }

// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
//     // Result: list(1, 2, 3, 4)

 function reverse_a_list(xs) {
     return accumulate((x, y) => append(y, list(x)), null, xs);
 }
 
 reverse_a_list(list(1, 2, 3));
 
 function even(xs) {
     function is_even(x) {
         return x % 2 === 0
            ? true
            : false;
     }
     return accumulate((x, y) => is_even(x)
                    ? append(list(x), y)
                    : y
                , null, xs);
 }
 
 even(list(1, 2, 3, 456,600,123321));
 // expect list(2)
 
 function is_even(x) {
         return x % 2 === 0
            ? true
            : false;
 }
 
 function filter_hehe(xs, predicate) {
     return accumulate((x, y) => predicate(x)
                    ? append(list(x), y)
                    : y
                , null, xs);
 }
 
 filter_hehe(list(0, 1, 2, 3, 4, 214), is_even);
 
 
 // expect list(0, 2, 4, 214)
 
function count_hehe(xs, n) {
     return accumulate((x, y) => x === n
                ? y + 1
                : y
                , 0, xs);
 }
 count_hehe(list(3, 3, 7, 8, 3, 1, 1, 0), 3);
 // expect 3;
 
 // Checkifallelementsinalistsatisfyapredicate
 function is_satisfy(xs, func) {
     return accumulate((x, y) => is_even(x)
                ? true
                : false
                , true, xs);
 }
 is_satisfy(list(1, 3, 5, 3, 2, 2), is_even);
 // expect false
 
 // Checkifalistisinsortedorder
 function is_sorted(xs, key) {
     return head(accumulate((x, y) => head(y)
                        ? is_null(tail(y)) || key(x, tail(y)) ? pair(true, x): pair(false, null)
                        : pair(false, null)
                        , pair(true, null), xs));
 }
 is_sorted(list(1, 2, 3, 4, 12, 123, 123412341, 1029999999999), (x, y) => x >= y);
 // expect false
 
 