import styles from './objective.module.css'
    
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Ornare massa eget egestas purus. Morbi enim nunc faucibus a. Duis tristique sollicitudin nibh sit. In ante metus dictum at. Libero justo laoreet sit amet cursus sit. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Viverra orci sagittis eu volutpat odio facilisis mauris. Etiam sit amet nisl purus in mollis. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Libero id faucibus nisl tincidunt eget. Eu facilisis sed odio morbi quis commodo odio aenean. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Id faucibus nisl tincidunt eget nullam non nisi est. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper."
var max_length = 500;

function limitStrLength(text, max_length){
    if(text.length > max_length - 1){
        return text.substring(0, max_length).trimEnd() + "..."
    }
    else{
        return text
    }
}

function openNewPage(){
    var myWindow = window.open("","DataStructure","width=600, height=600 ");
    myWindow.document.write(text);
}

function Objectives(){

    return(
        <div className={styles.obj}>
        <h3>Objective:</h3>
        {limitStrLength(text,max_length)}
        <button onClick={openNewPage}>Read more</button>
        </div>
    );
}

export default Objectives;