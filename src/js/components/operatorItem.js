import React, {useContext} from 'react';
import Context from '../context';
//import { Link } from 'react-router-dom';


export default function OperatorItem ({name,completed,id}) {
   // const {removeOperator, toggleOperator} = useContext(Context);
    const {dispatch} = useContext(Context);

    return (
        <li className="operators-list-item">
            <div className="operators-list-item_icon">
                <input
                    type="checkbox"
                    defaultChecked={completed}
                    onChange={()=> /*toggleOperator(id)*/dispatch({
                        type: 'toggle',
                        id: id
                    })}
                />
            </div>
            <div className="operators-list-item_name">
                <h2>{name}</h2>
            </div>
            <button onClick={()=>/*removeOperator(id)*/dispatch({
                type: 'remove',
                id: id
            })}>удалить</button>
        </li>
    )
}

/* 
  <Link to={
            {
                pathname: '/payment',
                someProps: {
                    name: name
                }
            }
            }>
            <li className="operators-list-item">
                <div className="operators-list-item_icon">
                    <img src={process.env.PUBLIC_URL + `/icons/${name}.png`} alt={`${name}`} ></img>
                </div>
                <div className="operators-list-item_name">
                    <h2>{name}</h2>
                </div>
            </li>
        </Link>

*/
