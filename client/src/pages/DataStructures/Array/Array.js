import styles from './array.module.css'
import arrayimg1 from "./array1.png"
import arrayimg2 from "./array2.png";
import arrayimg3 from "./array3.png";
import arrayimg4 from "./array4.png";
import arrayimg5 from "./array5.png";
import arrayimg6 from "./array6.png";
import arrayimg7 from "./array7.png";

export default function Array() {
    return (
        <div className={styles.page}>
            <h1>Arrays</h1>
            <br />
            <p>An array is a linear data structure that collects elements of the same data type and stores them in contiguous and adjacent memory locations. 
                Arrays work on an index system starting from 0 to (n-1), where n is the size of the array.</p>
            <br />
            <p>There are mainly two types of arrays:</p>
            <br />
            <h3>1. One-Dimensional Array</h3>
            <br />
            <p> A 1D array is a row, where elements are stored one after another.</p>
            <img className={styles.arrayimg} src={arrayimg1} alt="array" />
            <h3>2. Multi-Dimensional Array</h3>
            <br />
            <p> Multi-dimensional arrays can be of any dimension, but generally the following two types are used :-</p>
            <br />
            <div className={styles.multidimensionalArray}>
                <h4>1. Two-Dimensional Array</h4>
                <br />
                <p>It is like a table where each cell contains elements.</p>
                <img style={{transform:"scale(0.8)"}} className={styles.arrayimg} src={arrayimg2} alt="array" />
                <h4>2. Three-Dimensional Array</h4>
                <br />
                <p>It is like layers of 2D arrays stacked one over the other.</p>
                <img className={styles.arrayimg} src={arrayimg3} alt="array" />
            </div>
            <br />
            <h3>Array Declaration</h3>
            <img style={{marginLeft: "-10px"}} src={arrayimg4} alt="array" />
            <p>{`1D Arrays: int arr[n];

2D Arrays: int arr[m][n];

3D Arrays: int arr[m][n][o];
`}</p>
            <br />
            <p>There are some other the properties of an array that are listed below :-</p>
            <ul>
                <li>Each element in an array is of the same data type and carries the same size.</li>
                <li>Elements in the array are stored at contiguous memory locations from which the first element is stored at the smallest memory location.</li>
                <li>Elements of the array can be randomly accessed since we can calculate the address of each element of the array with the given base address and the size of the data element.</li>
            </ul>
            <br />
            <h3>Array Illustration</h3>
            <img className={styles.arrayimg} src={arrayimg5} alt="array" />
            <p>As per the above illustration, there are some of the following important points :-</p>
            <ul>
                <li>Index starts with 0.</li>
                <li>The array's length is 10, which means we can store 10 elements.</li>
                <li>Each element in the array can be accessed via its index.</li>
            </ul>
            <br/>
            <h3>Memory Allocation of an Array</h3>
            <br/>
            <p>All the data elements of an array are stored at contiguous locations in the main memory. The name of the array represents the base address or the address of the first element in the main memory. 
                Each element of the array is represented by proper indexing.</p>
            <p>The indexing of an array can be defined as follows :</p>
            <ul style={{listStyleType:"decimal"}}>
                <li>0 (zero-based indexing): The first element of the array will be arr[0].</li>
                <li>1 (one-based indexing): The first element of the array will be arr[1].</li>
                <li>n (n - based indexing): The first element of the array can reside at any random index number.</li>
            </ul>
            <img className={styles.arrayimg} src={arrayimg6} alt="array" />
            <p>The image depicts the memory allocation of an array arr of size 5. The array follows a 0-based indexing approach. The base address of the array is 100 bytes. It is the address of arr[0]. 
                Here, the size of the data type used is 4 bytes; therefore, each element will take 4 bytes in the memory.</p>
            <br/>
            <h3>Basic Operations</h3>
            <br/>
            <ul style={{listStyleType:"decimal"}}>
                <li><span>Traversal:</span> Operation used to print all elements of an array.</li>
                <li><span>Insertion:</span> Operation to add an element at a specific index.</li>
                <li><span>Deletion:</span> Operation to remove an element from a specific index.</li>
                <li><span>Search:</span> Operation to search an element using the index or the value.</li>
                <li><span>Update:</span> It updates an element at a particular index.</li>
            </ul>
            <br/>
            <h3>Time Complexity</h3>
            <img style={{marginLeft: "10px"}} className={styles.arrayimg} src={arrayimg7} alt="array" />
            <br/>
            <h3>Space Complexity</h3>
            <br />
            <p>In array, space complexity is O(n).</p>
        </div>
    );
}