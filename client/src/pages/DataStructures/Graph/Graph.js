import styles from "./graph.module.css";
import img1 from "./graph1.png"
import img2 from "./graph2.png"
import img3 from "./graph3.png"
import img4 from "./graph4.png"
import img5 from "./graph5.png"
import img6 from "./graph6.png"
import img7 from "./graph7.png"

export default function Graph() {
    return (
        <div className={styles.page}>
            <h1>Graph</h1>
            <div className={styles.graph}>
                <a href="https://graph-visualizer-labxrit.herokuapp.com" target="_blank" rel="noreferrer">
                    <h2>&#8920; Graph Visualizer &#8921;</h2>
                </a>
            </div>
            <p>A graph is a non-linear data structure made up of vertices (nodes) and edges. The edges connect any two nodes or vertices in the graph.
            </p> <br />
            <img className={styles.graphimg} style={{ margin: "2rem auto", width: "30%" }} src={img1} alt="graph" /><br />
            <p style={{ textAlign: "center" }}>This graph has a set of vertices V= {`{1,2,3,4,5}`} and a set of edges E= {`{(1,2),(1,3),(2,3),(2,4),(2,5),(3,5),(4,5)}`}.
            </p> <br />
            <h3>Representation of Graphs in Data Structures</h3>
            <p>Graphs in data structures are used to represent relationships between objects. Every graph consists of a set of points known as vertices or nodes connected by edges.
            </p><br />
            <p>{`Two common representations of the graph data structure are:

1. Adjacency matrix
2. Adjacency list
`}</p> <br />
            <h3>Adjacency Matrix</h3>
            <p>A sequential representation of graph data structure is an adjacency matrix. It is used to describe which vertices are adjacent to each other.
                An adjacency matrix is a 2D array of VxV vertices. Each row and column represent a vertex.
                If the value of any element a[i][j] is 1, it represents that there is an edge connecting vertex i and j. For a weighted graph, the weight of the edge can be recorded instead of 0’s and 1’s.
            </p> <br />
            <h4>Undirected Graph Representation</h4>
            <img className={styles.graphimg} src={img2} alt="undirected-graph-representation" /><br />
            <h4>Directed Graph Representation</h4>
            <img className={styles.graphimg} src={img3} alt="directed-graph-representation" /><br />
            <h4>Weighted Graph Representation</h4>
            <img className={styles.graphimg} src={img4} alt="weighted-graph-representation" /><br />
            <h3>Adjacency List</h3>
            <p>A linked representation of graph data structure is an adjacency list. A list of adjacent vertices of each vertex is maintained, i.e., each vertex in the graph has a list of adjacent vertices.
                An array of vertices indexed by the vertex number is used, and the corresponding array member for each vertex points to a singly linked list of vertices adjacent to that vertex.
            </p><br />
            <h4>Weighted Directed Graph Representation using Linked List</h4>
            <img className={styles.graphimg} src={img5} alt="weighted-graph-representation-List" /><br />
            <h3>Insertion Operation in Graph Data Structure</h3>
            <h4>Insert Vertex</h4>
            <p>When a new vertex is added, the graph size increases by one, increasing the matrix size by one at the row and column levels.
            </p><br />
            <img className={styles.graphimg} src={img6} alt="insert-vertex" /><br />
            <h4>Insert Edge</h4>
            <p>Connecting two vertices using a new edge is used to add a new edge to the graph.</p><br />
            <img className={styles.graphimg} src={img7} alt="insert-edge" /><br />
        </div>
    );
}