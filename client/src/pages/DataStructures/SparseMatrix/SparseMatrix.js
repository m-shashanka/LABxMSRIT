import styles from "./sparseMatrix.module.css";
import img1 from "./Sparse_Matrix.png"
import img2 from "./matrix-2.png"
import img3 from "./matrix-3.png"
import img4 from "./matrix-4.png"

export default function SparseMatrix(){
    return (
        <div className={styles.page}>
            <h1>SparseMatrix</h1>
            <br />
            <h3>Matrix</h3>
            <p>A matrix is a two-dimensional array having m rows and n columns. A matrix with m rows and n columns is called an mxn matrix. 
                The data is stored in horizontal and vertical lines of entries.</p>
                <br />
            <h3>Sparse Matrix</h3>
            <p>A sparse matrix is a matrix that has a majority of its elements equal to zero. Simply put, a matrix in which the number of zero 
                elements is greater than non-zero elements is a sparse matrix.</p>
            <br />
            <img className={styles.matriximg} src={img1} alt="sparse-matrix" />
            <br />
            <p>When a sparse matrix is represented with a 2-dimensional array, we waste a lot of space to represent that matrix. 
                For example, consider a matrix of size 100 X 100 containing only 10 non-zero elements. In this matrix, only 10 
                spaces are filled with non-zero values and the remaining spaces of the matrix are filled with zero. That means, 
                totally we allocate 100 X 100 X 2 = 20000 bytes of space to store this integer matrix. And to access these 10 non-zero 
                elements we have to make a scan 10000 times. To make it simple we use the following sparse matrix representation.</p>
            <br />
            <h2>Spare Matrix Representations</h2>
            <br />
            <h3>1. Triplet Representation (Array representation)</h3>
            <br />
            <p>For this representation, only non-zero values in the sparse matrix are represented along with their row and column index values. In this representation, the 0th-row stores the total number of rows, the total number of columns, and the total number of non-zero values in the sparse matrix.
            For example, consider a matrix of size 5 X 6 containing 6 non-zero values. This matrix can be represented as shown in the image.
            </p>
            <img className={styles.matriximg} src={img2} alt="sparse-matrix" />
            <p>In the above example matrix, there are only 6 non-zero elements ( those are 9, 8, 4, 2, 5 & 2) and the matrix size is 5 X 6. We represent this matrix as shown in the above image. Here the first row in the right side table is filled with values 5, 6 & 6 which indicates that it is a sparse matrix with 5 rows, 6 columns & 6 non-zero values. The second row is filled with 0, 4, & 9 which indicates the non-zero value 9 is at the 0th-row 4th column in the Sparse matrix. 
                In the same way, the remaining non-zero values also follow a similar pattern.</p>
            <br />
            <h3>2. Linked Representation</h3>
            <br />
            <p>For this representation, a linked list data structure is used to represent the sparse matrix. The linked list contains two nodes, the header node, and the element node. 
                Header node consists of three fields and the element node consists of five fields as shown in the image.</p>
            <img className={styles.matriximg} src={img3} alt="sparse-matrix" />
            <p>Consider the above same sparse matrix used in the Triplet representation. This sparse matrix can be represented using linked representation as shown in the below image.</p>
            <br />
            <img className={styles.matriximg} src={img4} alt="sparse-matrix" />
            <p>In the above representation, H0, H1,..., and H5 indicate the header nodes which are used to represent indexes. The remaining nodes are used to represent non-zero elements in the matrix, except the very first node which is used to represent abstract information of the sparse matrix (i.e., It is a matrix of 5 X 6 with 6 non-zero elements).
In this representation, in each row and column, the right field of the last node points to its respective header node.
</p>
        </div>
    );
}