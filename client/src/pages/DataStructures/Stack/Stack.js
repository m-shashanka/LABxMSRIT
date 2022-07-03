import styles from './stack.module.css'
import stackimg1 from "./stack.png"
import stackimg2 from "./stack-operations.png"
import stackimg3 from "./stack-operations-2.png"

export default function Stack() {
    return (
        <div className={styles.page}>
            <h1>Stack</h1>
           
            <p>{`Stack is a linear data structure that works on the Last In First Out principle. The element stored last can be accessed first. 
A stack data structure can be imagined to be similar to a stack of plates where a new plate can be put on top and a plate can be removed from the top. To remove the last plate, all the plates on top have to be removed.`}</p>
            <h3>LIFO Principle of Stack</h3>
            <p>{`The element stored last is accessed first. In the given example, 3 is stored last but is accessed first.
The operation of  adding an element to the stack is called push, while the operation of removing an element is called pop.`}</p>
            <img className={styles.stackimg} src={stackimg1} alt="stack" />
            <h2>Operations of stack</h2>
            <br />
            <p><span>Push: </span>Operation to add an element to the top of the stack</p>
            <p><span>Pop: </span>Operation to remove an element from the top of the stack</p>
            <p><span>isEmpty: </span>Operation to check if the stack is empty</p>
            <p><span>isFull: </span>Operation to check if the stack is full</p>
            <p><span>Peek: </span>Operation to find the value of the element on top of the stack</p>
            <br />
            <p>A pointer called TOP is used to keep track of the element on top of the stack. When a stack is created, TOP is initialized to -1.
                If TOP == -1, the stack is empty. While pushing an element, the value of TOP is incremented by 1 and the new element is placed in the position pointed to by TOP.
                While popping an element from the stack, the element pointed to by TOP is returned and the value of TOP is decremented by 1. Before pushing, the stack is checked to see if it is already full.
                Before popping, the stack is checked to see if it is already empty.
            </p>
            <br />
            <hr className={styles.line} />
            <div className={styles.operation}>
                <div className={styles.space}>
                    <h3>Push</h3>
                    <p>The operation of adding a new element to the stack is called push.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if the stack is full.
2. If the stack is full, produce an error and exit.
3. If the stack is not full, increment the top to point to the next empty space. 
4. Add a data element to the stack location, where the top is pointing.
5. Return success.`}</p>
                    <br />
                </div>
                <div className={styles.space}>
                    <h3>Pop</h3>
                    <p>The operation of removing an element from the stack is called pop.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if the stack is empty.
2. If the stack is empty, produce an error and exit.
3. If the stack is not empty, access the data element to which the top is pointing.
4. Decrease the value of top by 1.
5.  Return success.`}</p>
                </div>
            </div>
            <img className={styles.stackimg} src={stackimg2} alt="stack" />
            <div className={styles.operation}>
                <div className={styles.space}>
                    <h3>isEmpty</h3>
                    <p>The operation to check if the stack is empty.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if top == -1
2. If top is -1, return stack is empty.
3. Else return stack is not empty`}</p>
                    <br />
                </div>
                <div className={styles.space}>
                    <h3>Peek</h3>
                    <p>The operation to find the value of the element on top of the stack.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if the stack is empty.
2. If the stack is empty, produce an error and exit.
3. Else return stack[top]`}</p>
                    <br />
                </div>
                <div className={styles.space}>
                    <h3>isFull</h3>
                    <p>The operation to check if the stack is full.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if top == MAXSIZE -1
2. If yes then return stack is full
3. Else return stack is not full`}</p>
                </div>
            </div>
            <img className={styles.stackimg} src={stackimg3} alt="stack" />
            <hr className={styles.line} />
            <h3>Implementation</h3>
            <p>A stack data structure can be implemented by using arrays or linked lists.</p>
            <br />
        </div>
    );
}