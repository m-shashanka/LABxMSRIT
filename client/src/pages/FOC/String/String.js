import styles from "./string.module.css";
import img1 from "./string1.png"
import img2 from "./string2.png"

export default function String() {
    return (
        <div className={styles.page}>
            <h1>Strings</h1>
            <p>{`The string can be defined as the one-dimensional array of characters terminated by a null ('\\0'). Every character in the array occupies one byte of memory, and the last character must always be 0. The termination character ('\\0') is important in a string since it is the only way to identify where the string ends.
`}</p>
            <h3>String Declaration and Initialization</h3>
            <h4>char s[5];</h4>
            <img className={styles.strimg} style={{ width: "25%" }} src={img1} alt="string" /><br />
            <textarea className={styles.multiline} readOnly rows="7">{`char c[] = "abcd";

char c[50] = "abcd";

char c[] = {'a', 'b', 'c', 'd', '\\0'};

char c[5] = {'a', 'b', 'c', 'd', '\\0'};
`}</textarea> <br />
            <img className={styles.strimg} style={{ width: "25%" }} src={img2} alt="string2" /><br />
            <h3>Reading a string from user</h3>
            <p>{`The scanf() function reads the sequence of characters until it encounters whitespace (space, newline, tab, etc.) Ex:

`}</p>
            <textarea className={styles.multiline} readOnly rows="3">{`char name[20];

scanf("%s", name);
`}</textarea> <br />
            <h3>Reading a line of text</h3>
            <p>{`The fgets() function is used to read a line of string and the puts() function can be used to display the string. Ex:

`}</p>
            <textarea className={styles.multiline} readOnly rows="5">{`char name[30];

fgets(name, sizeof(name), stdin);  // read string

puts(name);  // display string  
`}</textarea> <br />
            <h2>String Functions</h2>
            <h3>1. strcpy(s1, s2);</h3>
            <p>{`strcpy(s1,s2) function copies string s2 into string s1.`}</p>
            <h3>2. strcat(s1, s2);</h3>
            <p>{`strcat(s1,s2) function concatenates string s2 onto the end of string s1.`}</p>
            <h3>3. strlen(s1);</h3>
            <p>{`strlen(s1) function returns the length of string s1.`}</p>
            <h3>4. strcmp(s1,s2);</h3>
            <p>{`strcmp(s1,s2) function returns 0 if s1 and s2 are the same; less than 0 if s1<s2; greater than 0 if s1>s2.`}</p>
            <h3>5. strchr(s1,ch);</h3>
            <p>{`strchr(s1,ch) function returns a pointer to the first occurrence of character ch in string s1.`}</p>
            <h3>6. strstr(s1,s2);</h3>
            <p>{`strstr(s1,s2) function returns a pointer to the first occurrence of string s2 in string s1.`}</p>
        </div>
    );
}