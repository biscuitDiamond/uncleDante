import React, { useState } from "react";
import { IProduct } from "../models";
import { Constructor } from "./constructor/Constructor";
import { IngredientsList } from "./constructor/IngredientsList";


interface ProductProps {
    product: IProduct,
    section: string
}



export function LiComponent(props: ProductProps, section: string, eventHandlers: void){
    /* либо добавить эту ф-цию через прототипирование в объект Продукт */
    /* через хуки или функциональные компоненты ? */
    const ingredients = props.product.ingredients
    let ingIdx = 0
    const ingedietrsPrint = (s:string) => {
        if(ingredients && ingIdx === ingredients.length - 1){
            ingIdx = 0
            return `${s}`
        } else {
            ++ingIdx
            return `${s}, `
        }
    }
    /* Array.prototype.print = ingredientsPrint */

/*     function ingredientsPrint(props: ProductProps, ing : String){
        const size = props.product.ingredients.length
        if(ing === props.product.ingredients[size - 1]){
        return `${ing}`
        } else {
        return `${ing}, `
        }
    } */

/*     const [selectedItemId, setSelect] = useState(-1);

    function toSelect(id : number){
        setSelect(id);
    } */


    return(
        <>
            <li className="box-border flex flex-col justify-center items-center p-[5px] m-[2px] max-w-[400px]">
                <div className="flex flex-col justify-center items-center h-[197px] w-[156px] p-2" 
                >
                    <img src={props.product.img.s} alt={props.product.prodName} className="w-[150px] h-[150px] hover:p-1">
                    
                    </img>
                    <h2 className="mt-3 px-<5>">
                        {props.product.prodName}
                        {/* <span>{props.product.name}</span> */}
                    </h2>
                </div>
                {/* && card ? */}

                {section === "card" &&
                <div className="my-3">
                    <p>
                    <span>
                        {/* {props.product.ingredients} */}
                        {/* https://habr.com/ru/articles/330172/ */}
                        {/* {props.product.ingredients.map(ing => `${ing}, `)} */}
                        {/* что ниже ? */}
                        {/* {props.product.ingredients &&
                        props.product.ingredients.map(ingedietrsPrint)} */}
                    </span>
                    </p>
                    <div className="flex flex-row justify-between mt-3">
                        <p className="ml-10">
                            <span>
                                от 666 ₽
                            </span>
                        </p>
                        <button className="to-select mr-20 prime rounded-lg px-3 py-2">
                            Выбрать
                        </button>
                    </div>
                </div>
                }
            </li>
            {
/*             section === "leftView" 
            && 
            <li className="box-border">
                <img src={props.product.img.s} alt={props.product.prodName}></img>
                <span>
                    {props.product.prodName}
                </span>
                dfdf
            </li> */
            section === "leftView" && {
                
            }
            }
            {
                section === "itemsList"
                &&
                                <div className="flex flex-col justify-center items-center h-[197px] w-[156px] p-2" data-selected="false">
                    <img src={props.product.img.s} alt={props.product.prodName} className="w-[150px] h-[150px] hover:p-1">
                    
                    </img>
                    <h2 className="mt-3 px-<5>">
                        {props.product.prodName}
                        {/* <span>{props.product.name}</span> */}
                    </h2>
                </div>
            }
        </>
    )
}