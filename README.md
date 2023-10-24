# LingoLeap-Assignment
 This is my solution to the Assignment given by LingoLeap for Software Devlopement Internship. (via Internshala)

# My Solution:
# Maximum Moves in a Matrix

This JavaScript code calculates the maximum number of moves that can be performed in a matrix, following specific rules for movement.

## Problem Description

You are given an `m x n` matrix consisting of positive integers. Starting from any cell in the first column of the matrix, you can traverse the grid in the following way:

- From a cell `(row, col)`, you can move to any of the cells `(row - 1, col + 1)`, `(row, col + 1)`, and `(row + 1, col + 1)` if the value of the cell you move to is strictly greater than the value of the current cell.

The code finds the maximum number of moves that can be performed in this matrix.

## How to Use

To use this code, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. Clone or download the repository containing the code.

3. Open a terminal and navigate to the directory where the code is located.

4. Run the code using Node.js:

   ```bash
   node maxMovesInMatrix.js
