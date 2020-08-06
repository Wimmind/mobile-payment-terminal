import React, {Component} from 'react';
import dataMobileOperators from '../data/dataMobileOperators'
import { Link } from 'react-router-dom';

export default class OperatorsList extends Component {

    render () {
        return (
            <ul className="operators-list">
                {dataMobileOperators.map((item,i)=>(
                    <OperatorItem
                        key={i.toString()+'operator'}
                        name = {item.name}
                    />
                ))}
            </ul>
        )
    }
}


const OperatorItem = (props) => {

    const { name } = props;

    return (
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
                    <img  src={process.env.PUBLIC_URL + `/icons/${name}.png`} ></img>
                </div>
                <div className="operators-list-item_name">
                    <h2>{name}</h2>
                </div>
            </li>
        </Link>
    )
}
