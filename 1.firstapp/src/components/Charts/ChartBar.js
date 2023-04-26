import React from 'react';

import './ChartBar.css';

const ChartBar=(props)=>{
    let barFillHeight='0%';

    if (props.maxValue>0){
        barFillHeight=Math.round((props.value/props.maxValue)*100)+'%' //here adding '%' because for dynamic styling we have to pass a string
    }

    return(
        <div className='chart-bar'>
            <div className='chart-bar__capsule'>
                <div className='chart-bar__fill' style={{height:barFillHeight}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>

        </div>
    )
}

export default ChartBar;