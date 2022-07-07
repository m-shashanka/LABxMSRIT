const DetailedQuestionData = [
{
    id: 1,
    value: "Write a C program to find the fast transpose of a sparse matrix.",
    PreReq: ["Array", "SparseMatrix"],
    Objective:`
    Matrix: A matrix is a two-dimensional array having m rows and n columns. A matrix with m rows and n columns is called an mxn matrix. The data is stored in horizontal and vertical lines of entries.\n
    Sparse Matrix: A sparse matrix is a matrix that has a majority of its elements equal to zero. Simply put, a matrix in which the number of zero elements is greater than non-zero elements is a sparse matrix.\n
    When a sparse matrix is represented with a 2-dimensional array, we waste a lot of space to represent that matrix. For example, consider a matrix of size 100 X 100 containing only 10 non-zero elements. In this matrix, only 10 spaces are filled with non-zero values and the remaining spaces of the matrix are filled with zero. That means, totally we allocate 100 X 100 X 2 = 20000 bytes of space to store this integer matrix. And to access these 10 non-zero elements we have to make scanning for 10000 times. 
    To make it simple we use the following sparse matrix representation.\n
    Triplet Representation (array representation):
    For this representation, only non-zero values in the sparse matrix are represented along with their row and column index values. In this representation, the 0th-row stores the total number of rows, the total number of columns, and the total number of non-zero values in the sparse matrix.
    For example, consider a matrix of size 5 X 6 containing 6 non-zero values. This matrix can be represented as shown in the image.
    In above example matrix, there are only 6 non-zero elements ( those are 9, 8, 4, 2, 5 & 2) and matrix size is 5 X 6. We represent this matrix as shown in the above image. Here the first row in the right side table is filled with values 5, 6 & 6 which indicates that it is a sparse matrix with 5 rows, 6 columns & 6 non-zero values. The second row is filled with 0, 4, & 9 which indicates the non-zero value 9 is at the 0th-row 4th column in the Sparse matrix. In the same way, the remaining non-zero values also follow a similar pattern.
    `,
    YouTubeLink: "https://www.youtube.com/embed/fMZelmTUWZk?rel=0&amp;showinfo=0",
    YouTubeLinkTitle:"DFS",
    Input:`0 5 0 6
2 0 4 0
0 0 7 0`,
    Output:`0 2 0
5 0 0
0 4 7
6 0 0`
},
{
    id: 2,
    value: `Write a C program to perform pattern matching using KMP Algorithm.
               (Print the failure function of a pattern and display whether match is found or not).`,
    PreReq: ["Array"],
    Objective:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    YouTubeLink: "https://",
    Input:"12345",
    Output:"98765"
},
{
    id: 3,
    value: `Write a C program to implement a circular queue using dynamically allocated array and perform the following operations on it.
    (i) Insert an item (ii) Delete an item (iii) Display a circular queue`,
    PreReq: ["Queue","Array"],
    Objective:`
    Inserting an element in a circular queue

    Step 1:  IF (REAR+1)%MAX = FRONT
                 Write " OVERFLOW "
                 Goto step 4
                 [End OF IF]

    Step 2:  IF FRONT = -1 and REAR = -1
                      SET FRONT = REAR = 0
                  ELSE
                      SET REAR = (REAR + 1) % MAX
                  [END OF IF]

    Step 3:  SET QUEUE[REAR] = ITEM

    Step 4:  EXIT

    Deleting an element from the circular queue

    Step 1:  IF FRONT = -1
                 Write " UNDERFLOW "
                 Goto Step 4
                 [END of IF]

    Step 2:  SET ITEM = QUEUE[FRONT]
    
    Step 3:  IF FRONT = REAR
                    SET FRONT = REAR = -1
                 ELSE
                    SET FRONT = (FRONT + 1) % MAX
                 [END OF IF]
    
    Step 4: EXIT   
    `,
    YouTubeLink: "https://",
    Input:"12345",
    Output:"98765"
},
{
    id: 4,
    value: "Write a C program to convert a given infix expression to a postfix expression using a stack.",
    PreReq: ["Array", "Stack"],
    Objective:`
 The basic algorithm for infix to postfix conversion uses a stack data structure. The expression to be converted is scanned from left to right.\n
An enumerated data type called precedence is declared which has a list of all the operators.
A stack of data type precedence is declared to store the operators to be pushed into the stack. The value of top is initialized to -1 and a character array called EXPR is declared to store the infix expression to be converted to postfix expression.
Two integer arrays called icp and isp are initialized to define the in-stack precedence and in-coming precedence of the operators.\n
The function get_token has a return type of struct(precedence) ,and a switch statement is used to return the operator being used as defined by the struct of precedence. The function print_token is used to print the operator symbol using a switch case statement.
1. In the postfix function, stack[0] is initialized as eos (end of string) and top is initialized to 0.
2. A call to get_token function is made through a for loop. If the token is not equal to eos, the control enters the loop.In the loop:
3. If the token is equal to the operand, the operand symbol is printed.     
4. If the token is equal to right parenthesis, then pop and print the operators until a left parenthesis is reached in the stack.
5. Otherwise, the in-stack precedence(isp) of the operator is compared to the in-coming precedence(icp) of the operator.
6. If the isp of the operator at stack top is lower than the icp of the token, the token is pushed onto the stack. 
7. If the isp of the stack top is higher than the icp of the token, the top is popped and printed. Then the incoming token is compared with the new stack top.
8. If the incoming operator has the higher isp then the same operation is repeated until the isp of stack top becomes less then icp of token. The token is pushed into the stack.
9. The control comes out of the for loop.
10. And at the end a while loop is executed wherein the operators in the stack are popped, and printed unless it reaches eos.
    `,
    YouTubeLink: "https://www.youtube.com/embed/RGmFWu6yjC8?rel=0&amp;showinfo=0",
    Input:"(A+B-C*(D-E)/F)-G",
    Output:"AB+CDE-*F/-G"
},
{
    id: 5,
    value: "Write a C program to evaluate a given postfix expression using a stack.",
    PreReq: ["Stack"],
    Objective:`
    Step 1: Create a stack to store operands.
    Step 2: Scan the given expression from left to right.
    Step 3:    
     a)   If the scanned character is an operand, push it into the stack. 
     b) If the scanned character is an operator, POP 2 operands from stack and perform the operation using the operator encountered, and then PUSH the result back to the stack.
    Step 4: Repeat step 3 till all the characters are scanned.
    Step 5: When the expression has ended, the number in the stack is the final result.

    Complexity of postfix evaluation:

The Postfix evaluation algorithm has linear complexity O(N). Since the expression is scanned once and push and pop operations which take constant time are performed

    `,
    YouTubeLink: "https://www.youtube.com/embed/YpIkHiMm0EI?rel=0&amp;showinfo=0",
    Input:"12345",
    Output:"98765"
},
{
    id: 6,
    PreReq: ["Stack","LinkedList"],
    value: `Write a C program to implement multiple linked stacks (at least 5) and perform the following operations on them 
    (i) Push an item in ithstack (ii) Pop an item from ithstack (iii) Display ith stack.`,
    Objective:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    YouTubeLink: "https://www.youtube.com/embed/Nr2vaQGppjU?rel=0&amp;showinfo=0",
    Input:`push(0,10)
push(0,20)
push(2,30)
push(0,40)
push(4,50)
pop(0)
push(2,60)
pop(4)`,
    Output:"98765"
},
{
    id: 7,
    value: `Write a C program to implement multiple linked queues (at least 5) and perform the following operations on them
               (i) Add an item in ithqueue (ii) Delete an item from ithqueue (iii) Display ithqueue.`,
    PreReq: ["Queue","LinkedList"],
    Objective:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    YouTubeLink: "https://www.youtube.com/embed/gQoJRDx-7I4?rel=0&amp;showinfo=0",
    Input:"12345",
    Output:"98765"
},
{
    id: 8,
    value: `Write a C program to add two polynomials represented as circular linked lists with header nodes. 
                Display both polynomials and the resultant polynomial after addition.`,
    PreReq: ["LinkedList"],
    Objective:` 
1. Create two circular linked lists, where each node will consist of the coefficient, power of  x and pointer to the next node.
2. Traverse both the polynomials and check the following conditions:
      If the power of x of 1st polynomial is greater than power of x of second polynomial then store node of first polynomial in resultant polynomial and 
      increase counter of polynomial 1.
      If power of x of 1st polynomial is less than power of x of second polynomial then store the node of second polynomial in resultant polynomial and 
      increase counter of polynomial 2.
      If power of x of 1st polynomial is equal to power of x of second polynomial then store the sum of coefficient of both polynomial in resultant 
      polynomial and increase counter of both polynomial 1 and polynomial 2.
3. If there are nodes left to be traversed in the 1st polynomial or in the 2nd polynomial then append them in the resultant polynomial.
4. Finally, print the resultant polynomial.

   Time Complexity: O(M + N), where M and N are the number of nodes in the first and second lists respectively.
   Auxiliary Space: O(M + N)
   `,
    YouTubeLink: "https://",
    Input:"12345",
    Output:"98765"
},
{
    id: 9,
    value: `Write a C program to implement a doubly linked circular list with a header node and perform the following operations on it.
    (i) Insert a node (iii) Display a doubly linked circular list in forward direction
    (ii) Delete a node (iv)Display a doubly linked circular list in reverse direction.`,
    PreReq: ["LinkedList"],
    Objective:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    YouTubeLink: "https://",
    Input:"12345",
    Output:"98765"
},
{
    id: 10,
    value: `Write a C program to implement a max heap using an array and perform the following operations on it.
                (i) Insert an item (ii) Delete an item (iii) Display a heap.`,
    PreReq: ["Tree", "Heap"],
    Objective:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    YouTubeLink: "https://",
    Input:"12345",
    Output:"98765"
},
{
    id: 11,
    value: `Write a C program to implement a binary search tree using linked representation and perform the following operations on it.
    (i) Insert an item (ii) Search an item (iii) Inorder Traversal.`,
    PreReq: ["Tree", "LinkedList"],
    Objective:`
    Insertion into Binary Search Tree
    
    1. Create a new BST node and assign values to it.
    2. insert(node, item)
         i) If root == NULL,
             return the new node to the calling function.
         ii) if root=>data < item
             call the insert function with root=>right and assign the return value in root=>right.
            root->right = insert(root=>right, item)
         iii) if root=>data > item
             call the insert function with root->left and assign the return value in root=>left.
             root=>left = insert(root=>left, item)
    3. Finally, return the original root pointer to the calling function.

    Searching in Binary Search Tree

    If root == NULL 
        return NULL;
    If item == root->data 
        return root->data;
    If item < root->data 
        return search(root->left)
    If item > root->data 
        return search(root->right)

    In-order Traversal of BST

    Steps
    Traverse the left subtree in in-order
    Visit the root
    Traverse the right subtree in in-order

    Algorithm
    Step 1: Repeat Steps 2 to 4 while TREE != NULL
    Step 2: INORDER(TREE -> LEFT)
    Step 3: Print TREE -> DATA
    Step 4: INORDER(TREE -> RIGHT)
    [END OF LOOP]
    Step 5: END
    `,
    YouTubeLink: "https://",
    Input:"12345",
    Output:"98765"
},
{
    id: 12,
    value: "Write a C program to perform depth first search of a graph represented as an adjacency list.",
    PreReq: ["Stack", "Graph"],
    Objective:`
    Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
    Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm.\n
    The step by step process to implement the DFS traversal is given as follows -
    1.First, create a stack with the total number of vertices in the graph.
    2.Now, choose any vertex as the starting point of traversal, and push that vertex into the stack.
    3.After that, push a non-visited vertex (adjacent to the vertex on the top of the stack) to the top of the stack.
    4.Now, repeat steps 3 and 4 until no vertices are left to visit from the vertex on the top of the stack.
    5.If no vertex is left, go back and pop a vertex from the stack.
    6.Repeat steps 2, 3, and 4 until the stack is empty.\n
    Depth First Search Algorithm
    A standard DFS implementation puts each vertex of the graph into one of two categories:
    1.Visited
    2.Not Visited\n
    The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.\n
    The DFS algorithm works as follows:
    1.Start by putting any one of the graph's vertices on top of a stack.
    2.Take the top item of the stack and add it to the visited list.
    3.Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.
    4.Keep repeating steps 2 and 3 until the stack is empty.\n 
    Complexity of Depth First Search
    The time complexity of the DFS algorithm is O(V+E), where V is the number of nodes and E is the number of edges.
    The space complexity of DFS is O(V).
    `,
    YouTubeLink: "https://www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
    Input:"12345",
    Output:"98765"
},
{
    id: 13,
    value: "Write a C program to perform breadth first search of a graph.",
    PreReq: ["Queue", "Graph"],
    Objective:`
    Breadth First Search: It is a recursive algorithm to search all the vertices of a tree or graph data structure.
    Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node.\n
    BFS algorithm
    A standard BFS implementation puts each vertex of the graph into one of two categories:
    1. Visited
    2. Not Visited\n
    The purpose of the algorithm is to mark each vertex as visited while avoiding visited nodes.\n
    The algorithm works as follows:
    1.Start by putting any one of the graph's vertices at the back of a queue.
    2.Take the front item of the queue and add it to the visited list.
    3.Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue.
    4.Keep repeating steps 2 and 3 until the queue is empty.\n
    The graph might have two different disconnected parts so to make sure that we cover every vertex, we can also run the BFS algorithm on every node.\n
    Complexity of BFS
    The time complexity of the DFS algorithm is O(V+E), where V is the number of nodes and E is the number of edges.
    The space complexity of DFS is O(V).
    `,
    YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
    Input:"12345",
    Output:"98765"
},
// {
//     id: 14,
//     value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     PreReq: ["Stack", "Queue", "LinkedList"],
//     Objective:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     YouTubeLink: "https://",
//     Input:"12345",
//     Output:"98765"
// },
// {
//     id: 15,
//     value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     PreReq: ["Stack", "Queue", "LinkedList"],
//     Objective:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     YouTubeLink: "https://",
//     Input:"12345",
//     Output:"98765"
// }
];

export default DetailedQuestionData;