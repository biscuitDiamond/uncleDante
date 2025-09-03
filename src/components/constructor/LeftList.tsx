import React from "react";
import {pizza} from '../../data/dataEng.ts'
import { LiComponent } from "../LiComponent.tsx";
export function LeftList(){
    return(
            <ul className="
                w-full
                flex flex-row justify-center items-center flex-wrap
                overscroll-y-contain
            ">


                {pizza.map(product => <LiComponent product={product} section="leftView"></LiComponent>)}
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
    )
}