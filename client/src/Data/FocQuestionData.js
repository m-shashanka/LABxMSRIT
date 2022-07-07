const FocQuestionData = [
    {
        id: 1,
        value: `Write a program to find area of rectangle.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective:`
The formula to find area of a rectangle is length multiplied by its breadth (l*b).  Three integer variables l (length), b (breadth) and area are declared. The function scanf() is used to take user input for variables l and b using the format specifier  (%d). The value of l is multiplied by value of b and stored in the variable area (area = l * b). The function printf() is used to print the value of area onto the screen.`,
        YouTubeLink: "https://www.youtube.com/embed/XjY6w7-HaW0?rel=0&amp;showinfo=0",
        Input: "3 4",
        Output: "12"
    },
    {
        id: 2,
        value: `Write a program to find area and circumference of circle by defining the value of PI (using symbolic constant).`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective:`
A symbolic constant is a name that substitutes for a sequence of characters or a numeric constant, a character constant or a string constant. Preprocessor directive #define can be used to define a symbolic constant. In the given question symbolic constant PI is used to define the value of pi (3.14). The symbolic constant PI can replace any occurrences of 3.14 in the code. Here, #define PI 3.14  is used. 
The formula to find area of a circle  is  pi*r*r and the formula for calculating the circumference of a circle is 2*pi*r.  Three floating point variables r (radius), area and circum (circumference) are declared. The function scanf() is used to take user input for variable r  using the format specifier  (%f). The value of r is multiplied by PI and r and stored in the variable area (area = PI*r*r). The value of r is multiplied by 2*PI and stored in the variable circum (circum = 2*PI*r).  The function printf() is used to print the value of area and circum onto the screen.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 3,
        value: `Write a program to swap 2 numbers without using temporary variable.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective:`
To swap two numbers without using a temporary variable, store the sum of the two numbers in the first variable (a=a+b). Then, assign the difference between the sum of two numbers (a) and the second variable (b) to b. Now, variable b contains the value of the first variable a (b=a-b). Similarly, assign the difference between the sum of two numbers and the variable b (which now contains the first number) to a (a=a-b). Now , variable a contains the value of the second variable. Use scanf() and printf() for input and output respectively.`,
        YouTubeLink: "https://www.youtube.com/embed/Gcu82iosSYY?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 4,
        value: `Write a program to find simple interest.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: `
The formula for calculating simple interest is (p*t*r)/100, where p is the principal amount, t is time and r is the rate of interest. scanf() is used to take input for floating point variables p, t, and r. The calculated interest is assigned to the variable si, which is printed onto the screen using printf().`,
        YouTubeLink: "https://www.youtube.com/embed/n7JRMZY0Pog?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 5,
        value: `Write a C program to convert Celsius to Fahrenheit.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: `
The formula for conversion of Celcius to Fahrenheit is temp_f = (9 * temp_c)/5 + 32. Transposing the formula gives conversion of Fahrenheit to Celcius. scanf()  is used to take input for the temperature in Celsius to be converted to Fahrenheit and vice versa.
The formula is applied and the converted results are stored in the variables temp_c and temp_f. The function printf() is used to display output on the screen.`,
        YouTubeLink: "https://www.youtube.com/embed/jTM9KOExg6I?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 6,
        value: `Write a program to swap 2 numbers using temporary variable.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: ` 
The two numbers to be swapped (a and b) are taken as user input using scanf(). A temporary variable (temp) having the same data type as a and b is declared. The value of a is assigned to temp. Then the variable a is assigned the value of b. Finally the value stored in temp is assigned to a, successfully swapping the two variables using the temporary variable temp. The two numbers are displayed after swapping using printf().`,
        YouTubeLink: "https://www.youtube.com/embed/YSXEYaqoTg0?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 7,
        value: `Write a C program to find the sum of digits and reverse of a 4 digit number using arithmetic operators.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: `
Take num (number) as user input using scanf() function. Declare another variable num1 and assign num to num1.Make sure both num and num1 are of integer data type. Now find modulo 10 of num and store it in variable a. Modulo operator (%) is used to calculate the remainder. By performing modulo 10 on num, the digit in ones place can be calculated. Now, divide num by 10 and store the resulting value in num. This eliminates the digit at ones place which is already stored in a. Similarly, calculate digits at tens, hundreds and thousands place by alternating modulo 10 and division by 10 operations and store them in b , c and d. The sum of the digits of the four digit number is (sum=a+b+c+d). To reverse the given number, apply (rev=(a*1000)+(b*100)+(c*10)+d)  on a, b, c and d. Print the results using  prints() function.`,
        YouTubeLink: "https://www.youtube.com/embed/HdI5b43Nk5k?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 8,
        value: `Write a C program to find whether given number is positive, negative or zero using conditional operator.`,
        PreReq: ["FlowControl"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.The condition is before the question mark, true block is after question mark and the false block is after colon.
To find out if a given number num is positive, negative or zero, a conditional operator can be used. If num==0 is true, then  "The number is zero" is printed. If not, then the condition (num >0) is checked. If it is true, then "The  number is positive" is printed. Finally, if the above two conditions are not satisfied, the "The  number is negative" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/QEEXHDo7-KQ?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 9,
        value: `Write a C program to check whether the number is odd or even using conditional operator.`,
        PreReq: ["FlowControl"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon. The modulo 2 operation is used to check if a number is even or odd. Since the modulo operation gives the remainder, if remainder of modulo 2 is zero, then the number is even.
To find out if a given number num is  even or odd, a conditional operator can be used. If the condition (n%2==0) is true, then "The number is even" is printed, otherwise "The number is odd" is printed. `,
        YouTubeLink: "https://www.youtube.com/embed/LvOCH8gs0Co?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 10,
        value: `Write a C program to check whether the triangle is isosceles, equilateral or scalene using if-else and conditional operator.`,
        PreReq: ["Queue", "Array"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon.
To check if the triangle is isosceles, equilateral or scalene, different conditions on the length if the sides can be verified. If ((a==b)&&(b==c)), then all sides are equal, implying that it is an equilateral triangle. Similarly, if (a==b||b==c||a==c), then any two sides are equal, making the triangle an isosceles triangle. Otherwise, the triangle is scalene.`,
        YouTubeLink: "https://www.youtube.com/embed/OK5cKp99zpU?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 11,
        value: `Write a C program to check whether entered lowercase character is vowel or not using logical || and conditional operator..`,
        PreReq: ["Array", "Stack"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon.
Logical OR ( || ) operator return true if any one of the conditions separated by ( || ) is true.
In (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') , if any one condition is true, then the condition is true and " the entered character is a vowel" is printed. Otherwise " the entered character is a consonant" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/RGmFWu6yjC8?rel=0&amp;showinfo=0",
        Input: "(A+B-C*(D-E)/F)-G",
        Output: "AB+CDE-*F/-G"
    },
    {
        id: 12,
        value: `Write a program to check whether a given year is a leap year or not using conditional operator.`,
        PreReq: ["Array", "Stack"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/RGmFWu6yjC8?rel=0&amp;showinfo=0",
        Input: "(A+B-C*(D-E)/F)-G",
        Output: "AB+CDE-*F/-G"
    },
    {
        id: 13,
        value: `Write a C program to find the biggest of three numbers using nested conditional (ternary) operator.`,
        PreReq: ["Array", "Stack"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon. Nested conditional operators can be used for more complex conditions. 
(a>b)?((a>c)?printf("%d is largest",a):  printf("The %d is largest",c)):((b>c)?printf("%d is largest",b):printf("%d is largest",c))
In the expression above, a nested conditional operator is used. The first condition checked is a>b. If this condition is true, then the condition a>c is checked. If true, then a is the largest. However, if a>c is false, c is the largest. But if a>b is false, then the condition b>c is verified. If it is true, then b is largest, otherwise c is largest.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/RGmFWu6yjC8?rel=0&amp;showinfo=0",
        Input: "(A+B-C*(D-E)/F)-G",
        Output: "AB+CDE-*F/-G"
    },
    {
        id: 14,
        value: `Write a C program to find whether an entered character is a number or digit using ASCII values and built in functions.`,
        PreReq: ["Array", "Stack"],
        Objective: `than the icp of the token, the top is popped and printed. Then the incoming token is compared with the new stack top.
    8. If the incoming operator has the higher isp then the same operation is repeated until the isp of stack top becomes less then icp of token. The token is pushed into the stack.
    9. The control comes out of the for loop.
    10. And at the end a while loop is executed wherein the operators in the stack are popped, and printed unless it reaches eos.
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/RGmFWu6yjC8?rel=0&amp;showinfo=0",
        Input: "(A+B-C*(D-E)/F)-G",
        Output: "AB+CDE-*F/-G"
    },
    {
        id: 15,
        value: `Write a C program to determine character entered by user is alphabet, digit, punctuation or whitespace using simple if statement.`,
        PreReq: ["Stack"],
        Objective: `
        Step 1: Create a stack to store operands.
        Step 2: Scan the given expression from left to right.
        Complexity of postfix evaluation:
    
    The Postfix evaluation algorithm has linear complexity O(N). Since the expression is scanned once and push and pop operations which take constant time are performed
    
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/YpIkHiMm0EI?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 16,
        value: `Write a C program to check whether the entered year is leap year or not using if-else statement.`,
        PreReq: ["Stack"],
        Objective: `
        Step 1: Create a stack to store operands.
        Step 2: Scan the given expression from left to right.
        Complexity of postfix evaluation:
    
    The Postfix evaluation algorithm has linear complexity O(N). Since the expression is scanned once and push and pop operations which take constant time are performed
    
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/YpIkHiMm0EI?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 17,
        value: `Write a C program to check whether an entered character is vowel or consonant using if-else statement.`,
        PreReq: ["Stack"],
        Objective: `
        Step 1: Create a stack to store operands.
        Step 2: Scan the given expression from left to right.
        Complexity of postfix evaluation:
    
    The Postfix evaluation algorithm has linear complexity O(N). Since the expression is scanned once and push and pop operations which take constant time are performed
    
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/YpIkHiMm0EI?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 18,
        value: `Write a C program to check whether a given number is positive, negative or zero using if-else if statement.`,
        PreReq: ["Stack"],
        Objective: `
        Step 1: Create a stack to store operands.
        Step 2: Scan the given expression from left to right.
        Complexity of postfix evaluation:
    
    The Postfix evaluation algorithm has linear complexity O(N). Since the expression is scanned once and push and pop operations which take constant time are performed
    
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/YpIkHiMm0EI?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 19,
        value: `Write a C program to check whether the triangle is isosceles, equilateral or scalene using if-else if statement.`,
        PreReq: ["Stack"],
        Objective: `
        Step 1: Create a stack to store operands.
        Step 2: Scan the given expression from left to right.
        Complexity of postfix evaluation:
    
    The Postfix evaluation algorithm has linear complexity O(N). Since the expression is scanned once and push and pop operations which take constant time are performed `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/YpIkHiMm0EI?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 20,
        PreReq: ["Stack", "LinkedList"],
        value: `Write a C program to find the roots of quadratic equation using if-else if statement.`,
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 21,
        PreReq: ["Stack", "LinkedList"],
        value: `Write a C program to display the examination result by grading system using else if ladder.`,
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 22,
        PreReq: ["Stack", "LinkedList"],
        value: `Write a C program to find the greatest of three numbers using nested if statement.`,
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 23,
        value: `Write a C program to perform a desired arithmetic operation using switch statement and declaring choice as char data type.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 24,
        value: `Write a C program to find roots of a quadratic equation using switch statement.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 25,
        value: `Write a C program to find whether given alphabet is vowel or consonant using switch.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 26,
        value: `Write a C program to find area of a triangle/square/circle/rectangle using switch statement.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 27,
        value: `Write a C program to find grade of a student using switch statement.`,
        PreReq: ["LinkedList"],
        Objective: ` 
    1. Create two circular linked lists, where each node will consist of the coefficient, power of  x and pointer to the next node.
    2. Traverse both the polynomials and check the following conditions:
          If the power of x of 1st polynomial is greater than power of x of second polynomial then store node of first polynomial in resultant polynomial and 
          increase counter of polynomial 1.
       `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 28,
        value: `Write a program to evaluate the square root for five numbers using goto statement.`,
        PreReq: ["LinkedList"],
        Objective: ` 
    1. Create two circular linked lists, where each node will consist of the coefficient, power of  x and pointer to the next node.
    2. Traverse both the polynomials and check the following conditions:
          If the power of x of 1st polynomial is greater than power of x of second polynomial then store node of first polynomial in resultant polynomial and 
          increase counter of polynomial 1.
       `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 29,
        value: `Write a C program to find the factorial of a number using for loop.`,
        PreReq: ["LinkedList"],
        Objective: ` 
    1. Create two circular linked lists, where each node will consist of the coefficient, power of  x and pointer to the next node.
    2. Traverse both the polynomials and check the following conditions:
          If the power of x of 1st polynomial is greater than power of x of second polynomial then store node of first polynomial in resultant polynomial and 
          increase counter of polynomial 1.
       `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 30,
        value: `Write a C program to find the sum of first ‘n' natural numbers using for loop.`,
        PreReq: ["LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 31,
        value: `Write a C program to find sum of odd numbers and even numbers in first n natural numbers using for loop.`,
        PreReq: ["LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 32,
        value: `Write a C program to display all factors of a number using for loop.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 33,
        value: `Write a C program to find GCD and LCM of two numbers using do while loop.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 34,
        value: `Write a C program to print first ‘N' fibonacci numbers using for loop.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 35,
        value: `Write a C program to check whether a given number is palindrome or not using while  loop.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 36,
        value: `Write a C program to find the sum of digits and reverse of a number using do while loop.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 37,
        value: `Write a C program to read a list of positive values and calculate its average  using break and continue statements.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 38,
        value: `Write a C program to find sum of elements of array.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 39,
        value: `Write a C program to search for an element in an array using linear search.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 40,
        value: `Write a C program to search for an element in an array using binary search.`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 41,
        value: `Write a C program to sort elements in ascending order using bubble sort.`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 42,
        value: `Write a C program to add two matrices.`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 43,
        value: `Write a C program to find transpose of a given matrix.`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 44,
        value: `Write a C program to find trace and norm of a given matrix.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 45,
        value: `Write a program to find whether a given square matrix is symmetric or not.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 46,
        value: `Write a program to find length of a string without using built-in functions.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 47,
        value: `Write a program to copy one string to another without using built-in functions.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 48,
        value: `Write a program to combine two strings without using built-in functions.`,
        PreReq: ["Queue", "LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 49,
        value: `Write a program to compare two strings without using built-in functions.`,
        PreReq: ["LinkedList"],
        Objective: ` 
    1. Create two circular linked lists, where each node will consist of the coefficient, power of  x and pointer to the next node.
    2. Traverse both the polynomials and check the following conditions:
          If the power of x of 1st polynomial is greater than power of x of second polynomial then store node of first polynomial in resultant polynomial and 
          increase counter of polynomial 1.
       `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 50,
        value: `Write a program to find whether given string is palindrome or not.`,
        PreReq: ["LinkedList"],
        Objective: ` 
    1. Create two circular linked lists, where each node will consist of the coefficient, power of  x and pointer to the next node.
    2. Traverse both the polynomials and check the following conditions:
          If the power of x of 1st polynomial is greater than power of x of second polynomial then store node of first polynomial in resultant polynomial and 
          increase counter of polynomial 1.
       `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 51,
        value: `Write C Programs to demonstrate the use of built in string functions like strcpy( ), strcat( ), strcmp( ) and strlen( ).`,
        PreReq: ["LinkedList"],
        Objective: ` 
    1. Create two circular linked lists, where each node will consist of the coefficient, power of  x and pointer to the next node.
    2. Traverse both the polynomials and check the following conditions:
          If the power of x of 1st polynomial is greater than power of x of second polynomial then store node of first polynomial in resultant polynomial and 
          increase counter of polynomial 1.
       `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 52,
        value: `Write a C program to find factorial of a given number using functions with arguments, with return type.`,
        PreReq: ["LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 53,
        value: `Write a C program to find GCD and LCM of 2 numbers using functions with arguments, without return type.`,
        PreReq: ["LinkedList"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 54,
        value: `Write a C program to find whether a number is a palindrome using functions without arguments, with return type.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 55,
        value: `Write a C program to find whether a given triangle is isosceles scalene or equilateral using functions without arguments, without return type.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 56,
        value: `Write a C program to illustrate automatic variables.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 57,
        value: `Write a C program to illustrate the properties of global variables.`,
        PreReq: ["Tree", "Heap"],
        Objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 58,
        value: `Write a C program to illustrate the properties of static variables.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 59,
        value: `Write a C program to illustrate compare and copy structure variables.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 60,
        value: `Write a C program to accept 3 subject marks and calculate the student wise totals and store them as part of structure. Illustrate using arrays of structures in the program.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 61,
        value: `Write a C program to compute sum of all elements stored in an array using pointers.`,
        PreReq: ["Tree", "LinkedList"],
        Objective: `
        Insertion into Binary Search Tree
        
        1. Create a new BST node and assign values
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 62,
        value: `Write a C program to swap two numbers using pointers.`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 63,
        value: `Write a program to determine the length of a character string using pointers.`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 64,
        value: `Write the C program which opens a file using the function fopen( ).`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 65,
        value: `Write a C program to demonstrate the use of fscanf().`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 66,
        value: `Write a C program to demonstrate the use of fprintf().`,
        PreReq: ["Stack", "Graph"],
        Objective: `
        Depth First Search: It is a recursive algorithm to search all the vertices of a tree data structure or a graph. The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until the goal node is reached or a node with no children is reached.
        Because of the recursive nature, the stack data structure can be used to implement the DFS algorithm 6.Repeat steps 2, 3, and 4 until the stack is empty.\n
        `,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    }
];

export default FocQuestionData;