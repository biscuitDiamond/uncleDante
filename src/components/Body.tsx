import React from "react";
import { Card } from "./Card.tsx";

export function Body(){
    return(
        <div className="border-2 border-red-600">
            <h1>Здесь тело</h1>
            <ul>
                <Card></Card>
            </ul>
        </div>
    )
}