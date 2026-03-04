import React from "react";
import { ingredients } from "../../data/dataEng.ts";
export function IngredientsList(){
    return(
        <div className="flex flex-col justify-center items-center">
            <h1>IngredientsList</h1>
            <ul className="flex flex-row flex-wrap justify-center items-center w-[500px] h-[700px] overflow-scroll"> 
                {ingredients.map((ingr) =>
                    (ingr.ing_id > 0 &&                  
                    <li>
                        <button
                            type="button"
                            data-selected="false"
                            data-disabled="false"
                            className="w-[106px] p-[2px] h-[200px]"
                        >
                            <picture>
                                <img src={ingr.img} alt={ingr.name}></img>
                            </picture>
                            <h2>
                                {ingr.name}
                            </h2>
                            <span>
                                {ingr.cost} ₽
                            </span>
                        </button>
                    </li>)
                )}
            </ul>
        </div>
    )
}