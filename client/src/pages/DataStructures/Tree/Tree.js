import styles from "./tree.module.css";
import img1 from "./tree1.png"
import img2 from "./tree2.png"
import img3 from "./tree3.png"
import img4 from "./tree4.png"
import img5 from "./tree5.png"
import img6 from "./tree6.png"
import img7 from "./tree7.png"
import img8 from "./tree8.png"
import img9 from "./tree9.png"
import img10 from "./tree10.png"
import img11 from "./tree11.png"
import img12 from "./tree12.png"
import img13 from "./tree13.png"
import img14 from "./tree14.png"
import img15 from "./tree15.png"
import img16 from "./tree16.png"
import img17 from "./tree17.png"
import img18 from "./tree18.png"
import img19 from "./tree19.png"
import img20 from "./tree20.png"

export default function Tree() {
    return (
        <div className={styles.page}>
            <h1>Tree</h1>
            <div className={styles.graph}>
                <a href="https://graph-visualizer-labxrit.herokuapp.com" target="_blank" rel="noreferrer">
                    <h2>&#8920; Tree Visualizer &#8921;</h2>
                </a>
            </div>
            <p>The tree is a nonlinear hierarchical data structure and comprises a collection of entities known as nodes. It connects each node in the tree data structure using "edges”, both directed and undirected.
            </p><br />
            <img className={styles.treeimg} src={img1} alt="tree" />
            <h3>Tree Node</h3>
            <textarea className={styles.multiline} readOnly rows="6">{`struct node
{
 int data;
 struct node *leftchild;
 struct node *rightchild;
}
`}</textarea> <br />
            <img className={styles.treeimg} src={img2} alt="node" /><br />

            <h2>Tree Terminologies</h2>
            <h3>Root</h3>
            <p>In a tree data structure, the root is the first node of the tree. The root node is the initial node of the tree in data structures. In the tree data structure, there must be only one root node.
            </p><br />
            <img className={styles.treeimg} src={img3} alt="root" />
            <h3>Edge</h3>
            <p>In a tree in data structures, the connecting link of any two nodes is called the edge of the tree data structure. In the tree data structure, N number of nodes connecting with N -1 number of edges.
            </p><br />
            <img className={styles.treeimg} src={img4} alt="edge" /><br />
            <h3>Parent</h3>
            <p>In the tree in data structures, the node that is the predecessor of any node is known as a parent node, or a node with a branch from itself to any other successive node is called the parent node.
            </p><br />
            <img className={styles.treeimg} src={img5} alt="parent" /><br />
            <h3>Child</h3>
            <p>The node, a descendant of any node, is known as child nodes in data structures. In a tree, any number of parent nodes can have any number of child nodes. Every node except the root node is a child node.
            </p><br />
            <img className={styles.treeimg} src={img6} alt="child" /><br />
            <h3>Siblings</h3>
            <p>In tree data structure, nodes that belong to the same parent are called siblings.
            </p><br />
            <img className={styles.treeimg} src={img7} alt="siblings" /><br />
            <h3>Leaf</h3>
            <p>In tree data structure, a node with no child is known as a leaf node. In trees, leaf nodes are also called external nodes or terminal nodes.
            </p><br />
            <img className={styles.treeimg} src={img8} alt="leaf" /><br />
            <h3>Degree</h3>
            <p>In the tree data structure, the total number of children of a node is called the degree of the node. The highest degree of the node among all the nodes in a tree is called the Degree of Tree.
            </p><br />
            <img className={styles.treeimg} src={img9} alt="degree" /><br />
            <h3>Level</h3>
            <p>In tree data structures, the root node is said to be at level 0, and the root node's children are at level 1, and the children of that node at level 1 will be level 2, and so on.
            </p><br />
            <img className={styles.treeimg} src={img10} alt="level" /><br />
            <h3>Height</h3>
            <p>In a tree data structure, the number of edges from the leaf node to the particular node in the longest path is known as the height of that node. In the tree, the height of the root node is called "Height of Tree". The tree height of all leaf nodes is 0.
            </p><br />
            <img className={styles.treeimg} src={img11} alt="height" /><br />
            <h3>Depth</h3>
            <p>In a tree, many edges from the root node to the particular node are called the depth of the tree. The total number of edges from the root node to the leaf node in the longest path is known as "Depth of Tree". The depth of the root node is 0.
            </p><br />
            <img className={styles.treeimg} src={img12} alt="height" /><br />
            <h3>Subtree</h3>
            <p>In the tree data structure, each child from a node shapes a sub-tree recursively and every child in the tree will form a sub-tree on its parent node.
            </p><br />
            <img className={styles.treeimg} src={img13} alt="subtree" /><br />
            <h2>Types of Trees in Data Structures</h2>
            <h3>General Tree</h3>
            <p>{`The general tree is the type of tree where there are no constraints on the hierarchical structure.

Properties:
1. The general tree follows all properties of the tree data structure.
2. A node can have any number of nodes.
`}</p><br />
            <img className={styles.treeimg} src={img14} alt="general-tree" /><br />
            <h3>Binary Tree</h3>
            <p>{`A binary tree has the following properties:

1. Follows all properties of the tree data structure.
2. Binary trees can have at most two child nodes.
3. These two children are called the left child and the right child.
`}</p><br />
            <img className={styles.treeimg} src={img15} alt="binary-tree" /><br />
            <h3>Binary Search Tree</h3>
            <p>{`A binary search tree is a type of tree that is a more constricted extension of a binary tree data structure.

Properties:

1. Follows all properties of the tree data structure.
2. The binary search tree has a unique property known as the binary search property. This states that the value of a left child node of the tree should be less 
   than or equal to the parent node value of the tree. And the value of the right child node should be greater than or equal to the parent value.
`}</p><br />
            <img className={styles.treeimg} src={img16} alt="binary-search-tree" /><br />
            <h3>AVL Tree</h3>
            <p>{`An AVL tree is a type of tree that is a self-balancing binary search tree.

Properties:

1. Follows all properties of the tree data structure.
2. Self-balancing.
3. Each node stores a value called a balanced factor, which is the difference in the height of the left subtree and right subtree.
4. All the nodes in the AVL tree must have a balance factor of -1, 0, and 1.
`}</p><br />
            <img className={styles.treeimg} src={img17} alt="avl-tree" />
            <h2>Tree Traversal</h2>
            <p>{`Traversal of the tree in data structures is a process of visiting each node and printing their value. There are three ways to traverse tree data structure.

1. Pre-Order Traversal
2. In-Order Traversal
3. Post-Order Traversal
`}</p><br />
            <h3>In-Order Traversal</h3>
            <p>{`In the in-order traversal, the left subtree is visited first, then the root, and later the right subtree.

Algorithm:

Step 1- Recursively traverse the left subtree
Step 2- Visit root node
Step 3- Recursively traverse right subtree
`}</p><br />
            <img className={styles.treeimg} src={img18} alt="in-order-traversal" /><br />
            <h3>Pre-Order Traversal</h3>
            <p>{`In pre-order traversal, it visits the root node first, then the left subtree, and lastly right subtree.

Algorithm:

Step 1- Visit root node
Step 2- Recursively traverse the left subtree
Step 3- Recursively traverse right subtree
`}</p><br />
            <img className={styles.treeimg} src={img19} alt="pre-order-traversal" /><br />
            <h3>Post-Order Traversal</h3>
            <p>{`It visits the left subtree first in post-order traversal, then the right subtree, and finally the root node.

Algorithm:
 
Step 1- Recursively traverse the left subtree
Step 2- Visit root node
Step 3- Recursively traverse right subtree
`}</p><br />
            <img className={styles.treeimg} src={img20} alt="post-order-traversal" /><br />

        </div>
    );
}