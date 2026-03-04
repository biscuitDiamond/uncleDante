import React from "react";
import { Card } from "./Card.tsx";
import { Constructor } from "./constructor/Constructor.tsx";
import { combos, pizza, ingredients } from "../data/dataEng.ts";
import { LiComponent } from "./LiComponent.tsx";
import { ItemsList } from "./constructor/ItemsList.tsx";
import { idText } from "typescript";
import { ICombo, Iingredient, IPizza, IProduct } from "../models.ts";
import { Combo } from "./constructor/Combo.tsx";

export function Body(){
    let totalProductCcal : number = 0;
    /* function calculate(item: Object){
        return item.proteint + item.fat;
    } */
    let totalComboCcal : number = 0;
    function totalEnergyCalc(item : Array<Iingredient>, total : number){
        let tmp : number[] = item.map((i)=> energyCalc(i))
        total = tmp.reduce((acc, curr) => acc + curr)
        /* totalCcal = total */
        /* через редус */
        return total
    }
    function energyCalc(item: Iingredient){

        return item.protein * 4 + item.fat * 9 + item.carbohydrates * 4;
    }
    return(
        /* w-[1280px] mx-auto box-border */
        <div className="border-2 border-red-600 ">
{/*             <section className="flex flex-wrap">
                <h1 className="w-full">Пиццы</h1>
                {combos.map((combo)=><Combo c={combo} key={combo.comboId}></Combo>)}
            </section> */}
            
            <h1>Здесь тело</h1>
            <ul className="flex flex-wrap mx-auto cards">
{/*                 <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li>
                <li>
                    <Card></Card>
                </li> */}

                {combos.map((combo)=><Combo c={combo} key={combo.comboId}></Combo>)}
                {/* ниже вырезка combos.map */}

                {/* выше вырезка combos.map */}
                {/* 
                ++++++++++++++++++++++++++++++++++++++++
                В ДОДО пресет в зависимости от ширины экрана разные значения марджина и ширины и размеров картинок для карточек
                
                */}
{/*                 {ingredients.map((ing)=>
                    <li className="w-[150px] h-[300px] p-2">
                        <h1>
                            {ing.name}
                        </h1>
                        {ing.energy.toFixed(2)}
                        
                    </li>
                )} */}
            </ul>
            <div className="flex flex-row justify-center">
                <Constructor></Constructor>
            </div>
            <div className="border-2 border-lime-500 h-[500px] w-[700px]">
{/*                 <ul>
                {pizza.map(product => <LiComponent product={product}></LiComponent>)}
                </ul> */}
            </div>
            <div className="h-[1000px]"></div>
            <div className="test">
                <ItemsList></ItemsList>
            </div>
        </div>
    )
}