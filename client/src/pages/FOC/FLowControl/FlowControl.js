import styles from "./flowcontrol.module.css";
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
import img6 from "./img6.png"
import img7 from "./img7.png"
import img8 from "./img8.png"
import img9 from "./img9.png"
import img10 from "./img10.png"
import img11 from "./img11.png"
import img12 from "./img12.png"

export default function FlowControl() {
    return (
        <div className={styles.page}>
            <h1>Flow Control</h1>
            <p>Control Structure, also known as Control Flow, describes the order in which each statement is going to be executed.</p>
            <h3>1. Sequential Flow</h3>
            <p>The statements are executed in a sequence or order and each statement is executed exactly once.</p>
            <h3>2. Conditional Flow</h3>
            <p>{`In Conditional Flow, whether execution of a particular statement(s) happens or not is dependent on another statement that specifies a condition.
For example, if, if-else and switch.`}</p>
            <h3>3. Iterative Flow</h3>
            <p>{`The flow by which a user can execute a particular statement(s) number of times without rewriting them, also known as Looping statements.
For example, for loop, while loop and do-while loop.`}</p>
            <h3>4. Jump Statements</h3>
            <p>{`These are statements to interrupt the flow and move to other statements as per requirement.
For example, break, continue, goto and return.`}</p>
            <h2> Types of Conditional Statement</h2>
            <h3>1. If statement</h3>
            <p>{`The single if statement in C language is used to execute the code if a condition is true. It is also called a one-way selection statement. When the if statement is used, the argument is passed and if the argument is satisfied then the respective code will be executed.`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="4">{`if(expression)
{
 //code to be executed
}

`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "25%" }} src={img1} alt="if" /><br />
            <p style={{ textAlign: "center" }}>{`If the expression is evaluated to nonzero (true) then if block statement(s) are executed. 
If the expression is evaluated to zero (false) then Control passes to the next statement following it.
`}</p>
            <h3>2. If-Else statement</h3>
            <p>{`The if-else statement in C language is used to execute the code if the condition is true or false. It is also called a two-way selection statement.
By using the if statement, only one block of the code executes after the condition is true but by using the if-else statement, there are two possible blocks of code where the first block is used for handling the success part and the other one for the failure condition.
`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="8">{`if(expression)
{
 //Statements
}
else
{
 //Statements
}

`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "28%" }} src={img2} alt="if-else" /><br />
            <p style={{ textAlign: "center" }}>{`If the expression is evaluated to nonzero (true) then if block statement(s) are executed.
 If the expression is evaluated to zero (false) then else block statement(s) are executed.`}</p>
            <h3>3. Nested If-else statement</h3>
            <p>{`The nested if...else statement is used when a program requires more than one test expression. It is also called a multi-way selection statement. When a series of  decisions are involved in a statement, the if-else statement in nested form is used.`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="15">{`if( condition 1 )
       {  
          if( condition 2 )
            {
                 statement-block 1;
             }
          else 
             {
                  statement-block 2;
              }
         }
else
     {
        statement-block 3;
       }
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "45%" }} src={img3} alt="nested-if-else" /><br />
            <p style={{ textAlign: "center" }}>{`If condition 1 is true, then the control executes the if block statements. Inside the if block, if condition 2 is true, the statements inside the second if block are executed. If condition 2 is false, then statements inside the else block are executed. If condition 1 is false, then the control goes to the second else block.
`}</p>
            <h3>4. If-Else If ladder</h3>
            <p>{`The if-else-if statement is used to execute one code from multiple conditions. It is also called a multipath decision statement. It is a chain of if..else statements in which each if statement is associated with an else if statement and the last would be an else statement.`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="16">{`if(condition1)
{
 //statements
} 
else if(condition2)
{
 //statements
}
else if(condition3)
{
 //statements
}
else
{
 //statements
}
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "28%" }} src={img4} alt="else-if" /><br />
            <h3>5. Switch statement</h3>
            <p>{` A Switch statement acts as a substitute for a long if-else-if ladder that is used to test a list of cases. A switch statement contains one or more case labels that are tested against the switch expression. When the expression matches a case then the associated statements with that case would be executed.
`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="16">{`Switch (expression)
{
 case value 1:
       //Statements 
        break;
 case value 2:
       //Statements
        break; 
 case value 3:
       //Statements 
 case value n:
       //Statements
        break;
 Default:
      //Statements
}
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "28%" }} src={img5} alt="switch" /><br />
            <h4>Note:</h4>
            <p>{`\u2022 The switch statement must be an integral type.
\u2022 Case labels must be constants.
\u2022 Case labels must be unique.
\u2022 Case labels must end with a colon.
\u2022 The break statement transfers the control out of the switch statement.
\u2022 The break statement is optional.`}</p>
<h3>6. Conditional Operator</h3>
  <p>{`The conditional operator is also known as a ternary operator. The conditional statements are the decision-making statements which depends upon the output of the expression. It is represented by two symbols, i.e., '?' and ':'.`}</p>
  <h4>Synatx:</h4>
  <textarea className={styles.multiline} readOnly rows="1">{`Expression1? expression2: expression3;  
`}</textarea> <br />
<img className={styles.fcimg} src={img12} alt="ternary" /><br />
            <h2>Types of Iterative Statements</h2>
            <h3>1. For Loop</h3>
            <p>{`It executes the set of statements until the time a particular condition is accomplished. It is known as the Open-ended loop. In For loop,there can be  more than one initialization or increment/decrement, separated using a comma operator and one condition as well. For loop is used to evaluate the initialization part first, and then it checks the condition for true or false. If the condition is true, then it executes the set of statements of for loop. After that, it evaluates the increment or decrement condition until the condition becomes false, it repeats the same steps. It will exit the loop when the condition is false. It is an entry controlled loop.
`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="4">{`for (initial value; condition; incrementation or decrementation )
{
statements;
}
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "20%" }} src={img6} alt="for-loop" /><br />
            <h3>2. While Loop</h3>
            <p>{`In this, the condition is evaluated before processing the body of the loop. If the condition is true, then only the body of the loop is executed. Then the control goes back to the beginning after completing the loop once. The statements in the loop will be executed again, and if the condition is true and checked, then this process goes on until the condition becomes false. If the condition is false, the control will go out of the loop. After completion of the loop, the control will go to the statement that is immediately after the loop, and the body can contain more than one statement. The curly braces are not that important if it contains only one statement. If the condition is not true in the while loop, then loop statements won’t get executed. It is an entry controlled loop.
`}</p>
            <h4>Synatx:</h4>
            <textarea className={styles.multiline} readOnly rows="3">{`while(condition){  
//code to be executed  
}
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "23%" }} src={img7} alt="while-loop" /><br />
            <h3>3. Do While Loop</h3>
            <p>{`In this loop, the statements in the loop need to be executed at least once. After that, it checks the condition. If the condition is true, then it will again have executed the loop; otherwise, it will exit the loop. It is known as an exit controlled loop. It is similar to a while loop, and in this, the condition is always executed after the body of the loop. In do-while, the condition is mentioned at the end, and it ends with a semicolon (;). It is an exit controlled loop.
`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="3">{`do {
 //statements
} while (expression);
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "18%" }} src={img8} alt="do-while-loop" /><br />
            <h2>Types of Jump Statements</h2>
            <h3>1. Continue</h3>
            <p>{`The continue statement is used to bring the program control to the beginning of the loop. The continue statement skips some lines of code inside the loop and continues with the next iteration. 
`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="3">{`//loop statements  
      continue;  
 //some lines of the code which is to be skipped  
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "30%" }} src={img9} alt="continue" /><br />
            <h3>2. Break</h3>
            <p>{`The break keyword in C is used to bring the program control out of the loop. The break statement is used inside loops or switch statements. The break statement breaks the loop one by one, i.e., in the case of nested loops, it breaks the inner loop first and then proceeds to outer loops. 
`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="2">{`//loop or switch case   
break;  
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "30%" }} src={img10} alt="break" /><br />
            <h3>3. Goto Statement</h3>
            <p>{`Goto statement is used to transfer the program control to a predefined label. The goto statement can be used to repeat some part of the code for a particular condition. It can also be used to break the multiple loops which can't be done by using a single break statement.`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="3">{`label:   
     //some part of the code;   
    goto label;  
`}</textarea> <br />
            <img className={styles.fcimg} style={{ width: "30%" }} src={img11} alt="label" /><br />
            <h3>4. Return Statement</h3>
            <p>{`The return statement is a type of jump statement in C which is used in a function to end it or terminate it immediately with or without value and returns the flow of program execution to the start from where it is called.The function declared with void type does not return any value.
`}</p>
            <h4>Syntax:</h4>
            <textarea className={styles.multiline} readOnly rows="3">{`return expression;
or
Return; 
`}</textarea> <br />
        </div>
    );
}