import styles from "./function.module.css";

export default function Function(){
    return (
        <div className={styles.page}>
            <h1>Functions in C</h1>
            <p>{`In c, a large program can be divided into basic building blocks known as function. The function contains the set of programming statements enclosed by {}. A function can be called multiple times to provide reusability and modularity to the C program. In other words, a collection of functions creates a program.

There are two types of functions in C programming:
 1. Standard Library Functions
 2 .User-Defined Functions
`}</p>
<h3>Standard Library Functions</h3>
<p>{`The standard library functions are built-in functions in C programming. These functions are defined in header files. For example,
 
 1. The printf() is a standard library function to send formatted output to the screen (display output on the screen). This function is defined in the stdio.h 
     header file. Hence, to use the printf()function, we need to include the stdio.h header file using #include <stdio.h>.
 2. The sqrt() function calculates the square root of a number. The function is defined in the math.h header file.  
`}</p>
<h3>User-Defined Functions</h3>
<p>Functions created by the user according to requirements are known as user-defined functions.
</p>
<h3>Advantages of user-defined function</h3>
<p>{`\u2022 The program will be easier to understand, maintain and debug.
\u2022 Reusable codes that can be used in other programs
\u2022 A large program can be divided into smaller modules. Hence, a large project can be divided among many programmers.
`}</p>
<h3>Defining a function</h3>
<textarea className={styles.multiline} readOnly rows="3">{`return_type function_name( parameter list ) {
   body of the function
}
`}</textarea> <br />
<span>A function definition in C programming consists of a function header and a function body. Here are all the parts of a function −
</span>
<h4>Return Type</h4>
<p> A function may return a value. The return_type is the data type of the value the function returns. Some functions perform the desired operations without returning a value. In this case, the return_type is the keyword void.
</p>
<h4>Function Name</h4>
<p> This is the actual name of the function. The function name and the parameter list together constitute the function signature.
</p>
<h4>Parameters</h4>
<p>A parameter is like a placeholder. When a function is invoked, a value is passed to the parameter. This value is referred to as an actual parameter or argument. The parameter list refers to the type, order, and number of the parameters of a function. Parameters are optional; that is, a function may contain no parameters.
</p>
<h4>Function Body</h4>
<p>The function body contains a collection of statements that define what the function does.
</p>
<h3>Function Declarations</h3>
<p>A function declaration tells the compiler about a function name and how to call the function. The actual body of the function can be defined separately.
</p>
<h4>Synatx:</h4>
<textarea className={styles.multiline} readOnly rows="1">{`return_type function_name( parameter list );
`}</textarea> <br />
<h3>Function Arguments</h3>
<p>{`While calling a function, there are two ways in which arguments can be passed to a function :

1. Call by Value
   This method copies the actual value of an argument into the formal parameter of the function. In this case, changes made to the parameter inside the 
   function have no effect on the argument.

2. Call by reference
   This method copies the address of an argument into the formal parameter. Inside the function, the address is used 
   to access the actual argument used in the call. This means that changes made to the parameter affect the argument.
`}</p>
        </div>
    );
}