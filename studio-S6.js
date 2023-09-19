// function my_map(f, xs) {
//     return accumulate((curr, wish) => pair(f(curr), wish), null, xs);
// }

// draw_data(my_map(x => x + 1, list(1, 2, 3)));
//     // Result: list(2, 3, 4)
    
// function remove_duplicates(lst) {
//     if (is_null(lst)) {
//         return null;
//     } else {
//         // our wish is that we have removed duplicates from the rest of the list
//         // hence, we need to apply filter on the rest of the list
//         // predicate should return true if list does not contain anything
//         // equal to the value at the head of the list
//         const wish = remove_duplicates(filter(x=> x !== head(lst), tail(lst)));
//         // then we return the pair of head of the list attached with the wish
//         return pair(head(lst), wish);

//     }
// }
// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
//     // Result: list(1, 2, 3, 4)


function makeup_amount(x, coins) { 
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null; 
        
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // Combinations that do not use the head coin // for the remaining amount.
        const combi_B = makeup_amount(x-head(coins), tail(coins));
        // Combinations that use the head coin.
        const combi_C = map(x=> pair(head(coins), x), combi_B);
        // combi_b returns a combinations that are lists of coins that make up eg 22 - 1 = 21
        // then we pair head, which is 1, with the list of coins that make up 21. so they give 22 in total.

        return append(combi_A, combi_C);
    }
}
makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
//              list(1, 20, 1), list(1, 10, 5, 5, 1),
//              list(1, 10, 5, 1, 5))

