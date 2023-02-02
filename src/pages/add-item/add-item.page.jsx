import Form from "../../components/form/form.component";
import './add-item.css'
const Add=(props)=>

{
return (

<div className="add-item">
 <Form onAddItem={props.onAddItem} />
</div>

);

} 

export default Add;

