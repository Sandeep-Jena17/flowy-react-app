import React from 'react';
import './subnav.css'

const Subnav =(props)=>{
    const title=(title)=>{
        if(typeof title !=='string') return ''
        return title.charAt(0).toUpperCase() +title.slice(1);
    }
    
        return (
            <React.Fragment>
                <div className='subnav'>
                {
                    props.tab.map((tab)=>{
                        const active=(tab === props.selected ? 'navactive':'navdisabled');
                       
                      return (
                          <div id={tab} className={active+' '+'side' }onClick={()=>{props.setSelected(tab)}}>{title(tab)}</div>
                      )  
                   
                    })
                }
                </div>
                {props.children}
            </React.Fragment>
            
        )
    }

export default Subnav;