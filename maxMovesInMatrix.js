/** The below code is my solution to the Assignment given by LingoLeap for Software Devlopement Internship. */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxMoves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Initialize the dynamic programming array with all values set to -1.
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));

    // Define a depth-first search function.
    function dfs(row, col) {
        if (row < 0 || row >= m || col >= n) return 0;
        if (dp[row][col] !== -1) return dp[row][col];

        let maxMoves = 0;

    // Define the three possible moves: right, diagonally down, and diagonally up.
        const moves = [-1, 0, 1];
        for (const move of moves) {
            const nextRow = row + move;
            if (nextRow >= 0 && nextRow < m && grid[nextRow][col + 1] > grid[row][col]) {
                maxMoves = Math.max(maxMoves, 1 + dfs(nextRow, col + 1));
            }
        }

        dp[row][col] = maxMoves;
        return maxMoves;
    }

    let maxMoves = 0;

    //Finally Iterating through the first column and find the maximum moves.

    for (let row = 0; row < m; row++) {
        maxMoves = Math.max(maxMoves, dfs(row, 0));
    }

    return maxMoves;
};
