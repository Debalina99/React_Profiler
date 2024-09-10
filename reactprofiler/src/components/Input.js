import React from 'react';

export default function Input(props) {
    return (
        <div>
            <input name={props.name} value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChangeEvent} />
        </div>
    )
}