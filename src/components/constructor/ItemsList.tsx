import React from "react";
import {pizza} from '../../data/dataEng.ts'
import { LiComponent } from "../LiComponent.tsx";
export function ItemsList(){
    return(
        <div className="
            flex flex-col justify-center items-center 
            flex-wrap
        " style={{/* width:'800px', */ flexWrap:'wrap'}}>
            <h1>СПИСОК ИТЕМОВ СЕТА</h1>
            <ul className="flex flex-row justify-center items-center flex-wrap w-2xl w-[850px]">


                {pizza.map(product => <LiComponent product={product}></LiComponent>)}
{/*                 <li className="flex flex-col justify-center items-center">

                    <h1>
                        название позиции
                    </h1>
                </li>
                <li className="flex flex-col justify-center items-center">

                    <h1>
                        название позиции
                    </h1>
                </li>
                <li className="flex flex-col justify-center items-center">

                    <h1>
                        название позиции
                    </h1>
                </li>
                <li className="flex flex-col justify-center items-center">
                    <h1>
                        название позиции
                    </h1>
                </li> */}
            </ul>
            {
                
            }
        </div>
    )
}