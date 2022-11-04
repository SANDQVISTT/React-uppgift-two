
const Li = (props) => {
 
    return (

        <li>
            <h4>Item: {props.value.item}</h4>
             <h4>Amount: {props.value.amount}</h4>
             <h4>Date: {props.value.date}</h4>
             <h4>Catagory: {props.value.catagory}</h4>
        </li>

    )
}
export default Li;
