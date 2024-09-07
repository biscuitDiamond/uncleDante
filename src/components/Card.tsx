import React from "react";

import cardTestImg from '/Users/name/Pictures/скролл/cardTestImg.png'

export function Card(){
    return(
        <>
            <div className="p-2">
                <img src={cardTestImg} ></img>
                <h2>h2 карточки</h2>
                <p>параграф карточки</p>
            </div>
        </>
    )
}