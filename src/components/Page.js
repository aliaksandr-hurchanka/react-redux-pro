import React, { PropTypes, Component } from 'react'
import * as fieldActions from '../actions/FieldActions'
import Field from './Field'
import Result from './Result'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }
    
    render() {
        const { year, photos, fetching } = this.props
        const { addString } = this.props.fieldActions
        
        return <div className='ib page'>
            <p>
                <button className='btn' onClick={::this.onYearBtnClick}>2016</button>
                <button className='btn' onClick={::this.onYearBtnClick}>2015</button>
                <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
            </p>
            
            <h3>{year} год</h3>
                {
                    fetching ?
                    <p>Загрузка...</p>
                    :
                    <p>У тебя {photos.length} фото.</p>
                }
        
            <Field addString={addString} />
            <Result />
        </div>
    }
}
