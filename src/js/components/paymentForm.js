import React, {Component} from 'react';



export default class PaymentForm extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: this.props.location.someProps.name
        }
    }
    render () {

        const { name } = this.state;


        return (
           <form>
               {name}
               <input 
                    className='input-inlet'
                    placeholder="Логин" 
                    autoFocus={true}
                    onChange={this.changeUserName}
                />
                <input 
                    className='input-inlet'
                    placeholder="Пароль" 
                />
           </form>
        )
    }
}
