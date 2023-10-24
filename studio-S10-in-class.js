function rotate_matrix(M) {

    function swap(r1, c1, r2, c2) {
        const temp = M[r1][c1];
        M[r1][c1] = M[r2][c2];
        M[r2][c2] = temp;
    }

    // // Your solution here.
    // TRANSPOSE THE MATRIX
    const a = array_length(M);
    const b = array_length(M[0]);
    for (let i= 0; i < a; i = i + 1) {
        // must start swapping after the line of symmetry, 
        // else we will end up swapping back whatever that 
        // has already been swapped
        for (let j = i + 1; j < b; j = j + 1) {
            swap(i, j, j, i);
        } 
    }
    
    // REFLECT EACH ARRAY HORIZONTALLY
    for (let i= 0; i < a; i = i + 1) {
        for (let j = 0; j < math_floor(b/2); j = j + 1) {
            swap(i, j, i, b - j - 1);
        }
    }
    return M;
}

const M =
[[ 1,  2,  3,  4],
 [ 5,  6,  7,  8],
 [ 9, 10, 11, 12],
 [13, 14, 15, 16]];
 
rotate_matrix(M);
M;
// M should have become
// [[13,  9, 5, 1], 
//  [14, 10, 6, 2], 
//  [15, 11, 7, 3], 
//  [16, 12, 8, 4]]
