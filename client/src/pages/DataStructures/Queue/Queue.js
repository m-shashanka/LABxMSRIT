import styles from './queue.module.css'
import queueimg from "./queue.png"
import queueimg2 from "./queue2.png"
import queueimg3 from "./queue3.png"
import queueimg4 from "./queue4.png"
import queueimg5 from "./queue5.png"
import queueimg6 from "./queue6.png"
import queueimg7 from "./queue7.png"

export default function Queue() {
    return (
        <div className={styles.page}>
            <h1>Queue</h1>
            <br />
            <p>{`A queue is a data structure that follows the First In First Out principle. The element added first is accessed first. A queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue).
            
A real-world example of a queue can be a single-lane one-way road, where the vehicle that enters first, exits first.`}</p>
            <br />
            <h3>FIFO Principle of Queue</h3>
            <p>{`The element added first is accessed first following the First In First Out principle. In the example, 1 is added first and accessed first.
The operation of adding an element to the queue is called enqueue, while the operation of removing an element is called dequeue.`}</p><br />
            <img className={styles.queueimg} src={queueimg2} alt="queue" />
            <h2>Operations of queue</h2>
            <br />
            <p><span>Enqueue: </span>Operation to add an element to the end of the queue</p>
            <p><span>Dequeue: </span>Operation to remove an element from the front of the queue</p>
            <p><span>isEmpty: </span>Operation to check if the queue is empty or not</p>
            <p><span>isFull: </span>Operation to check if the queue is full</p>
            <p><span>Peek: </span>Operation to get the value of the element at the front of the queue without removing it</p>
            <br />
            <p>Two pointers, front and rear, are used to maintain a queue. Front tracks the first element of the queue,
                while rear tracks the last element of the queue. Front and rear are initialized to -1. If rear is equal
                to MAXSIZE of queue, then queue is full. If front and rear are equal to -1, then queue is empty.
                When adding an element to the queue, the value of rear is incremented by 1 and the new element is placed
                at the position pointed to by rear. When removing an element, increment the value of front by 1 and
                return the value pointed by front. Before insertion, check if the queue is full. Before removing an element,
                check if the queue is empty.
            </p>
            <br />
            <hr className={styles.line} />
            <div className={styles.operation}>
                <div className={styles.space}>
                    <h3>Enqueue</h3>
                    <p>The operation of adding an element to the queue is called enqueue.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if the queue is full
2. If the queue is full, then return -1
3. Else for the first element, set the value of front to 0
4. Increase the rear index by 1
5. Add the new element in the position pointed to by rear`}</p>
                </div>
                <div className={styles.space}>
                    <h3>Dequeue</h3>
                    <p>The operation of removing an element from the queue is called dequeue.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if the queue is empty
2. If the queue is empty, then return -1
3. Else return the value pointed by front and increment the front index by 1
4. For the last element, reset the values of front and rear to -1`}</p>
                </div>
            </div>
            <br />
            <img className={styles.queuelongimg} src={queueimg} alt="enqueue-dequeue" />
            <br />
            <div className={styles.operation}>
                <div className={styles.space}>
                    <h3>isEmpty</h3>
                    <p>The operation to check if the queue is empty.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if the rear and front are pointing to null memory space, i.e., -1
2. If yes, the return queue is empty
3. Else return queue is not empty`}</p>
                    <br />
                </div>
                <div className={styles.space}>
                    <h3>Peek</h3>
                    <p>The operation to get the value of the element at the front of the queue without removing it.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if the queue is empty.
2. If the queue is empty, produce an error and exit.
3. Else return the element pointed to by the front pointer.`}</p>
                    <br />
                </div>
                <div className={styles.space}>
                    <h3>isFull</h3>
                    <p>The operation to check if the queue is full.</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>Algorithm :-</p>
                    <p>{`1. Check if rear == MAXSIZE - 1
2. If yes then return queue is full
3. Else return queue is not full`}</p>
                </div>
            </div>
            <h3>Types of Queues</h3>
            <p>There are four different types of queues:</p><br />
            <img className={styles.queueimg} src={queueimg3} alt="types-of-queue" /><br />
            <h3>Simple Queue or Linear Queue</h3>
            <p>In a linear queue, insertion takes place from one end called rear end while deletion
                takes place from another end called the front end. It follows the FIFO rule.</p><br />
            <img className={styles.queueimg} src={queueimg4} alt="linear-queue" /><br />
            <h3>Circular Queue</h3>
            <p>A circular queue is similar to a linear queue except that the last element of the queue is connected to the first element of the queue.
                The nodes are represented in a circular manner. This type of queue is also known as Ring Buffer.</p><br />
            <img className={styles.queueimg} src={queueimg5} alt="circular-queue" /><br />
            <h3>Priority Queue</h3>
            <p>It is a queue in which elements are arranged according to priority. Every element has a priority associated with it.
                If elements with the same priority are encountered, the FIFO principle is followed. Insertion in a priority queue is based on arrival, while deletion takes place based on priority.</p><br />
            <img className={styles.queueimg} src={queueimg6} alt="prioroty-queue" /><br />
            <p>{`There are two types of priority queues:
            
1. Ascending Priority Queue
   In the ascending priority queue, elements can be inserted in arbitrary order, but only the smallest can be deleted first.
   
2. Descending Priority Queue
   In the descending priority queue, elements can be inserted in arbitrary order, but only the largest element can be deleted first.
`}</p><br />
            <h3>Deque ( Double Ended Queue)</h3>
            <p>In Deque or Double Ended Queue, insertion and deletion is done from both front and rear ends of the queue. Deque can be used both as stack and queue as it allows the insertion and deletion operations on both ends. Deque can be considered as stack because stack follows the LIFO (Last In First Out) principle in which insertion and deletion both can be performed only from one end. And in deque, it is possible to perform both insertion and deletion from one end, and Deque does not follow the FIFO principle.
            </p><br />
            <img className={styles.queueimg} src={queueimg7} alt="double-ended-queue" /><br />
            <hr className={styles.line} />
            <h3>Implementation</h3>
            <p>A queue data structure can be implemented by using arrays or linked lists.</p>
            <br />
        </div>
    );
}