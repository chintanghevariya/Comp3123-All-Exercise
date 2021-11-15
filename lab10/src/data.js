import './App.css';
import React, { Component } from 'react'

export default class data extends Component {
     province=['Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',]

        constructor(props) {
            super(props)
        
            this.state = {
                Details : false
            }
        }
      
        readData =(e)=>{
            this.setState({[e.target.name]: e.target.value})
        }
    
        submitData = (e)=>{
            e.preventDefault()
            this.setState({
                Details : true
            })
        }
        
    render() {
        return (
            <>
            <div className="App">
                    <div>
                    <form onSubmit={this.submitData}>
                        <table width="100%">     
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Email</b>
                                        <br/>
                                        <input type="text" name="email" placeholder="Enter email"  onChange={this.readData}/>
                                    </td>
                                </tr>
                             
                                <tr>
                                    <td>
                                        <b>Name</b>
                                        <br/>
                                        <input type="text" name="fname" placeholder="Full Name"  onChange={this.readData}/> 
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Address</b>
                                        <br/>
                                        <input type="text" name="Address" placeholder="1234 Main st"  onChange={this.readData}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Address 2(optional)</b>
                                        <br/>
                                        <input type="text" name="Address2" placeholder="Apartment, studio or floor" onChange={this.readData}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>City</b><br/>
                                        <input type="text" name="city" placeholder="City" onChange={this.readData}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Province</b><br/> 
                                         
                                        <select name="province" onChange={this.readData}>
                                            <option onChange={this.readData}>Choose...</option>
                                            {
                                                this.province.map(name=>(
                                                    <option key={name} onChange={this.readData}>{name}</option>
                                                ))
                                            }
                                        </select>
                                        <br/><br/>
                                        <b>Postal Code</b><br/>
                                        
                                        <input type="text" name="PostalCode" placeholder="A0A 0A0" onChange={this.readData}/>
                                    </td> 
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="condition" placeholder="condition" className="App" onChange={this.readData}/>
                                        <label> Agree terms and condition? </label>
                                    </td>
                                </tr>
                            
                            </tbody> 
                            
                            <button type="submit" value="Submit" onClick={this.submitData}>Submit</button>  
                            {
                                this.state.Details &&
                                <div>
                                <p className="form">
                                    <h3>Email : {this.state.email}</h3>
                                    <h3>Full Name :  {this.state.fname}</h3>
                                    <h3>Address : {this.state.Address}</h3>
                                    <h3>Address 2 (optionsl): {this.state.Address2}</h3>
                                    <h3>City:  {this.state.city}</h3>
                                    <h3>Province: {this.state.province}</h3>
                                    <h3>Postal Code: {this.state.PostalCode} </h3>
                                    <h3>Terms and condition: {this.state.condition}</h3>
                                </p>
                            </div>
                            } 
                    </table>
                
                    </form>  
                </div>
            </div>

        </>
        )
    }
}