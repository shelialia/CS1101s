// Example of iterative sum 1^2 + 3^2 + 5^2 + 7^2

function sum (term, x, next, b) {
    function sum_iter(x, total) {
    return x > b
        ? total
        : sum_iter(next(x), total + term(x));
}
    return sum_iter(term, x, next, b, 0);
}


// Q1 Use the substitution model to “manually” run the following program.
const z = 1;

function f(g) {
const z = 3;
return g(z);
}

f(y => y + z);

// z is 1, so f(y=> y + z) becomes (y => y + 1). we then substitute that to get 
// f(y => y + 1). z = 3, so return g(3), which is return (y => y + 1)(3). 
// we can see this as an anonymous function that takes in y as a parameter and 
// returns y + 1. y = 3, so the function returns 3 + 1, hence we get 4

// Q2 

// Write a function my sum that computes the following sum, for n ≥ 1, without higher-order
// functions: 1 × 2 + 2 × 3 + ⋯ + n × (n + 1)

S (1) = 2
S (2) = S(1) + 2 * 3
S (3) = S(2) + 3 * 4
S(n) = S(n-1) + n * (n+1)

function my_sum(n) {
    if (n === 1) {
    return 2;
    } else {
        const wish = my_sum(n-1);
        return wish + n * (n + 1);
    }
}

// Q3

// Does the function my sum as defined in Question 2 give rise to a recursive process or an
// iterative process? What is the order of growth in time and in space, using Θ notation?

// Gives rise to recursive process as there is a deferred operation. 
// Deferred operation here is the declaration of constant named wish. 
// Constant order of growth and time

// Q4
// We can also define my sum in terms of the higher-order function sum. Complete the decla-
// ration of my sum below. You cannot change the definition of sum; you may only call it with
// appropriate arguments.
// function my_sum(n) { return sum(<T1>, <T2>, <T3>, <T4>); }
T1:a * (a+1)
T2:1
T3:a=>a+1
T4:n

// Q5: Write an iterative version of sum.


// Q6

// Given the following Source program:
const x = 5;

function f(g) {
const x = 3;
// note that the x in function body refers to lumbda x in this case
return x => x + g(x);
}

function g(f, y) {
const h = (y, f) => y(f);
return h(f, y);
}

// (a) What names are declared by this program? x, f, g 
// (b) Which declaration does each name occurrence refer to? x refers to the 
// constant x, f refers to the function f and g refers to the function g.
// (c) What is the value of (f(x => 2 * x))(4)? 12
// (d) What is the value of g(y => y + 2, x)? 7
