import React from "react";
import { Card } from "./Card.tsx";
import { Constructor } from "./constructor/Constructor.tsx";
import { pizza } from "../data/dataEng.ts";
import { LiComponent } from "./LiComponent.tsx";
import { ItemsList } from "./constructor/ItemsList.tsx";

export function Body(){
    return(
        <div className="border-2 border-red-600">
            <h1>Здесь тело</h1>
            <ul className="flex flex-row flex-wrap justify-center">
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
                </li>
                <li>
                    <Card></Card>
                </li>
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