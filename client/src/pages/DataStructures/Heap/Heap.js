import styles from "./heap.module.css"
import heapimg1 from "./heap1.png"
import heapimg2 from "./heap2.png"
import heapimg3 from "./heap3.png"
import heapimg4 from "./heap4.png"
import heapimg5 from "./heap5.png"
import heapimg6 from "./heap6.png"

export default function Heap() {
    return (
        <div className={styles.page}>
            <h1>Heap</h1>
            <p>A Heap is a  data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:</p>
            <h3>Max-Heap</h3>
            <p>{`In a Max-Heap the key present at the root node must be greatest among the keys present at all of its children i.e., A[Parent(i)] >= A[i]. The same property must be recursively true for all sub-trees in that Binary Tree.`}</p>
            <h3>Min-Heap</h3>
            <p>{`In a Min-Heap the key present at the root node must be minimum among the keys present at all of its children i.e., A[Parent(i)] <= A[i]. The same property must be recursively true for all sub-trees in that Binary Tree.`}</p>
            <img className={styles.heapimg} style={{width:"40%"}} src={heapimg1} alt="heap" />
            <h3>Insertion into a Max Heap</h3>
            <p>{`Step 1: Create a new node at the end of the heap.
Step 2: Assign new value to the node.
Step 3: Compare the value of this child node with its parent.
Step 4: If the value of parent is less than child, then swap them.
Step 5: Repeat step 3 & 4 until Heap property holds.

`}</p><br />
            <img className={styles.heapimg} style={{width:"60%"}} src={heapimg2} alt="max-heap-insertion" />
            <h3>Insertion into a Min Heap</h3>
            <p>{`Step 1: Create a new node at the end of the heap.
Step 2: Assign new value to the node.
Step 3: Compare the value of this child node with its parent.
Step 4: If the value of parent is greater than child, then swap them.
Step 5: Repeat step 3 & 4 until Heap property holds.

Construction of min heap is similar to max heap with the exception of the heap property, where the value of the parent is less than the child.
`}</p><br />
            <img className={styles.heapimg} style={{width:"60%"}} src={heapimg3} alt="min-heap-insertion" /><br />
            <h3>Deletion from a Max Heap</h3>
            <p>{`Step 1: Remove root node.
Step 2: Move the last element of the last level to root.
Step 3: Compare the value of this child node with its parent.
Step 4: If the value of parent is less than child, then swap them.
Step 5: Repeat step 3 & 4 until Heap property holds.

Consider the initial tree as given below.
`}</p><br />
            <img className={styles.heapimg} style={{width:"25%"}} src={heapimg4} alt="max-heap-deletion1" /><br />
            <p>If a node with value 30 has to be deleted from the max heap then, the following steps are followed.
            </p><br />
            <img className={styles.heapimg} src={heapimg5} alt="max-heap-deletion2" /><br />
            <h3>Deletion from a Min Heap</h3>
            <p>{`Step 1: Remove root node.
Step 2: Move the last element of the last level to root.
Step 3: Compare the value of this child node with its parent.
Step 4: If the value of the parent is greater than the child, then swap them.
Step 5: Repeat step 3 & 4 until Heap property holds.

Deletion from min heap is similar to max heap with the exception of the heap property, where the value of the parent is less than the child.
`}</p><br />
            <img className={styles.heapimg} style={{width:"50%"}} src={heapimg6} alt="min-heap-deletion" /><br />
        </div>
    );
}