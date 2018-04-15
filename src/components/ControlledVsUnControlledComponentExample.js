import React, { Component } from 'react';


class ControlledVsUnControlledComponentExample extends Component{

    constructor(){
        super();
        this.state = {
            firstName : ''
        }

        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

    }

    handleSubmitClick(){
        console.log('handleSubmitClick Clicked >>>>>>>>>>>>>>>', this.myInputText.value);
        
    }

    render(){
        return (
                <div>
                    <input 
                        type={'text'} 
                        value={this.state.firstName} 
                        onChange = {this.handleFullNameChange}
                        placeholder = {'Enter Search Content Here'}
                        /> <br />
                        <input
                            type="text"
                            ref={(input) => { this.myInputText = input; }} /> <br />

                        <button  onClick = {this.handleSubmitClick }>Sign up</button> <br />
                </div>
        )
    }
    
    handleFullNameChange(e) {
		this.setState({ firstName: e.target.value }, () => console.log('firstName:', this.state.firstName));
    }
}

export default ControlledVsUnControlledComponentExample;