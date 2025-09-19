import React from 'react'
import { useState } from 'react'
import { JsxElement } from 'typescript';
import { LiComponent } from './LiComponent';

export function Tabs(n : Array<JsxElement>){

    const [tab, setTab] = useState(0);
    


    return (
        <>
        <ul>
            {n.map(tab => <div></div>)}
        </ul>
        </>
    )
}