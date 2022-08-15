const FocPrograms = [
    `#include <stdio.h>

    main()
    {
        int l, b, area;
    
        printf("Enter the length and breadth of the rectangle\\n");
        scanf("%d%d", &l, &b);
        area = l * b;
        printf("Area of the rectangle is %d", area);
    
    }
    `,

    `#include <stdio.h>
#define PI 3.142
main()
{
	float r, area, circum;

	printf("Enter the radius of the circle\\n");
	scanf("%f", &r);
	area = PI *r * r;
	circum = 2 *PI * r;
	printf("Area of circle is %f and circumfernce of circle is %f", area, circum);

}`,

`#include <stdio.h>

main()
{
	int a, b;

	printf("Enter two numbers \\n");
	scanf("%d%d", &a, &b);
	printf("Before swapping a is %d, b is %d\\n", a, b);
	a = a + b;
	b = a - b;
	a = a - b;
	printf("After swapping a is %d, b is %d", a, b);

}`,

`#include <stdio.h>

main()
{
	float p, t, r, si;

	printf("Enter the principal, time and rate of interest \\n");
	scanf("%f%f%f", &p, &t, &r);
	si = (p *t *r) / 100;
	printf("Simple Interest is  %f", si);

}`,

`#include <stdio.h>

main()
{
	float temp_c, temp_f;
	printf("Enter the value of Temperature in Celcius: ");
	scanf("%f", &temp_c);
	temp_f = (9 *temp_c) / 5 + 32;
	printf("The value of Temperature in Fahreinheit is: %f", temp_f);
	printf("\\n Enter the temperature in Fahrenheit: ");
	scanf("%f", &temp_f);

	temp_c = (temp_f - 32) / 1.8;
	printf("Celsius temperature is: %f C\\n\\n\\a", temp_c);
	getch();
}`,

`#include <stdio.h>

main()
{
	int a, b, temp;

	printf("Enter two numbers \\n");
	scanf("%d%d", &a, &b);
	printf("Before swapping a is %d, b is %d\\n", a, b);
	temp = a;
	a = b;
	b = temp;
	printf("After swapping a is %d, b is %d", a, b);
}`,

`#include <stdio.h>

main()
{
	int num, num1, a, b, c, d, sum = 0, rev = 0;
	clrscr():
		printf("Enter the 4 digit number\\n");
	scanf(" % d", &num);
	num1 = num;
	a = num % 10;
	num = num / 10;
	b = num % 10;
	num = num / 10;
	c = num % 10;
	num = num / 10;
	d = num % 10;
	sum = a + b + c + d;
	rev = (a *1000) + (b *100) + (c *10) + d;
	printf("the sum of the digits of number % d is % d", num1, sum);
	printf("The reverse of the number % d is % d", num1, rev);

}`,

`#include <stdio.h>

main()
{
	int num;
	printf("Enter the number\\n");
	scanf(" % d", &num);
	(num == 0) ? printf("The number is zero"): (num > 0) ? printf("The number is positive") : printf("The number is negative");

}`,

`#include <stdio.h>

main()
{
	int num;

	printf("Enter the number\\n");
	scanf(" % d", &num);
	(num % 2 == 0) ? printf("The number is even"): printf("The number is odd");

}`,

`#include <stdio.h>

main()
{
	int a, b, c;

	printf("Enter the three sides of triangle\\n");
	scanf(" % d % d % d", &a, &b, &c);
	((a == b) && (b == c)) ? printf("equilateral triangle"): (a == b || b == c || a == c) ? printf("isosceles triangle") : printf("scalene triangle");

}`,

`#include <stdio.h>

main()
{
	char ch;

	printf("Enter a lowercase letter\\n");
	scanf(" % c", &ch);
	(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') ? printf("the entered character is vowel"): printf("The entered character is consonant");

}`,

`#include <stdio.h>

main()
{
	int num;

	printf("Enter the number\\n");
	scanf(" % d", &num);
	(num % 4 == 0) && (num % 100 != 0) || (num % 400 == 0) ? printf("The entered year is leap year"): printf("The entered year is not leap year");

}`,

`#include<stdio.h>

main() {
  int a, b, c;

  printf("Enter the three numbers\ n");
  scanf(" % d % d % d", & a, & b, & c);
  (a > b) ? ((a > c) ? printf(" % d is largest", a) : printf("The % d is largest", c)) : ((b > c) ? printf(" % d is largest", b) : printf(" % d is largest", c));

}`,

`Without using built in functions

#include<stdio.h>

main() {
  char ch;

  printf("Enter a character\\n");
  scanf("%c", & ch);
  if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
    printf("\\n%c is an Alphabet", ch);
  else if (ch >= 48 && ch <= 56)
    printf("\\n%c is a Number", ch);
  else
    printf("\\nSpecial Character");

}

Using built in functions

#include<stdio.h>
#include<ctype.h>

main() {
  char ch;

  printf("Enter a character\\n");
  scanf("%c", & ch);
  if (isalpha(ch))
    printf("\\n%c is an Alphabet", ch);
  else if (isdigit(ch))
    printf("\\n%c is a Digit", ch);
  else
    printf("It is a special character\\n");

}
`,

`#include<stdio.h>

#include<ctype.h>

main() {
  char ch;
  if (isalpha(ch))
    printf(“the enterd character is an alphabet”);
  if (isdigit(ch))
    printf(“the enterd character is a digit”);
  if (ispunct(ch))
    printf(“the enterd character is punctuation”);
  if (isspace(ch))
    printf(“the enterd character is whitespace character”);

}
`,

`#include<stdio.h>

main() {
  int year;

  printf("Enter a Year");
  scanf("%d", & year);
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
    printf("\\n%d is a Leap Year", year);
  else
    printf("\\n%d is not a Leap Year", year);

}
`,

`#include<stdio.h>

main() {
  char ch;

  if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
    printf(“the entered character % c is vowel”, ch);
  else
    printf(“The entered character % c is consonant”, ch);
  getch()
}
`,

`#include<stdio.h>

main() {
  int num;

  if (num == 0)
    printf(“the number is zero”);
  else if (num > 0)
    printf(“the number is positive”);
  else
    printf(“the number is negative”);
}
`,

`#include<stdio.h>

main() {
  int a, b, c;

  printf("Enter 3 sides of a triangle");
  scanf("%d%d%d", & a, & b, & c);
  if (a == b && b == c && a == c)
    printf("\\nTriangle is Equilateral Triangle");
  else if ((a == b || a == c) || (b == a || b == c) || (c == a || c == b))
    printf("\\nTriangle is Isosceles Triangle");
  else
    printf("\\nTriangle is Scalene Triangle");

}
`,

`#include <stdio.h>

#include <math.h>

main() {
  float a, b, c;
  float disc, root1, root2;
  float real, imag;

  printf("\\n Enter the Coefficients of the Equation : ax2+bx+c=O ? : ");
  scanf("%f%f%f", & a, & b, & c);
  if (a == 0 || b == 0 || c == 0) /* Check for non-zero coefficients */
    printf("\\n\\n Error: Coefficients value must be Non-Zero...");
  else {
    disc = b * b - 4 * a * c;
    if (disc < 0) {
      /* Case: imaginary roots */
      printf("\\n\\n Roots are Imaginary...");
      real = -b / (2 * a);
      imag = sqrt(fabs(disc)) / (2 * a);
      printf("\\n\\n Complex Root1 = %7.4f +i %7.4f", real, imag);
      printf("\\n Complex Root2 = %7.4f -i %7.4f", real, imag);
    } else if (disc == 0) {
      /* Case: real and identical roots */
      printf("\\n\\n Roots are Real & Identical...");
      root1 = -b / (2 * a);
      root2 = root1;
      printf("\\n\\n Root1 = %7.4f", root1);
      printf("\\n Root2 = %7.4f", root2);
    } else {
      /* Case: real and distinct roots */
      printf("\\n\\n Roots are Real & Distinct...");
      root1 = (-b + sqrt(disc)) / (2 * a);
      root2 = (-b - sqrt(disc)) / (2 * a);
      printf("\\n\\n Root1 = %7.4f", root1);
      printf("\\n Root2 = %7.4f", root2);
    }
  }

}
`,
`#include<stdio.h>

#include<stdlib.h>

main() {
  long int m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0, m6 = 0;
  long int perce = 0;

  printf("Enter the marks for 6 subjects");
  scanf("%ld%ld%ld%ld%ld%ld", & m1, & m2, & m3, & m4, & m5, & m6);
  perce = ((m1 + m2 + m3 + m4 + m5 + m6) * 100 / 600);
  if ((m1 < 50) || (m2 < 50) || (m3 < 50) || (m4 < 50) || (m5 < 50) || (m6 < 50)) {
    printf("Fail");

    exit(0);
  }
  printf("\\nPercentage : %ld\\n", perce);
  if (perce >= 90)
    printf("\\n S grade");
  else if (perce >= 80)
    printf("\\n A grade");
  else if (perce >= 70)
    printf("\\n B grade");
  else if (perce >= 60)
    printf("\\n C grade");
  else if (perce >= 50)
    printf("\\n D grade");
  else
    printf("\\n Fail");

}`,

`#include<stdio.h>

main() {
  int a, b, c;

  printf("Enter 3 numbers");
  scanf("%d%d%d", & a, & b, & c);
  if (a > b) {
    if (a > c)
      printf("\\n%d is largest", a);
    else
      printf("\\n%d is largest", c);
  } else {
    if (b > c)
      printf("\\n%d is largest", b);
    else
      printf("\\n%d is largest", c);
  }

}`,

`#include<stdio.h>

#include<stdlib.h>

main() {
  float a = 0, b = 0, result = 0;
  char opcode;

  printf("Enter 2 Numbers");
  scanf("%f%f", & a, & b);
  fflush(stdin);
  printf("\\nEnter + to add\\n - to subtract\\n * to multiply\\n / to divide");
  scanf("%c", & opcode);
  switch (opcode) {
  case '+':
    result = a + b;
    printf("\\nSum of %f & %f is : %f", a, b, result);
    break;
  case '-':
    result = a - b;
    printf("\\nSubtraction of %f & %f is : %f", a, b, result);
    break;
  case '*':
    result = a * b;
    printf("\\nMultiplication of %f & %f is : %f", a, b, result);
    break;
  case '/':
    if (b == 0) {
      printf("Divide By Zero Error\\n");
      exit(0);
    } else {
      result = a / b;
      printf("\\nDivision of %f & %f is : %f", a, b, result);
    }
    break;
  default:
    printf("\\nInvalid Operator");
  }

}`,

`#include <stdio.h>

#include <math.h>

#include <.h>

main() {
  float a, b, c;
  float disc, root1, root2;
  float real, imag;
  int ch = 0;

  printf("\\n Enter the Coefficients of the Equation : ax2+bx+c=O ? : ");
  scanf("%f%f%f", & a, & b, & c);
  if (a == 0 || b == 0 || c == 0) /* Check for non-zero coefficients */
    printf("\\n\\n Error: Coefficients value must be Non-Zero...");
  else {
    disc = b * b - 4 * a * c;
    if (disc < 0)
      ch = 1;
    else if (disc == 0)
      ch = 2;
    else
      ch = 3;
    switch (ch) {
    case 1:
      /* Case: imaginary roots */
      printf("\\n\\n Roots are Imaginary...");
      real = -b / (2 * a);
      imag = sqrt(fabs(disc)) / (2 * a);
      printf("\\n\\n Complex Root1 = %7.4f +i %7.4f", real, imag);
      printf("\\n Complex Root2 = %7.4f -i %7.4f", real, imag);
      break;
    case 2:
      /* Case: real and identical roots */
      printf("\\n\\n Roots are Real & Identical...");
      root1 = -b / (2 * a);
      root2 = root1;
      printf("\\n\\n Root1 = %7.4f", root1);
      printf("\\n Root2 = %7.4f", root2);
      break;
    case 3:
      /* Case: real and distinct roots */
      printf("\\n\\n Roots are Real & Distinct...");
      root1 = (-b + sqrt(disc)) / (2 * a);
      root2 = (-b - sqrt(disc)) / (2 * a);
      printf("\\n\\n Root1 = %7.4f", root1);
      printf("\\n Root2 = %7.4f", root2);
      break;
    default:
      printf("Invalid Choice");
    } /*End of Switch*/
  }

} /* End of main( ) */`,

`#include<stdio.h>

main() {
  char ch;

  printf("Enter the alphabet\\n");
  ch = getchar();
  switch (ch) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    printf("Alphatbet is vowel");
    break;
  default:
    printf("Alphabet is consonant");
  }

}`,

`#include<stdio.h>

#define PI 3.147
main() {
  float radius = 0, length = 0, breadth = 0;
  float base = 0, height = 0, area = 0;
  int choice = 0;

  printf("Enter \\n1 to find area of triangle\n2 to find area of Square");
  printf("\\n3 to find area of circle\n4 to find area of rectangle\n");
  scanf("%d", & choice);
  switch (choice) {
  case 1:
    printf("\\nEnter base & height of a triangle");
    scanf("%f%f", & base, & height);
    area = (1.0 / 2) * base * height;
    printf("\\nArea of Triangle : %f", area);
    break;
  case 2:
    printf("\\nEnter length of a Square");
    scanf("%f", & length);
    area = length * length;
    printf("\\nArea of Square : %f", area);
    break;
  case 3:
    printf("\\nEnter the radius of a Circle");
    scanf("%f", & radius);
    area = PI * radius * radius;
    printf("\\nArea of Circle : %f", area);
    break;
  case 4:
    printf("\\nEnter the length & breadth of a Rectangle");
    scanf("%f%f", & length, & breadth);
    area = length * breadth;
    printf("\\nArea of Rectangle : %f", area);
    break;
  default:
    printf("\\nInvalid Choice");
  }

}`,

`#include<stdio.h>


main() {
  int a, b, c, d, e, f, total, per = 0, ch;

  printf("Enter the marks in 6 subjects\\n");
  scanf("%d%d%d%d%d%d", & a, & b, & c, & d, & e, & f);
  if ((a < 40) || (b < 40) || (c < 40) || (d < 40) || (e < 40) || (f < 40))
    printf("Grade is F");
  else {
    total = a + b + c + d + e + f;
    per = total / 6;
    printf("total = %d\\n", total);
    printf("per=%d\\n", per);
    ch = per / 10;
    switch (ch) {
    case 10:
    case 9:
    case 8:
      printf("Grade is S");
      break;
    case 7:
      printf("Grade is A");
      break;
    case 6:
      printf("Grade is B");
      break;
    case 5:
      printf("Grade is C");
      break;
    case 4:
      printf("Grade is D");
      break;
    default:
      printf("Invalid marks");
    }
  }

}`,

`#include<math.h>

#include<stdio.h>

main() {
  int x, y;
  int count;

  count = 1;
  printf("Enter Five Real values in a line\\n");
  read:
    scanf("%d", & x);
  if (x < 0) {
    printf(“Entered Value is negative\ n”);
    goto negative; //forward jump
  } else {
    y = sqrt(x);
    printf("x=%d\\tsqrt(x)=%d\\n", x, y);
  }
  negative:
    count = count + 1;
  if (count <= 5)
    goto read; // backward jump
  printf("\\n End of computation\\n");

}
`,

`#include<stdio.h>

main() {
  int N = 0;
  int i = 0;
  long int fact = 1;

  printf("Enter a Number\\n");
  scanf("%d", & N);
  i = N;
  if (N == 0) {
    printf("\\nFactorial of %d is : 1", N);

    exit(0);
  } else {
    for (i = N; i >= 1; i--)
      fact = fact * i;
    printf("\\nFactorial of %d is : %ld", N, fact);
  }

}`,

`#include<stdio.h>


main() {
  int i, sum = 0, n;
  printf(“Enter the numbers”);
  scanf(“ % d”, & n);
  for (i = 0; i < n; i++)
    sum += i;
  printf(“the sum of 1 st n natural no' s is % d”, sum);
}`,

`#include<stdio.h>

main() {
  int n, i, OSum = 0, ESum = 0;

  printf("Enter the value of N\\n");
  scanf("%d", & n);
  for (i = 0; i <= n; i++) {
    if (i % 2 == 0)
      ESum = ESum + i;
    else
      OSum = OSum + i;
  }
  printf("\\nSum of Even Numbers from 1 to %d is : %d", n, ESum);
  printf("\\nSum of Odd Numbers from 1 to %d is : %d", n, OSum);

}`,

`#include<stdio.h>

int main() {
  int n, I;
  printf(“enter a positive integer”);
  scanf(“ % d”, & n);
  printf(“Factors of % d are: “, n);
  for (i = 1; i <= n; i++) {
    if (n % i == 0)
      printf(“ % d”, i);
  }
  return 0;
}`,

`#include<stdio.h>

main() {
  int a = 0, b = 0, rem = 0, lcm = 0;
  int temp1 = 0, temp2 = 0;

  printf("Enter 2 numbers\\n");
  scanf("%d%d", & a, & b);
  temp1 = a;
  temp2 = b;
  do {
    rem = a % b;
    a = b;
    b = rem;
  } while (rem);
  printf("\\nGCD of %d and %d is : %d", temp1, temp2, a);
  lcm = (temp1 * temp2) / a;
  printf("\\nLCM of %d and %d is : %d", temp1, temp2, lcm);

}`,

`#include<stdio.h>

main() {
  int i = 0, n = 0;
  int a = 0, b = 1, fib = 0;

  printf("Enter a Number\\n");
  scanf("%d", & n);
  if (n <= 0) {
    printf("\\nInvalid Input");
    exit(0);
  }
  printf("\\nFibonacci Series :\\n\\n");
  if (n == 1)
    printf("%d\\t", a);
  else if (n >= 2) {
    printf("%d\\t", a);
    printf("%d\\t", b);
    for (i = 0; i < n - 2; i++) {
      fib = a + b;
      printf("%d\\t", fib);
      a = b;
      b = fib;
    }
  }
  printf("\\n\\nFibanocci Series Ends");

}`,

`#include<stdio.h>

main() {
  int rem = 0, temp = 0;
  int num1 = 0, num2 = 0;

  printf("Enter 4-Digit Number\\n");
  scanf("%d", & num1);
  temp = num1;
  while (temp) {
    rem = temp % 10;
    num2 = (num2 * 10) + rem;
    temp = temp / 10;
  }
  if (num1 == num2)
    printf("\\n%d is a Palindrome Number", num1);
  else
    printf("\\n%d is not a Palindrome Number", num1);

}`,

`#include <stdio.h>

main()
{
	int i;
	float x, sum, average;

	printf("Enter values one after another\\n");
	printf("Enter a negative number to end the program\\n");
	sum = 0;
	for (i = 0; i < 1000; i++)
	{
		scanf("%f", &x);
		if (x < 0)
			break;
		if (x == 0)
			continue;
		sum += x;
	}

	average = sum / (float)(i - 1);
	printf("\\nNumber of Values = %d\\n", i);
	printf("Sum = %f\\n", sum);
	printf("Average = %f\\n", average);

}`,

`#include <stdio.h>

main()
{
	int arr[20];
	int i = 0, sum = 0, size;

	printf("Enter the size of the array");
	scanf("%d", &size);
	printf("\\nEnter %d elements into Array", size);
	for (i = 0; i < size; i++)
		scanf("%d", &arr[i]);
	printf("\\nArray Elements are :\\n");
	for (i = 0; i < size; i++)
		printf("%d\t", arr[i]);
	for (i = 0; i < size; i++)
		sum = sum + arr[i];
	printf("\\n\\nSum of Array Elements : %d", sum);

}`,

`#include <stdio.h>

main()
{
	int arr[20];
	int i = 0, size = 0;
	int key = 0, flag = 0;

	printf("Enter the size of the array");
	scanf("%d", &size);
	printf("\\nEnter %d elements into Array", size);
	for (i = 0; i < size; i++)
		scanf("%d", &arr[i]);
	printf("\\nArray Elements are :\\n");
	for (i = 0; i < size; i++)
		printf("%d\t", arr[i]);
	printf("\\nEnter the element to search in the array");
	scanf("%d", &key);
	for (i = 0; i < size; i++)
	{
		if (key == arr[i])
		{
			flag = 1;
			break;
		}
	}

	if (flag == 1)
		printf("\\n%d is found at position %d", key, i + 1);
	else
		printf("\\nKey not found");

}`,

`#include <stdio.h>

main()
{
	int arr[20];
	int i = 0, size = 0;
	int key = 0, flag = 0;
	int high = 0, low = 0, mid = 0;

	printf("Enter the size of the array");
	scanf("%d", &size);
	printf("\\nEnter %d elements into Array in ascending order", size);
	for (i = 0; i < size; i++)
		scanf("%d", &arr[i]);
	printf("\\nArray Elements are :\\n");
	for (i = 0; i < size; i++)
		printf("%d\t", arr[i]);
	printf("\\nEnter the element to search in the array\\n");
	scanf("%d", &key);
	high = size - 1;
	low = 0;
	while (low <= high)
	{
		mid = (high + low) / 2;
		if (key > arr[mid])
		{
			low = mid + 1;
		}

		if (key < arr[mid])
		{
			high = mid - 1;
		}

		if (key == arr[mid])
		{
			flag = 1;
			break;
		}
	}

	if (flag == 1)
		printf("\\n%d is found at position %d", key, mid + 1);
	else
		printf("\\nKey not found");

}`,

`#include <stdio.h>

main()
{
	int a[10], i, j, temp, n;

	printf("Enter the no. of elements in an array\\n");
	scanf("%d", &n);
	printf("Enter elements of the array\\n");
	for (i = 0; i < n; i++)
		scanf("%d", &a[i]);
	printf("The elements of array before sorting are\\n");
	for (i = 0; i < n; i++)
		printf("%d\t", a[i]);
	for (i = 0; i < n - 1; i++)
		for (j = 1; j < n - i; j++)
			if (a[j] < a[j - 1])
			{
				temp = a[j];
				a[j] = a[j - 1];
				a[j - 1] = temp;
			}

	printf("\\nThe elements of array before sorting are\\n");
	for (i = 0; i < n; i++)
		printf("%d\t", a[i]);

}`,

`#include <stdio.h>

main()
{
	int a[10][10], b[10][10], c[10][10];
	int i = 0, j = 0;
	int rows = 0, cols = 0;
	int rows1 = 0, cols1 = 0;

	printf("Enter the number of rows &columns for the first matrix\\n");
	scanf("%d%d", &rows, &cols);
	printf("\\n Enter the elements for the First Matrix:\\n");
	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			scanf("%d", &a[i][j]);
		}
	}

	printf("\\n Enter the number of rows &columns for the second matrix\\n");
	scanf("%d%d", &rows1, &cols1);
	printf("\\n Enter the elements for the Second Matrix:\\n");
	for (i = 0; i < rows1; i++)
	{
		for (j = 0; j < cols1; j++)
		{
			scanf("%d", &b[i][j]);
		}
	}

	if (rows != rows1 || cols != cols1)
	{
		printf("\\n Addition can not be performed\\n");
		exit(0);
	}

	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			c[i][j] = a[i][j] + b[i][j];
		}
	}

	printf("\\n The first matrix: ");
	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			printf("%d\t", a[i][j]);
		}

		printf("\\n");
	}

	printf("\\n The second matrix: ");
	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			printf("%d\t", b[i][j]);
		}

		printf("\\n");
	}

	printf("\\n Resultant Matrix is :\\n");
	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			printf("%d\t", c[i][j]);
		}

		printf("\\n");
	}
}`,

`#include <stdio.h>

main()
{
	int a[10][10], b[10][10], i, j, row, col;
	printf("\\nEnter no. of rows &columns: ");
	scanf("%d %d", &row, &col);
	printf("\\nEnter elements of Matrix:\\n");
	for (i = 0; i < row; i++)
		for (j = 0; j < col; j++)
			scanf("%d", &a[i][j]);
	printf("\\n\\nElements of Matrix:\\n\\n");
	for (i = 0; i < row; i++)
	{
		for (j = 0; j < col; j++)
			printf("\t%d", a[i][j]);
		printf("\\n");
	}

	printf("\\n\\nTranspose of Matrix:\\n\\n");
	for (i = 0; i < row; i++)
	{
		for (j = 0; j < col; j++)
			b[j][i] = a[i][j];
	}

	for (i = 0; i < col; i++)
	{
		for (j = 0; j < row; j++)
			printf("\t%d", b[i][j]);
		printf("\\n");
	}
}`,

`#include <stdio.h>
#include <math.h>

main()
{
	int a[10][10];
	int i = 0, j = 0;
	int rows = 0, cols = 0;
	int trace = 0, norm = 0;

	printf("Enter the number of rows &columns for the first matrix\\n");
	scanf("%d%d", &rows, &cols);
	printf("\\nEnter the elements for the First Matrix:\\n");
	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			scanf("%d", &a[i][j]);
		}
	}

	printf("\\nMatrix is :\\n");
	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			printf("%d\t", a[i][j]);
		}

		printf("\\n");
	}

	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < cols; j++)
		{
			if (i == j)
				trace = trace + a[i][j];
			norm += pow(a[i][j], 2);
		}
	}

	norm = sqrt(norm);
	printf("\\n Trace of the Entered Matrix : %d", trace);
	printf("\\n Norm of the Entered Matrix : %d", norm);

}`,

`#include <stdio.h>

main()
{
	int a[10][10], i, j, row, col, flag = 0;
	printf("\\nEnter no. of rows &columns: ");
	scanf("%d %d", &row, &col);
	printf("\\nEnter elements of Matrix:\\n");
	for (i = 0; i < row; i++)
		for (j = 0; j < col; j++)
			scanf("%d", &a[i][j]);
	printf("\\n\\nElements of Matrix:\\n\\n");
	for (i = 0; i < row; i++)
	{
		for (j = 0; j < col; j++)
			printf("\t%d", a[i][j]);
		printf("\\n\\n");
	}

	for (i = 0; i < col; i++)
	{
		for (j = 0; j < row; j++)
			if (a[j][i] != a[i][j]) flag = 1;
	}

	if (flag == 1)
		printf("Not symmetric");
	else
		printf("Symmetric");
}`,

`#include <stdio.h>

main()
{
	char str[20], c;
	int i = 0;

	printf("\\n Enter the String\\n");
	gets(str);
	printf("\\n\\nEntered string is %s\\n", str);
	while (str[i] != '\0')
		i++;
	printf("\\n Length of the entered string is : %d", i);

}`,

`#include <stdio.h>

main()
{
	char str1[10], str2[10];
	int i;
	clrscr();
	printf("Enter the string\\n");
	gets(str1);
	for (i = 0; str1[i] != '\0'; i++)
		str2[i] = str1[i];
	str2[i] = '\0';
	printf("Copied String is : ");
	puts(str2);

}`,

`#include <stdio.h>

main()
{
	char str1[10], str2[10];
	int i;
	clrscr();
	printf("Enter the string\\n");
	gets(str1);
	for (i = 0; str1[i] != '\0'; i++)
		str2[i] = str1[i];
	str2[i] = '\0';
	printf("Copied String is : ");
	puts(str2);

}`,

`#include <stdio.h>

main()
{
	char str1[20], str2[20];
	int i, j, flag = 1;

	printf("\\nEnter the First String\\n");
	gets(str1);
	printf("\\nEnter the Second String\\n");
	gets(str2);
	i = 0;
	j = 0;
	while (str1[i] != '\0' || str2[j] != '\0')
	{
		if (str1[i] != str2[j])
		{
			flag = 0;
			break;
		}

		i++;
		j++;
	}

	if (flag == 1)
	{
		printf("\\n Strings are equal");
	}
	else
		printf("\\n Strings are not equal");

}`,

`#include <stdio.h>

main()
{
	char str1[20], str2[20];
	int i, j, flag = 1;

	printf("\\nEnter the First String\\n");
	gets(str1);
	printf("\\nEnter the Second String\\n");
	gets(str2);
	i = 0;
	j = 0;
	while (str1[i] != '\0' || str2[j] != '\0')
	{
		if (str1[i] != str2[j])
		{
			flag = 0;
			break;
		}

		i++;
		j++;
	}

	if (flag == 1)
	{
		printf("\\n Strings are equal");
	}
	else
		printf("\\n Strings are not equal");

}`,

`#include <stdio.h>
#include <string.h>

main()
{
	char str[20], str1[20], str2[20], str3[20];
	int i = 0;

	printf("\\nEnter a string\\n");
	gets(str);
	strcpy(str1, str);
	printf("\\nCopied string is : %s\\n", str1);
	printf("\\nEnter a string\\n");
	gets(str2);
	if ((strcmp(str, str2)) == 0)
		printf("\\nStrings are equal\\n");
	else
		printf("\\nStrings are not equal\\n");
	i = strlen(str);
	printf("\\nLength of string %s is : %d\\n", str, i);
	printf("\\nConcatenated String is : %s\\n", strcat(str, str2));

}`,

`#include <stdio.h>

int fact(int num);
main()
{
	int n, factorial;

	printf("Enter the number\\n");
	scanf("%d", &n);
	if (n == 0)
	{
		printf("Factorial of %d is : 1", n);
	}
	else
	{
		factorial = fact(n);
		printf("Factorial of %d is : %d", n, factorial);
	}
}

int fact(int num)
{
	int i, f = 1;
	for (i = 1; i <= num; i++)
		f = f * i;
	return (f);
}`,

`#include <stdio.h>

void gcd_lcm(int m, int n);
main()
{
	int x, y;
	clrscr();
	printf("Enter two numbers\\n");
	scanf("%d%d", &x, &y);
	gcd_lcm(x, y);
	getch();
}

void gcd_lcm(int m, int n)
{
	int p, q, gcd, lcm, r;
	p = m;
	q = n;
	while (n != 0)
	{
		r = m % n;
		m = n;
		n = r;
	}

	gcd = m;
	lcm = p *q / gcd;
	printf("GCD of %d and %d is : %d\\n", p, q, gcd);
	printf("LCM of %d and %d is : %d\\n", p, q, lcm);
}`,

`#include <stdio.h>

int palin();
main()
{
	int flag = 0;
	clrscr();
	flag = palin();
	if (flag == 1)
		printf("Number is a palindrome\\n");
	else
		printf("Number is not a palindrome\\n");

}

int palin()
{
	int m, rev = 0, digit, num;
	printf("Enter the number ");
	scanf("%d", &num);
	m = num;
	while (num != 0)
	{
		digit = num % 10;
		num = num / 10;
		rev = rev *10 + digit;
	}

	printf("Reversed number is : %d\\n", rev);
	if (m == rev)
		return (1);
	else
		return (0);
}`,

`#include <stdio.h>

void triangle();

main()
{
	triangle();

}

void triangle()
{
	int a, b, c;
	printf("Enter the sides of the triangle\\n");
	scanf("%d%d%d", &a, &b, &c);
	if (a == b && b == c)
		printf("The triangle is equilateral\\n");
	else if ((a == b) || (b == c) || (c == a))
		printf("The triangle is isosceles\\n");
	else
		printf("The triangle is scalene\\n");

}`,

`#include <stdio.h>

void func1(void);
void func2(void);

main()
{
	int m = 1000;
	func2();

	printf("%d\\n", m);
}

void func1(void)
{
	int m = 10;
	printf("%d\\n", m);
}

void func2()
{
	int m = 100;
	func1();
	printf("%d\\n", m);
}`,

`#include <stdio.h>

int fun1(void);
int fun2(void);
int fun3(void);

int x;	//global

main()
{
	x = 10;
	printf("x=%d\\n", x);
	printf("x=%d\\n", fun1());
	printf("x=%d\\n", fun2());
	printf("x=%d\\n", fun3());

}

fun1(void)
{
	x = x + 10;
}

int fun2()
{
	int x;	//local
	x = 1;
	return x;
}

fun3(void)
{
	x = x + 10;
}`,

`#include <stdio.h>

void stat(void);

main()
{
	int i;

	for (i = 1; i <= 3; i++)
		stat();

}

void stat(void)
{
	static int x = 0;
	x = x + 1;
	printf("x=%d\\n", x);
}`,

`#include <stdio.h>

struct class
{
	int number;
	char name[20];
	float marks;
};

main()
{
	int x;
	struct class std1 = { 11, "PQR", 88.5
	};
	struct class std2 = { 12, "STU", 78.5
	};
	struct class std3;

	std3 = std2;
	x = ((std3.number == std2.number) && (std3.marks == std2.marks)) ? 1 : 0;

	if (x == 1)
	{
		printf("\\n Student2 &student3 are same\\n");
		printf("%d\t%s\t%f\\n", std3.number, std3.name, std3.marks);
	}
	else
		printf("Student2 &student3 are different");
	printf("\\nStudent1 Details\\n");
	printf("%d\t%s\t%f\\n", std1.number, std1.name, std1.marks);

}`,

`#include <stdio.h>

struct marks
{
	int sub1;
	int sub2;
	int sub3;
	int total;
};
main()
{
	int i;
	struct marks std[3] = {
		{ 45, 67, 81, 0 },
		{ 75, 53, 69, 0 },
		{ 57, 36, 71, 0 }
	};
	struct marks total = { 0 };

	for (i = 0; i <= 2; i++)
	{
		std[i].total = std[i].sub1 + std[i].sub2 + std[i].sub3;
	}

	printf("\\nStudent Total\\n");
	for (i = 0; i <= 2; i++)
	{
		printf("Student[%d] %d\\n", i + 1, std[i].total);
	}
}`,

`#include <stdio.h>

main()
{
	int *p;
	int arr[20], sum = 0;
	int i = 0, n;

	printf("\\nEnter the size of the array");
	scanf("%d", &n);
	printf("Enter the array elements\\n");
	for (i = 0; i < n; i++)
		scanf("%d", &arr[i]);
	p = arr;
	for (i = 0; i < n; i++)
	{
		sum = sum + (*p);
		p++;
	}

	printf("\\nSum : %d", sum);

}`,

`#include <stdio.h>

main()
{
	int *p, *q;
	int a = 0, b = 0;
	int temp;

	printf("\\nEnter two numbers");
	scanf("%d%d", &a, &b);
	p = &a;
	q = &b;
	printf("\\nBefore Swapping\\n");
	printf("a : %d\\nb : %d\\n", a, b);
	temp = *p;
	*p = *q;
	*q = temp;
	printf("\\nAfter Swapping\\n");
	printf("a : %d\\nb : %d\\n", a, b);

}`,

`#include <stdio.h>

main()
{
	int length = 0;
	char *p;
	char str[20];

	printf("\\nEnter a string\\n");
	scanf("%s", str);
	p = str;
	while ((*p) != '\0')
	{
		length++;
		p++;
	}

	printf("\\nLength of the %s is : %d", str, length);

}`,

`#include <stdio.h>

main()
{
	FILE * fp;
	fp = fopen("Student.DAT", "r");
	if (fp == NULL)
	{
		printf("\\n The file could not be open");
		exit(1);
	}
}`,

`#include <stdio.h>

main()
{
	FILE * fp;
	char name[80];
	int roll_no;
	fp = fopen("Student.dat", "r");
	if (fp == NULL)
	{
		printf("\\n The file couldnot be opened");
		exit(1);
	}

	printf("\\n Enter the name and roll number of the student: ");
	fscanf(stdin, " % s % d", name, &roll_no);
	printf("\\n Name: % s\\t ROLL NUMBER = % d", name, roll_no);
	fclose(fp);
	return 0;
}`,

`#include <stdio.h>

main()
{
	FILE * fp;
	int i;
	char namr[20];
	fp = fopen("Details.TXT", "w");
	if (fp == NULL)
	{
		printf("\\n The file could not be open");
		exit(1);
	}

	for (i = 0; i < 10; i++)
	{
		puts("\\n Enter your name;");
		gets(name);
		fflush(stdin);
		puts("\\n enter your name: ");
		scanf(" % f", &salary);
		fprintf(fp, "(% d) NAME:[ % -10.10 s]\\t SALARY % 5.2 f", I, name, salary);
	}

	fclose(fp);
}`
]

export default FocPrograms;