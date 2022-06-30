import styles from "./linkedList.module.css";
import img1 from "./linkedlist1.png";
import img2 from "./linkedlist2.png";
import img3 from "./linkedlist3.png";
import img4 from "./linkedlist4.png";
import img5 from "./linkedlist5.png";
import img6 from "./linkedlist6.png";
import table from "./linkedlist7.png";

export default function LinkedList() {
    return (
        <div className={styles.page}>
            <h1>LinkedList</h1>
            <p>A linked list is a linear data structure that includes a series of connected nodes. Here, each node
                stores the data and the address of the next node.
            </p><br />
            <p>The address of the first node is stored in a special name called HEAD/ START. And, the last node in the linked list can be identified because its next portion points to NULL.
            </p>
            <img className={styles.linkedlistimg} src={img1} alt="representation-of-linked-list" />
            <h3>Linked Lists over Arrays</h3>
            <h4>Array contains following limitations:</h4>
            <p>{`1. The size of the array must be known in advance before using it in the program as it has to be declared while the array is being declared.
2. Increasing the size of the array is a time taking process. It is almost impossible to expand the size of the array at run time.
3. All the elements in the array need to be contiguously stored in the memory. Inserting any element in the array needs shifting of all its predecessors.
`}</p>
            <h4>Linked list is the data structure which can overcome all the limitations of an array. Using linked list is useful because,</h4>
              <p>{`1. It allocates the memory dynamically. All the nodes of the linked list are non-contiguously stored in the memory and linked together with the help of pointers.
2. Sizing is no longer a problem since we do not need to define its size at the time of declaration. List grows as per the program's demand and is limited to the available memory space.
`}</p><br />
            <h3>Types of Linked List</h3>
            <img className={styles.linkedlistimg} src={img2} alt="types-of-linked-list" /><br />
            <h3>Singly Linked List</h3>
            <p>A singly linked list is a unidirectional linked list. So, you can only traverse it in one direction, i.e., from head node to tail node.
            </p>
            <img className={styles.linkedlistimg} src={img3} alt="singly-linked-list" /><br />
            <h3>Time Complexity</h3>
            <img className={styles.tableimg} src={table} alt="singly-listlist-time-complexicity" />
             <br />
            <h3>Space Complexity</h3>
            <p>Space complexity of singly linked list is O(n).</p>
            <h3>Operations on Singly Linked List</h3>
            <h4>Node Creation</h4>
            <textarea className={styles.multiline} readOnly rows="7">{`struct node   
{  
    int data;   
    struct node *next;  
};  
struct node *head, *ptr;  
ptr = (struct node *)malloc(sizeof(struct node *)); 
`}</textarea>
            <h3>Insertion</h3>
            <p>The insertion in a singly linked list can be done at various positions. It can be classified as follows:</p> <br />
            <p>{`1. Insertion at beginning
It is insertion of any element at the front of the list. A few link adjustments need to be made to make the new node as the head of the list.

2. Insertion at the end of the list
It involves insertion at the last of the linked list. The new node can be inserted as the only node in the list or it can be inserted as the last one. 

3. Insertion after a specified node
It involves insertion after the specified node of the linked list. The desired number of nodes have to be traversed in order to reach the node after which the new node will be inserted. . 
`}</p> <br />
            <h3>Deletion </h3>
            <p>The deletion in a singly linked list can be done at various positions. It can be classified as follows:</p><br />
            <p>{`1. Deletion at beginning
It involves deletion of a node from the beginning of the list. 

2. Deletion at the end of the list
It involves deleting the last node of the list. The list can either be empty or full.

3. Deletion after a specified node
It involves deleting the node after the specified node in the list. The desired number of nodes have to be skipped to reach the node after which the node will be deleted. This requires traversing through the list. 
`}</p> <br />
            <h3>Traversing and Searching</h3> 
            <p>{`1. Traversing
In traversing, each node of the list is visited at least once in order to perform some specific operation on it, for example, printing data part of each node present in the list.

2. Searching
In searching, each element of the list is matched with the given element. If the element is found on any of the locations, then the location of that element is returned otherwise null is returned.
`}</p> <br />
            <h3>Doubly Linked List</h3>
            <p>A doubly linked list is a bi-directional linked list. It can be traversed  in both directions. Unlike singly linked lists, its nodes contain one extra pointer called the previous pointer. This pointer points to the previous node.
            </p><br />
            <img className={styles.linkedlistimg} src={img4} alt="doubly-linked-list" />
            <h4>Node Creation</h4>
            <textarea className={styles.multiline} readOnly rows="7">{`struct node   
{  
    struct node *prev;   
     int data;  
    struct node *next;   
}  
struct node *head;
`}</textarea> <br />
            <p>Insertion, deletion, traversing and searching operations are similar to that of singly linked list.</p><br />
            <h3>Circular Linked List</h3>
            <p>A circular linked list is a unidirectional linked list. It can be traversed in only one direction.
                But this type of linked list has its last node pointing to the head node.
                The circular linked list is extremely similar to the singly linked list.
                The only difference is that the last node is connected with the first node,
                forming a circular loop in the circular linked list. All operations on a circular linked list are similar to operations on a singly linked list.</p>
            <img className={styles.linkedlistimg} src={img5} alt="circular-linked-list" /><br />
            <h3>Circular Doubly Linked List</h3> 
            <p>A circular doubly linked list is a combination of a doubly linked list and a circular linked list.
                Like the doubly linked list, it has an extra pointer called the previous pointer, and similar to the circular linked list, its last node points at the head node. This type of linked list is the bi-directional list.
                It can be traversed in both directions. All operations on a circular linked list are similar to operations on a singly linked list.</p>
            <img className={styles.linkedlistimg} src={img6} alt="Doubly-Circular-Linked-List" /><br />
        </div>
    );
}