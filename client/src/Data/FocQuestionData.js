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
        Input: "2",
        Output: "Area = 12.5663 Circumference = 12.5663"
    },
    {
        id: 3,
        value: `Write a program to swap 2 numbers without using temporary variable.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective:`
To swap two numbers without using a temporary variable, store the sum of the two numbers in the first variable (a=a+b). Then, assign the difference between the sum of two numbers (a) and the second variable (b) to b. Now, variable b contains the value of the first variable a (b=a-b). Similarly, assign the difference between the sum of two numbers and the variable b (which now contains the first number) to a (a=a-b). Now , variable a contains the value of the second variable. Use scanf() and printf() for input and output respectively.`,
        YouTubeLink: "https://www.youtube.com/embed/Gcu82iosSYY?rel=0&amp;showinfo=0",
        Input: "2 3",
        Output: "3 2"
    },
    {
        id: 4,
        value: `Write a program to find simple interest.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: `
The formula for calculating simple interest is (p*t*r)/100, where p is the principal amount, t is time and r is the rate of interest. scanf() is used to take input for floating point variables p, t, and r. The calculated interest is assigned to the variable si, which is printed onto the screen using printf().`,
        YouTubeLink: "https://www.youtube.com/embed/n7JRMZY0Pog?rel=0&amp;showinfo=0",
        Input: "p = 20000, r = 6, t = 6",
        Output: "2400"
    },
    {
        id: 5,
        value: `Write a C program to convert Celsius to Fahrenheit.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: `
The formula for conversion of Celcius to Fahrenheit is temp_f = (9 * temp_c)/5 + 32. Transposing the formula gives conversion of Fahrenheit to Celcius. scanf()  is used to take input for the temperature in Celsius to be converted to Fahrenheit and vice versa.
The formula is applied and the converted results are stored in the variables temp_c and temp_f. The function printf() is used to display output on the screen.`,
        YouTubeLink: "https://www.youtube.com/embed/jTM9KOExg6I?rel=0&amp;showinfo=0",
        Input: "temp_c = 30, temp_f = 68",
        Output: "temp_f = 86, temp_c = 20"
    },
    {
        id: 6,
        value: `Write a program to swap 2 numbers using temporary variable.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: ` 
The two numbers to be swapped (a and b) are taken as user input using scanf(). A temporary variable (temp) having the same data type as a and b is declared. The value of a is assigned to temp. Then the variable a is assigned the value of b. Finally the value stored in temp is assigned to a, successfully swapping the two variables using the temporary variable temp. The two numbers are displayed after swapping using printf().`,
        YouTubeLink: "https://www.youtube.com/embed/YSXEYaqoTg0?rel=0&amp;showinfo=0",
        Input: "2 3",
        Output: "3 2"
    },
    {
        id: 7,
        value: `Write a C program to find the sum of digits and reverse of a 4 digit number using arithmetic operators.`,
        PreReq: ["Input-Output", "DataTypes"],
        Objective: `
Take num (number) as user input using scanf() function. Declare another variable num1 and assign num to num1.Make sure both num and num1 are of integer data type. Now find modulo 10 of num and store it in variable a. Modulo operator (%) is used to calculate the remainder. By performing modulo 10 on num, the digit in ones place can be calculated. Now, divide num by 10 and store the resulting value in num. This eliminates the digit at ones place which is already stored in a. Similarly, calculate digits at tens, hundreds and thousands place by alternating modulo 10 and division by 10 operations and store them in b , c and d. The sum of the digits of the four digit number is (sum=a+b+c+d). To reverse the given number, apply (rev=(a*1000)+(b*100)+(c*10)+d)  on a, b, c and d. Print the results using  prints() function.`,
        YouTubeLink: "https://www.youtube.com/embed/HdI5b43Nk5k?rel=0&amp;showinfo=0",
        Input: "1234",
        Output: "10 4321"
    },
    {
        id: 8,
        value: `Write a C program to find whether given number is positive, negative or zero using conditional operator.`,
        PreReq: ["FlowControl"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.The condition is before the question mark, true block is after question mark and the false block is after colon.
To find out if a given number num is positive, negative or zero, a conditional operator can be used. If num==0 is true, then  "The number is zero" is printed. If not, then the condition (num >0) is checked. If it is true, then "The  number is positive" is printed. Finally, if the above two conditions are not satisfied, the "The  number is negative" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/QEEXHDo7-KQ?rel=0&amp;showinfo=0",
        Input: "2",
        Output: "The number is positive."
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
        Input: "47",
        Output: "The number is odd."
    },
    {
        id: 10,
        value: `Write a C program to check whether the triangle is isosceles, equilateral or scalene using if-else and conditional operator.`,
        PreReq: ["FlowControl"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon.
To check if the triangle is isosceles, equilateral or scalene, different conditions on the length if the sides can be verified. If ((a==b)&&(b==c)), then all sides are equal, implying that it is an equilateral triangle. Similarly, if (a==b||b==c||a==c), then any two sides are equal, making the triangle an isosceles triangle. Otherwise, the triangle is scalene.`,
        YouTubeLink: "https://www.youtube.com/embed/OK5cKp99zpU?rel=0&amp;showinfo=0",
        Input: "a=6 b=5 c=5",
        Output: "Isosceles Triangle"
    },
    {
        id: 11,
        value: `Write a C program to check whether entered lowercase character is vowel or not using logical || and conditional operator..`,
        PreReq: ["FlowControl"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon.
Logical OR ( || ) operator return true if any one of the conditions separated by ( || ) is true.
In (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') , if any one condition is true, then the condition is true and " the entered character is a vowel" is printed. Otherwise " the entered character is a consonant" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/JhVfofBf3J4?rel=0&amp;showinfo=0",
        Input: "a=6 b=5 c=5",
        Output: "Isosceles Triangle"
    },
    {
        id: 12,
        value: `Write a program to check whether a given year is a leap year or not using conditional operator.`,
        PreReq: ["FlowControl"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon.
If a year is divisible by 4 and not divisible by 100 or if a year is divisible by 400, then the year is a leap year. 
In (num%4==0)&&(num%100!=0)||(num%400==0), if any one condition satisfies, then the entire condition is true and "The entered year is a leap year" is printed. Otherwise "The entered year is not a leap year" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/fV5N_-8E8FI?rel=0&amp;showinfo=0",
        Input: "2020",
        Output: "The entered is leap year."
    },
    {
        id: 13,
        value: `Write a C program to find the biggest of three numbers using nested conditional (ternary) operator.`,
        PreReq: ["FlowControl"],
        Objective: `
The conditional operator (? :) is a ternary operator (it takes three operands). The ternary operator takes three operands. The first is a boolean expression; the second and third are values. If the boolean expression is true, the ternary operator returns the value of the second operand, otherwise, it returns the value of the third operand. It is very similar to using if-else.
The condition is before the question mark, the true block is after the question mark and the false block is after the colon. Nested conditional operators can be used for more complex conditions. 
(a>b)?((a>c)?printf("%d is largest",a):  printf("The %d is largest",c)):((b>c)?printf("%d is largest",b):printf("%d is largest",c))
In the expression above, a nested conditional operator is used. The first condition checked is a>b. If this condition is true, then the condition a>c is checked. If true, then a is the largest. However, if a>c is false, c is the largest. But if a>b is false, then the condition b>c is verified. If it is true, then b is largest, otherwise c is largest.`,
        YouTubeLink: "https://www.youtube.com/embed/nHJBIukSkGQ?rel=0&amp;showinfo=0",
        Input: "a=4 b=7 c=9",
        Output: "9 is largest"
    },
    {
        id: 14,
        value: `Write a C program to find whether an entered character is a alphabet or digit using ASCII values and built in functions.`,
        PreReq: ["FlowControl"],
        Objective: `
ASCII (American Standard Code for Information Interchange) is the most common character encoding format for text data in computers and on the internet. In standard ASCII-encoded data, there are unique values for 128 alphabetic, numeric or special additional characters and control codes. ASCII value of uppercase alphabets – 65 to 90. ASCII value of lowercase alphabets – 97 to 122. ASCII value of digits [0 – 9] ranges from [48 – 57].
To find whether the entered character is an alphabet or digit without built in functions, ASCII values can be used. Input is taken through scanf() function. The program uses a simple if-else ladder. If ((ch>='a' && ch<='z')||(ch>='A' && ch<='Z')) is true, then "it is an alphabet" is printed. Else if (ch>=48 && ch<=56) is true, the "it is a number" is printed. Else "it is a special character" is printed.
The same task can be performed using built in functions.
isalpha() :
The isalpha() function checks whether a character is an alphabet or not. If a character passed to isalpha() is an alphabet, it returns a non-zero integer, if not it returns 0.
isdigit() :
The isdigit() function checks whether a character is a numeric character (0-9) or not. If a character passed to isdigit() is a digit, it returns a non-zero integer, if not it returns 0.
If  (isalpha(ch)) is true, i.e., isalpha() return a non-zero integer, then the character is an alphabet, else if (isalpha(ch)) is true then the character is a digit. Otherwise the character is a special character.`,
        YouTubeLink: "https://www.youtube.com/embed/MRpfGSc7ml4?rel=0&amp;showinfo=0",
        Input: "9",
        Output: "9 is a digit"
    },
    {
        id: 15,
        value: `Write a C program to determine character entered by user is alphabet, digit, punctuation or whitespace using simple if statement.`,
        PreReq: ["FlowControl"],
        Objective: `
isalpha() :
The isalpha() function checks whether a character is an alphabet or not. If a character passed to isalpha() is an alphabet, it returns a non-zero integer, if not it returns 0.
isdigit() :
The isdigit() function checks whether a character is a numeric character (0-9) or not. If a character passed to isdigit() is a digit, it returns a non-zero integer, if not it returns 0.

ispunct() :
The ispunct() function checks whether a character is a punctuation mark or not. If a character passed to the ispunct() function is a punctuation, it returns a non-zero integer. If not, it returns 0.
isspace() :

The isspace() function checks whether a character is a white-space character or not. If an argument (character) passed to the isspace() function is a white-space character, it returns non-zero integer. If not, it returns 0.
All the functions are checked using if statements and respective results are printed.`,
        YouTubeLink: "https://www.youtube.com/embed/hPi0HlulQSo?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 16,
        value: `Write a C program to check whether the entered year is leap year or not using if-else statement.`,
        PreReq: ["FlowControl"],
        Objective: `
If a year is divisible by 4 and not divisible by 100 or if a year is divisible by 400, then the year is a leap year. A program for this can be written using if-else.
In (num%4==0)&&(num%100!=0)||(num%400==0), if any one condition satisfies, then the entire condition is true and "The entered year is a leap year" is printed. Otherwise, else condition statement "The entered year is not a leap year" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/hPi0HlulQSo?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 17,
        value: `Write a C program to check whether an entered character is vowel or consonant using if-else statement.`,
        PreReq: ["FlowControl"],
        Objective: `
This program is written using simple if else. If the condition (ch=='a'|| ch=='e'|| ch=='i'|| ch=='o'|| ch=='u') is true, then the if block statement " the entered character is vowel" is printed. 
Otherwise, the else block statement " The entered character is consonant" is printed. Input and output use functions scanf() and printf().`,
        YouTubeLink: "https://www.youtube.com/embed/wbkqc7LBcTs?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 18,
        value: `Write a C program to check whether a given number is positive, negative or zero using if-else if statement.`,
        PreReq: ["FlowControl"],
        Objective: `
The program can be executed using a simple if-else ladder. To find out if a given number num is positive, negative or zero, a simple if-else ladder can be used. If num==0 is true, then  "The number is zero" is printed. If not, else if condition (num >0) is checked. If it is true, then "The  number is positive" is printed. Finally, if the above two conditions are not satisfied, the else block statement "The  number is negative" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/lnR0HzLZmGM?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 19,
        value: `Write a C program to check whether the triangle is isosceles, equilateral or scalene using if-else if statement.`,
        PreReq: ["FlowControl"],
        Objective: `
The program can be written using an if-else ladder. To check if the triangle is isosceles, equilateral or scalene, different conditions on the length if the sides can be verified. If ((a==b)&&(b==c)), then all sides are equal, implying that it is an equilateral triangle. Similarly, else if condition (a==b||b==c||a==c ) is true, then any two sides are equal, making the triangle an isosceles triangle. Otherwise, the triangle is scalene. The scanf() and printf() functions can be used for input and output.`,
        YouTubeLink: "https://www.youtube.com/embed/28LoYWI2C4A?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 20,
        PreReq: ["FlowControl"],
        value: `Write a C program to find the roots of quadratic equation using if-else if statement.`,
        Objective:`
This program can be written through an if-else-if ladder. If ( a == 0 || b == 0 || c == 0) is true, then "Error: Coefficient value must be Non-Zero..." is printed. The discriminant for a quadratic equation can be calculated as disc = b * b - 4 * a * c. If (disc<0), print "Roots are Imaginary". Then if block statements calculating imaginary roots are calculated. The imaginary roots can be calculated as    real = -b / (2 * a)  and imag = sqrt(fabs(disc)) / (2 * a). Otherwise, else if (disc==0) is true, the "Roots are Real & Identical..." is printed. Then the statements of this if block are executed to calculate real and equal roots as root1 = -b / (2 * a) and root2 = root. Lastly, if all if conditions fail, the the final else block statements are executed. "Roots are Real & Distinct..." is printed, real and distinct roots calculated as root1 = (-b + sqrt(disc)) / (2 * a) and root2 = (-b - sqrt(disc)) / (2 * a).`,
        YouTubeLink: "https://www.youtube.com/embed/yzplt3uOtWo?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 21,
        PreReq: ["FlowControl"],
        value: `Write a C program to display the examination result by grading system using else if ladder.`,
        Objective: `
Percentage is calculated as perce = ((m1+m2+m3+m4+m5+m6)*100/600). If any of the subject marks is less than 40, then "Fail"  has to be printed. This is handled using the statement if( (m1<50) || (m2<50) || (m3<50) || (m4<50) || (m5<50) || (m6<50)). 
Now, the grades can be assigned to percentage using if-else-if ladder. If (perce >= 90) is true, then "S grade" is printed. Else if (perce >= 80) is true, then "A grade" is printed. Similarly, all other grades are assigned until the final else block statements are executed and "Fail" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/18GU5qn6-V0?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 22,
        PreReq: ["FlowControl"],
        value: `Write a C program to find the greatest of three numbers using nested if statement.`,
        Objective: `
Nested If in C Programming is placing If Statement inside another IF Statement. Nested If in C is helpful if you want to check the condition inside a condition. If Else Statement prints different statements based on the expression result (TRUE, FALSE). Sometimes we have to check even further when the condition is TRUE.
To find the greatest of three numbers using nested if, the first condition checked is if (a>b). If it is true, then the statements inside the if block are executed which contain further if-else statements. The condition if (a>c) is checked. If it is true then "a is largest" is printed. Otherwise the else block statements for the nested if are executed and "c is largest" is printed. If the condition for the outer if fails, then the else block corresponding to that if is executed. Inside this else block, there are further conditions to be checked. If (b>c) is true, then "b is greatest" is printed. Otherwise, the else block statement "c is greatest" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/WOh8QqA37aY?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 23,
        value: `Write a C program to perform a desired arithmetic operation using switch statement and declaring choice as char data type.`,
        PreReq: ["FlowControl"],
        Objective: `
The switch statement allows us to execute one code block among many alternatives.
The expression is evaluated once and compared with the values of each case label.
If there is a match, the corresponding statements after the matching label are executed. For example, if the value of the expression is equal to constant2, statements after case constant2: are executed until break is encountered.
If there is no match, the default statements are executed.
To perform desired arithmetic operation, the operators are used for case labels and checked using switch.
If the expression entered is '+' , then it will be matched with case '+'  and statements in that block will get executed until break is encountered. Similarly, all other operations can be performed if match is found in the case labels.
If no match is found, then default statements are executed and "Invalid Operation" is printed.`,
        YouTubeLink: "https://www.youtube.com/embed/l1aT0Y1_6ko?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 24,
        value: `Write a C program to find roots of a quadratic equation using switch statement.`,
        PreReq: ["FlowControl"],
        Objective: `
The switch statement allows us to execute one code block among many alternatives.
The expression is evaluated once and compared with the values of each case label.
If there is a match, the corresponding statements after the matching label are executed. For example, if the value of the expression is equal to constant2, statements after case constant2: are executed until break is encountered.
If there is no match, the default statements are executed.
To calculate roots of a quadratic equation, the value of the discriminant is used. A variable ch is checked using switch statements. If the discriminant is less than 0, then ch=1, which will match with case 1 , and imaginary roots will be calculated.  If the discriminant is equal to 0, then ch=2, which will match with case 2 , and real, equal roots will be calculated. Finally if the discriminant is greater than 0, then ch=3, which will match with case 3, and real, distinct roots will be calculated. If no case label matches with the condition, then the default statements will be executed and "Invalid Choice" will be printed.`,
        YouTubeLink: "https://www.youtube.com/embed/i61H3W1H268?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 25,
        value: `Write a C program to find whether given alphabet is vowel or consonant using switch.`,
        PreReq: ["FlowControl"],
        Objective: `
The switch statement allows us to execute one code block among many alternatives.
The expression is evaluated once and compared with the values of each case label.
If there is a match, the corresponding statements after the matching label are executed. For example, if the value of the expression is equal to constant2, statements after case constant2: are executed until break is encountered.
If there is no match, the default statements are executed.
The case label can be uppercase and lowercase vowels. If the expression in switch matches any case label, it can be identified as a vowel. Otherwise, the default statements can identify the expression as a consonant. For example, switch(ch) is being evaluated, where ch='a', then it matches with case 'a'. If ch='z', then default statements is executed and "Consonant" will be printed.`,
        YouTubeLink: "https://www.youtube.com/embed/WIWLqT7_z04?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 26,
        value: `Write a C program to find area of a triangle/square/circle/rectangle using switch statement.`,
        PreReq: ["FlowControl"],
        Objective: `
The switch statement allows us to execute one code block among many alternatives.
The expression is evaluated once and compared with the values of each case label.
If there is a match, the corresponding statements after the matching label are executed. For example, if the value of the expression is equal to constant2, statements after case constant2: are executed until break is encountered.
If there is no match, the default statements are executed.
To calculate the area of a triangle/square/circle/rectangle using switch statement, the condition matched using switch will be the choice of shape whose area has to be calculated. If switch(choice) is being executed, when choice=1, it will be matched with case 1, which has code for calculating the area of the triangle. Similarly, based on the value of choice, which matches with respective cases, area of different shapes can be calculated.`,
        YouTubeLink: "https://www.youtube.com/embed/sCrm2h499c8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 27,
        value: `Write a C program to find grade of a student using switch statement.`,
        PreReq: ["FlowControl"],
        Objective: ` 
The switch statement allows us to execute one code block among many alternatives.
The expression is evaluated once and compared with the values of each case label.
If there is a match, the corresponding statements after the matching label are executed. For example, if the value of the expression is equal to constant2, statements after case constant2: are executed until break is encountered.
If there is no match, the default statements are executed.
After taking inputs for all the subjects, check if any of the given marks is less than 40 then it is printed as grade 'F'. Then else block statement which implies that all the marks entered are above 40 is executed and c total sum of marks entered is calculated. To calculate the percentage of the given marks, divide total marks by 6.
The switch statement runs over a single digit which is obtained by dividing the percentage obtained by 10.
In the subsequent cases valid grades are to be written.`,
        YouTubeLink: "https://www.youtube.com/embed/is6UA630YhY?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 28,
        value: `Write a program to evaluate the square root for five numbers using goto statement.`,
        PreReq: ["FlowControl"],
        Objective: ` 
The goto statement allows us to transfer control of the program to the specified label. 
The input values are taken in the read label. If the entered value is negative, then the control goes to the negative label where the value of count is incremented by 1. If (count<=5), then goto read label is executed. Else, the square root of the number is calculated and printed.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 29,
        value: `Write a C program to find the factorial of a number using for loop.`,
        PreReq: ["FlowControl"],
        Objective: ` 
To calculate the factorial of N using the for loop, run the for loop starting from i=N till i>=1 , decrementing the value of i for each time the loop runs. For each time the loop is run, which is N times, fact=fact*i is executed. The final value of factorial is printed which is stored in fact.`,
        YouTubeLink: "https://www.youtube.com/embed/3YPwX1Y7_mU?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 30,
        value: `Write a C program to find the sum of first 'n' natural numbers using for loop.`,
        PreReq: ["FlowControl"],
        Objective: `
To calculate the sum of N natural numbers, run the for loop starting from i=0 till i<N, incrementing the value of i for each time the loop runs. For each time the loop is run, which is N times, sum+=i is executed. The final value of sum is stored in sum which can be printed.`,
        YouTubeLink: "https://www.youtube.com/embed/di7GRjF8Twk?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 31,
        value: `Write a C program to find sum of odd numbers and even numbers in first n natural numbers using for loop.`,
        PreReq: ["FlowControl"],
        Objective:`
To calculate the sum of odd and even numbers in the first N natural numbers, run the loop starting from i=0 till i<N, incrementing the value of i for each time the loop runs. Each time the loop is run, if (i%2==0), meaning the number is even, ESum=ESum+i is executed. Otherwise, else block statement OSum=OSum+i is executed.`,
        YouTubeLink: "https://www.youtube.com/embed/IZ98-lDbzq8?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 32,
        value: `Write a C program to display all factors of a number using for loop.`,
        PreReq: ["FlowControl"],
        Objective: `
To calculate all factors of a number N, run the for loop starting from i=1 till i<=N, incrementing the value of i for each time the loop runs. Inside the loop, if (N%i==0), then i is a factor of N. The values of i is printed each time.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 33,
        value: `Write a C program to find GCD and LCM of two numbers using do while loop.`,
        PreReq: ["FlowControl"],
        Objective: `
In the do block, execute the  statements rem=a%b; a=b; b=rem; while remainder is greater than 0.
This will calculate the GCD which is stored in variable a. To calculate LCM, execute lcm = (temp1 * temp2)/a where a is the GCD of the two numbers.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 34,
        value: `Write a C program to print first 'N' fibonacci numbers using for loop.`,
        PreReq: ["FlowControl"],
        Objective: `
To calculate the first N fibonacci numbers, run the for loop starting from i=0 till i<N-2, incrementing the value of i each time the for loop runs. Inside the loop, fib=a+b is calculated and then printed. The statements a=b and b=fib are executed . The loop runs till the desired number of fibonacci numbers are calculated.`,
        YouTubeLink: "https://www.youtube.com/embed/AQCTrRKKxb4?rel=0&amp;showinfo=0",
        Input: "12345",
        Output: "98765"
    },
    {
        id: 35,
        value: `Write a C program to check whether a given number is palindrome or not using while  loop.`,
        PreReq: ["FlowControl"],
        Objective: `
To check whether a given number is a palindrome or not, first reverse digits of the number, then compare the reverse of the number with the number. Inside the while loop, statements to reverse the number are executed. Then out of the loop, the reverse is compared with the original number. If both are equal, then the number is a palindrome, otherwise not.`,
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