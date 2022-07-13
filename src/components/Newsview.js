import React, { Component } from 'react'

export class Newsview extends Component {

    

    render() {
        
        return (
          
                    <div className="container card my-5 " style={{"width": "50rem","display":'flex', "justifyContent":"center"}} >
                    <img src={this.props.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.des}</p>
                        <a href= {this.props.urlgo} target="_blank" className="btn btn-dark">Read more</a>
                    </div>
                </div>
                
            
            )
    }
}

export default Newsview