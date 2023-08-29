import {ribbon, beside, beside_frac, stack, stack_frac, blank, circle, square, 
show} from 'rune';

function moony_1(rune) {
    return beside(stack(circle, square), stack(blank, rune));
}

show(moony_1(ribbon));

function moony_2(n) {
    return n === 1
        ? circle 
        : beside(stack(circle, square), stack(blank, moony_2(n-1)));
}

show(moony_2(5));

function moony(n) {
    return n === 1
        ? circle 
        : beside_frac(1/n, stack_frac(1/n, circle, square), stack_frac(1/n, 
        blank, moony(n-1)));
}

show(moony(5));

// Q3: Can you explain how your moony manages to even out both rows and columns?
// I make use of beside_frac and stack_frac to ensure that each circle take 
// up the same area. i use 1/n for this.

// Q4: Do your solutions give rise to recursive or iterative processes?
// Recursive process as there are no deferred operations.
// Q4: Characterize the resource consumption of your function moony using the 
// orders of growth notation introduced in Brief B2.
// Constant resource consumption. 
// Q4: In your description, be clear about what you consider the “size” of the 
// given problem.
// The recursive function is called n times until the base case is reached
// Hence the resource consumption is size n

// Q5: What assumptions are you making on the resource consumption of primitive 
// runes and of primitive operations on runes?
// We assume computer uses the same space to store even more complex runes.

