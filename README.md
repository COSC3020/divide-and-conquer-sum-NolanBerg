[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

RESOURCES USED: Originally coded the sum of list in python and used ai to convert to js where divide and conquer sum function takes in array and adds elements together. Below is python code to compute sum of list without testing:

def divide_and_conquer_sum(arr, low, high):

while low <= high:

if low == high:

return arr[low]

one_third = (2 * low + high) // 3

two_third = (low + 2 * high) // 3

return (

divide_and_conquer_sum(arr, low, one_third) +

divide_and_conquer_sum(arr, one_third + 1, two_third) +

divide_and_conquer_sum(arr, two_third + 1, high)

)

return 0


array = [1, 5, -1, 4]

print(array)

result = divide_and_conquer_sum(array, 0, len(array) - 1)

print(result)  



## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Recurrence Relation: $T(n) = 3T\left(\frac{n}{3}\right) + C$

Solve Relation: 

-First expand iteratively

$T(n) = 3^iT\left(\frac{n}{3^i}\right) + iC$

-Next substitiute $i = log_3(n)$

$T(n) = 3^{\log_3(n)}T(1) + nC = nT(1) + nC$

-Finally this will lead to linear time


The time complexity of this algorithm is $\theta(n)\$. It grows linearly because it sums all of the smaller subproblems during the recursion, which results in a linear time complexity.
