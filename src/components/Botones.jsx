import React from 'react'

const Botones = ({ background, text, outlined, color, icon, disabled, iconPosition, border, link, textDecoration }) => {

    const style = {
        borderRadius: '20px',
        backgroundColor: (background ? background : (outlined == true ? 'white' : (link == true) ? 'transparent' : '')),
        border: '1px solid ' + (border ? border : (outlined == true ? background : (link == true) ? 'transparent' : '')),
        color: (color ? color : (outlined == true ? background : 'black')),
        opacity: (disabled == true ? '.3':'1'),
        textDecoration: (link == true && textDecoration == true) ? 'underline': 'none' 
    }

    return (
        <button style={style} className='mx-4'>
            {(icon && iconPosition== 'start') && <i className={icon + " me-2"}></i>}
            {text}
            {(icon && (iconPosition== 'end' || iconPosition == null)) && <i className={icon + " ms-2"}></i>}
            
        </button>
    )
}

export default Botones