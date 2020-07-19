import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Option</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option</p>}
        {
            props.options.map((item, index) =>
                <Option
                    count={index + 1}
                    key={item}
                    optionText={item}
                    handleRemoveOption={props.handleRemoveOption}
                />)
        }
    </div>
)

export default Options;