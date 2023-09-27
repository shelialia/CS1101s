// function partition(f, xs) {
//     const list_one = filter(f, xs);
//     function not_f(x) {
//         return f(x) ? false: true;
//     }
//     const list_two = filter(not_f, xs);
//     return pair(list_one, list_two);
// }

// partition(x => x % 2 === 0, list(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// pair(list(2,4,6,8,10), list(1,3,5,7,9))

// function flatten_once(xs) {
//     return is_null(xs) 
//             ? null 
//             : append(head(xs), flatten_once(tail(xs)));
// }
// flatten_once(list(list(list(0)), list(1, 2, 3), list(4, 5, 6)));

// function subsets(ls) {
//     return is_null(ls)
//             ? list(null)
//             : append(map(x=> pair(head(ls), x), subsets(tail(ls))), subsets(tail(ls)));
// }

// display_list(list(null, list(1), list(2), list(1,2)));
// function subsets(ls) {
//     if (is_null(ls)) {
//         return list(null);
//     } else {
//         display(head(ls));
//         display(subsets(tail(ls)));
//         return append(map(x=> pair(head(ls), x), subsets(tail(ls))), subsets(tail(ls)));
//     }
// }

// display_list(subsets(list(1, 2)));
// function sum_tree(tree) {
//     if (is_null(tree)) {
//         return 0;
//     } else if (is_list(head(tree))) {
//         return accumulate((x, y) => is_list(x) ? sum_tree(x) + y : x + y, 0, head(tree)) + sum_tree(tail(tree));
//     } else { 
//         return head(tree) + sum_tree(tail(tree));
//     }
// }
// const tree1 = list( list(1,2, list(3)),4, list(5,6));
// sum_tree(tree1);

// function flatten_tree(tree) {
//     if (is_null(tree)) {
//         return null;
//     } else if (is_list(head(tree))) {
//         return pair(flatten_tree(head(tree)), flatten_tree(tail(tree)));
//     } else {
//         return pair(head(tree), flatten_tree(tail(tree)));
//     }
// }

// const tree1 = list(list(1,2, list(3)), 4, list(5,6));
// flatten_tree(tree1);

// list(1,2,3,4,5,6));
// function filter_tree(f, tree) {
//     if (is_null(tree)) {
//         return null;
//     } else if (is_list(head(tree))) {
//         return pair(filter_tree(f, head(tree)), filter_tree(f, tail(tree)));
//     } else {
//         return f(head(tree))
//                 ? pair(head(tree), filter_tree(f, tail(tree)))
//                 : filter_tree(f, tail(tree));
//     }
    
// }
// const tree1 = list(list(1,2, list(3)), 4, list(5,6));
// filter_tree(x => x % 2 === 1, tree1);
    //      list( list(1,list(3)),list(5))); -> true

// output a tree whereby f is applied on all elements
// function map_tree(f, tree) {
//     if (is_null(tree)) {
//         return null;
//     } else if (is_list(head(tree))) {
//         return pair(map_tree(f, head(tree)), map_tree(f, tail(tree)));
//     } else {
//         return pair(f(head(tree)), map_tree(f,tail(tree)));
//     }
// }
// const tree1 = list(list(1,2, list(3)), 4, list(5,6));
// map_tree(x => x * 2, tree1);

// const tree2 = list(1);
// map_tree(x => x, tree2);
// list( list(2,4, list(6)),8, list(10,12))); -> true

// calculate sum of elements in the tree
// function sum_tree(tree) {
//     if (is_null(tree)) {
//         return 0;
//     } else if (!is_list(head(tree))) {
//         return head(tree) + sum_tree(tail(tree));
//     } else {
//         return sum_tree(head(tree)) + sum_tree(tail(tree));
//     }
// }
// const tree1 = list( list(1,2, list(3)), 4, list(5,6));
// sum_tree(tree1);
/// 21

// calculate number of elements in the tree
// function sum_tree(tree) {
//     if (is_null(tree)) {
//         return 0;
//     } else if (!is_list(head(tree))) {
//         return 1 + sum_tree(tail(tree));
//     } else {
//         return sum_tree(head(tree)) + sum_tree(tail(tree));
//     }
// }
// const tree1 = list( list(1,2, list(3)), 4, list(5,6));
// sum_tree(tree1);
// // 6

// function merge(a, b) {
//     if (is_null(a)) {
//         return b;
//     } else if (is_null(b)) {
//         return a;
//     } else {
//         return head(a) > head(b)
//                 ? pair(head(b), merge(a, tail(b)))
//                 : pair(head(a), merge(tail(a), b));
//     }
// }
// merge(list(1, 3, 5), list(2, 4, 6));
 
// function zip(xs, ys) {
//      return is_null(xs)
//             ? null 
//             : pair(pair(head(xs), head(ys)), zip(tail(xs), tail(ys)));
//  }
 
//  zip(list(1, 2, 3), list(4, 5, 6));

// function insert(x, xs) {
//     return is_null(xs) 
//             ? list(x)
//             : x <= head(xs)
//             ? pair(x, xs)
//             : pair(head(xs), insert(x, tail(xs)));    
// }

// function sort(xs) {
//     return is_null(xs)
//             ? null 
//             : insert(head(xs), sort(tail(xs)));
// }

// sort(list(4, 8, 2, 1));