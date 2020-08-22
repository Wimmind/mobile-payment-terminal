import React, {useState, useEffect, useReducer} from 'react';
import dataMobileOperators from '../data/dataMobileOperators';
import OperatorItem from './operatorItem'
import Context from '../context';
import reducer from '../reducer';

export default function OperatorsList(){
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('operatorsList') || JSON.stringify(dataMobileOperators)));
    //const [operatorsList, setOperator] = useState([]);

    /*useEffect(()=>{
        const list = localStorage.getItem('operatorsList') || JSON.stringify(dataMobileOperators);
        setOperator(JSON.parse(list))
    }, []) */

    useEffect(()=>{
        localStorage.setItem('operatorsList',JSON.stringify(/*operatorsList*/state));
    },[state/*operatorsList*/]);

    const addOperator = () => {
        dispatch({
            type: 'add'
        })
        /*setOperator([
            ...state,{
                id: Date.now(),
                name: 'yota',
                completed: false
            }
        ])*/
    };

    /*const removeOperator = id => {
        setOperator(operatorsList.filter(operator=>{
            return operator.id !== id
        }))
    }

    const toggleOperator = id => {
        setOperator(operatorsList.map(operator=>{
            if  (operator.id === id) {
                operator.completed = !operator.completed
            }
            return operator;
        }))
    }*/

    return (
        <Context.Provider value = {{/*removeOperator, toggleOperator*/dispatch}}>
            <button className='add-operator-btn' onClick={addOperator}>Добавить оператора</button>
            <ul className="operators-list">
                {/*operatorsList*/state.map((item,i)=>(
                    <OperatorItem
                        key={i.toString()+'operator'}
                        name = {item.name}
                        completed = {item.completed}
                        id = {item.id}
                    />
                ))}
            </ul>
        </Context.Provider>
    )
}


