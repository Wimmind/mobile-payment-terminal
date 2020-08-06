import React, {Component} from 'react';



export default class PaymentForm extends Component {

    render () {

        const { location } = this.props;
        const name = location.someProps.name;

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
