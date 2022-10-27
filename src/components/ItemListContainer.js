import React from "react";
import '../styles.css';

const Greetings = ({greetings})=>{
    return (
        <p>Welcome {greetings} to our store</p>
    );
}


class ItemListContainer extends React.Component{
    constructor(props){
        super(props);
    }

render () {
    return(
        <div>
          <Greetings greetings="JUAN"/>  
        </div>
    )
}

}

  export default ItemListContainer