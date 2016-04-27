import React, { PropTypes, Component } from 'react'

export default class Field extends Component {
    
    onChangeInput(e) {
        //this.props.getPhotos(+e.target.innerText)
        console.log(e);
    }
    
    onClickAdd() {
        //console.log(value);
        this.props.addString()
    }
    
    render () {
        return <div>
            
            <input type='text' onChange={::this.onChangeInput} />
            <button className="btn" onClick={::this.onClickAdd}>Add</button>
        </div>
    }
}

Field.propTypes = {
    addString: PropTypes.func.isRequired
}

console.log('>>>>>>>>>>>>>>', Field.propTypes);
