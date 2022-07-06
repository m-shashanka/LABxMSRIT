import styles from "./datatype.module.css";
import img1 from "./char.png"
import img2 from "./int.png"
import img3 from "./float.png"

export default function DataTypes() {
    return (
        <div className={styles.page}>
            <h1>Data Types</h1>
            <p>{`Data types in C is a  system used for declaring variables or functions of different types. The type of a variable determines how much space it occupies in storage and how the bit pattern stored is interpreted.
`}</p><br />
            <p>{`Data types in C can be classified as:

1. Basic Data Types
2. Derived Data Types
3. User-Defined Data Types in C
`}</p>
            <h2>Basic Data Types</h2>
            <p>Data types are keywords that define the size and type of value that a variable can store. Basic/ Primitive types are data types that come as part of the programming language.
            </p>
            <h3>1. Character Data Type</h3>
            <p>The most basic data type in C. It is used to store a single character and occupies one byte of memory.
            </p>
            <img className={styles.tableimg} src={img1} alt="char" /><br />
            <h3>2. Integer Types</h3>
            <p>{`If an integer value needs to be stored in a variable, then it can be done using three types of integer data types: short, int , long.
The data types can be signed or unsigned.
`}</p>
            <img className={styles.tableimg} src={img2} alt="int" /><br />
            <h3>3. Floating Point Type</h3>
            <p>{`Floating point number data type is used to store fractional or decimal values. Float and double data types can be used for storing fractional numbers.
`}</p>
            <img className={styles.tableimg} src={img3} alt="float" /><br />
            <h2>Derived Data Types</h2>
            <p>Derived data types are derived from the primitive or fundamental data types. There are mainly 3 types of derived data types in C.
            </p>
            <h3>1. Arrays</h3>
            <p>An array is a data structure which stores a fixed-size sequential collection of elements of the same type.</p>
            <h4>Synatx:</h4>
            <textarea className={styles.multiline} readOnly rows="1">{`data_type arr_name[size];
`}</textarea> <br />
            <h3>2. Function</h3>
            <p>{`A function is a piece of code that performs some specific task when invoked in the program. It can be called from anywhere and any number of times in the program. The return value i.e., what type of value it will return depends upon the return type of the function.
`}</p>
            <h4>Synatx:</h4>
            <textarea className={styles.multiline} readOnly rows="1">{`return_type function_name(parameters);
`}</textarea> <br />
            <h3>3. Pointer</h3>
            <p>{`A pointer can be defined as a variable that stores the address of other variables. This address signifies where that variable is located in the memory. If a is storing the address of b, then a is pointing to b. The data type of a pointer must be the same as the variable whose address it is storing. 
`}</p>
            <h4>Synatx:</h4>
            <textarea className={styles.multiline} readOnly rows="1">{`type *pointer_name;
`}</textarea> <br />
            <h2>User-Defined Data Types in C</h2>
            <h3>1. Structure</h3>
            <p>{`A structure is a user-defined data type in C is used to combine members of different types under a single name (or the struct type).
`}</p>
            <h4>Synatx:</h4>
            <textarea className={styles.multiline} readOnly rows="5">{`struct structure_name 
{
    data_type var1;
    data_type var2;    
};
`}</textarea> <br />

            <h3>2. Union</h3>
            <p>{`A union is also a user-defined data type. It also holds members of different data types under a single name. A union sounds similar to a structure and they are similar in conceptual terms. While a structure allocates sufficient memory for all its members, a union only allocates memory equal to its largest member. 
`}</p>
            <h4>Synatx:</h4>
            <textarea className={styles.multiline} readOnly rows="5">{`union structure_name 
{
    data_type var1;
    data_type var2;   
};
`}</textarea> <br />
            <h4>Difference Between  Structure And Union</h4>
            <p><span>Structure definition</span></p>

            <textarea className={styles.multiline} readOnly rows="5">{`struct book      
{  
    int price;      // 4 bytes
    char name[10];  // 1*10 = 10 bytes    
};  
`}</textarea> <br />

            <p><span>Union definition</span></p>

            <textarea className={styles.multiline} readOnly rows="5">{`union book      
{  
    int price;      // 4 bytes
    char name[10];  // 1*10 = 10 bytes    
};
`}</textarea> <br />
            <p>{`An object of the structure book would be allocated 14 bytes for both the int and char members. However, an object of the union book would only be allocated 10 bytes (equal to the memory required by the char member) which is the maximum size.
`}</p>

            <h3>3. Enumeration</h3>
            <p>{`Enumeration or simply enum is one of the user-defined data types in C which provides a special type of flexibility of defining variables. An enum consists of a set of integer constants that can be replaced by user-defined names. `}</p>
            <h4>Synatx:</h4>
            <textarea className={styles.multiline} readOnly rows="1">{`enum flag {const_name1, const_name2, ..., const_nameN};
`}</textarea> <br />
        </div>
    );
}