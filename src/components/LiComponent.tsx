import React from "react";
import { IProduct } from "../models";


interface ProductProps {
    product: IProduct,
    section: string
}



export function LiComponent(props: ProductProps, section: string){
    /* либо добавить эту ф-цию через прототипирование в объект Продукт */
    /* через хуки или функциональные компоненты ? */
    const ingredients = props.product.ingredients
    let ingIdx = 0
    const ingedietrsPrint = (s:string) => {
        if(ingIdx === ingredients.length - 1){
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
    return(
        <>
            <li className="box-border flex flex-col justify-center items-center p-[5px] m-[2px] max-w-[400px]">
                <img src={props.product.img} alt={props.product.name}>
                
                </img>
                <h2 className="mt-3">
                    {props.product.name}
                    {/* <span>{props.product.name}</span> */}
                </h2>
                {/* && card ? */}
                
                {section === "card" &&
                <div className="my-3">
                    <p>
                    <span>
                        {/* {props.product.ingredients} */}
                        {/* https://habr.com/ru/articles/330172/ */}
                        {/* {props.product.ingredients.map(ing => `${ing}, `)} */}
                        {props.product.ingredients.map(ingedietrsPrint)}
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
            section === "leftView" 
            && 
            <li className="box-border">
                <img src={props.product.img} alt={props.product.name}></img>
                <span>
                    {props.product.name}
                </span>
            </li>
            }
        </>
    )
}