import React, { MouseEventHandler, useState } from "react";
import {pizza} from '../../data/dataEng.ts'
import { LiComponent } from "../LiComponent.tsx";
export function ItemsList(){

    /* const[select, setSelect] = useState(0); */


    /* https://react.dev/learn/responding-to-events
        https://react.dev/learn/passing-props-to-a-component
    */
    const [selectedItemId, setSelect] = useState(-1);
    
    const toSelect = (id) =>{
        setSelect(id);
    }
/*     function toSelect(id : number){
            setSelect(id);
        } */

    return(
        <div className="
            flex flex-col justify-center items-center 
            flex-wrap
            
        " style={{/* width:'800px', */ flexWrap:'wrap'}}>
            <h1>СПИСОК ИТЕМОВ СЕТА</h1>
            {/* w-2xl w-[850px] */}
            <ul className="flex flex-row justify-center items-center flex-wrap w-full overflow-y-scroll h-[600px]">


{/*                 {
                pizza.map(product => 
                    <LiComponent 
                        product={product}
                        section="itemsList"
                        key={product.id}
                        data-selected={selectedItemId === product.id}                 
                        ></LiComponent>)} */}
                {pizza.map(product=>
                    <li
                        key={product.prodId}
                        data-selected={selectedItemId === product.prodId}
                        /* onClick={toSelect} */
                        onClick={()=>{
                            console.log(`prev value: ${selectedItemId}`);
                            setSelect(product.prodId)
                            console.log(`afterClick value: ${selectedItemId}`);
                        }}
                        className={`${selectedItemId === product.prodId ? "border rounded-xl border-white border-solid " : ""}`
                    + ``
                    }
/*                         style={{
                            border: selectedItemId === product.id ? '1px solid lightblue' : '',
                            
                        }} */
                    >
                        <div className="flex flex-col justify-center items-center h-[197px] w-[156px] p-2" data-selected="false">
                        <img src={product.img.s} alt={product.prodName} className="w-[150px] h-[150px] hover:p-1">
                        
                        </img>
                        <h2 className="mt-3 px-<5>">
                            {product.prodName}
                            {/* <span>{props.product.name}</span> */}
                        </h2>
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )

/* evnt : MouseEventHandler<HTMLLIElement> */
/* google it, or ckeck https://stackoverflow.com/questions/54383386/react-typescript-correct-type-for-event-handler-prop */
/*     function toSelect() : MouseEventHandler<HTMLLIElement>{
        this.dataset.selected = true;
    } */
}