import styles from './stack.module.css'

function Stack(props){
    return(
        <div className={styles.page}>
            <h1>Stack</h1>
            <p>{`Stack is a linear data structure that works on the Last In First Out principle. The element stored last can be accessed first. 
A stack data structure can be imagined to be similar to a stack of plates where a new plate can be put on top and a plate can be removed from the top. To remove the last plate, all the plates on top have to be removed.`}</p>
            <h3>LIFO Principle of Stack</h3>
            <p>{`The element stored last is accessed first. In the given example, 3 is stored last but is accessed first.
The operation of  adding an element to the stack is called push, while the operation of removing an element is called pop.`}</p>
        </div>
    );
}

export default Stack;