import { Button } from '../UI/Button';
import './Movies.css'
function MainContent(props){
    const title = 'edit'
    const deleted = 'delete'
    return <div className='mainContent'>
         <img src= {props.img} alt="" /> 
       <h2>{props.title}</h2>
       <Button btn={title} deleted={deleted} />
    </div>
}
export default MainContent;