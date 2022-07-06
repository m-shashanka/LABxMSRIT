import styles from "./inputOutputinC.module.css";
import img1 from "./io1.png";

export default function inputOutput(){
    return (
        <div className={styles.page} >
            <h1>Input Output in C</h1>
            <p>{`Input is something which the user enters from the keyboard and Output is the result or outcome shown by the program on console (Command prompt/Terminal).
In C, scanf() and printf() functions are used for input and output respectively.
`}</p>
<img className={styles.ioimg} src={img1} alt="i-o" /><br />
<h2>Scanf()</h2>
<p>{`It takes input from the user by keyboard and assigns it to a variable (identifier). Here & is “AddressOf” operator, and scanf(“%d”,&a) means something like “take the value from keyboard, consider it integer (as %d is for int) and put it on the address of a“.
`}</p>

<textarea className={styles.multiline} readOnly rows="9">{`// int input

int a;

printf("Enter a value of a: ");

scanf("%d",&a); //It would prompt user to enter a value

printf("Value of a is %d",a);
`}</textarea> <br />

<textarea className={styles.multiline} readOnly rows="9">{`//char input

int ch;

printf("Enter a value of ch: ");

scanf("%c",&ch); //It would prompt user to enter a value

printf("Value of a is %c",ch);
`}</textarea> <br />
<h2>Printf()</h2>
<p>Parameters are passed to printf() to show output on the console in the following way.
</p>
<h3>Strings</h3>
<textarea className={styles.multiline} readOnly rows="7">{`//String Output. "\\n" is used for next line.

printf("Hello World");

printf("\\n");

printf("Hello World in next Line");
`}</textarea> <br />
<h3>Integer, character, float/double values</h3>
<textarea className={styles.multiline} readOnly rows="21">{`//To print int, "%d" is used

int a = 10;

printf("%d",a);

printf("\\n") \\Next Line

//To print char, "%c" is used

char ch = 'f';

printf("%c",ch);

printf("\\n") \\Next Line

//for double and float, %f is used

double d = 10.564;

printf("%f",d);
`}</textarea> <br />

        </div>
    );
}