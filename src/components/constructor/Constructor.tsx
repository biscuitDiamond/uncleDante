import React, { useState, useEffect } from "react";
import {ItemsList} from './ItemsList.tsx'
import {IngredientsList} from './IngredientsList.tsx'
import { log } from "console";
export function Constructor(){

    const [leftView1, setLeftView1] = useState("initialPreview")
    const [leftView2, setLeftView2] = useState("void")
    const [leftView3, setLeftView3] = useState("void")
/*     function leftChanger(){
        leftView === "initialPreview" ? setLeftView("itemsList") : setLeftView("initialPreview")
    } */
/*        function leftChanger(){
        if(leftView === "itemsList" || leftView === "ingridients"){
            setLeftView("initialPreview")
            console.log(leftView)
        } else {
            if(document.querySelector('pizza')){
                setLeftView("itemsList")

            }
            if(document.getElementById('ingre')){
                setLeftView("ingredientsList")
            }
        }
    } */

        /* не робит элс иф */
/*         function leftChanger(){
            if(leftView === "itemsList" || leftView === "ingridients"){
                setLeftView("initialPreview")
                console.log(leftView + ' from 1st if');
                
            } else if(document.querySelector('.ingredients')?.addEventListener("click", ()=>{})){
                setLeftView("ingredients")
                console.log(leftView + ' from elseIF');
            } else {
                setLeftView("itemsList")
                console.log(leftView + ' from last else');
            }
        } */

            /* потом сделать ф-цию, куда буду передавать экземпляр leftView, чтобы не копипастить
            в этой общей ф-ции нужно при выборе 2 и 3 пиццы сделать так, чтобы не было инишиал экрана во всех остальных позициях
            либо сделать сразу все, но менять положение через z-index ?
            */
            function leftChanger1(){
                if(leftView1 === "itemsList" || leftView1 === "ingredientsList"){
                    setLeftView1("initialPreview")
                    console.log(leftView1 + ' from 1st if');
                    
                } else {
                    setLeftView1("itemsList")
                    console.log(leftView1 + ' from last else');
                }
            }
            function leftChanger2(){
                if(leftView2 === "itemsList" || leftView2 === "ingredientsList"){
                    setLeftView2("initialPreview")
                } else {
                    setLeftView2("itemsList")
                }
            }
            function leftChanger3(){
                if(leftView3 === "itemsList" || leftView3 === "ingredientsList"){
                    setLeftView3("initialPreview")
                } else {
                    setLeftView3("itemsList")
                }
            }

    useEffect(()=>{

    })
        function dataTypeChanger(){
            /* HTMLElement. */
        }
    /* нужна реализация прев/не прев, т.к. при нажатии смены пиццы, ты ее выбираешь, после повторного нажатия у тебя возврат к предыдущему состоянию левой части с сохранением выбора, тоже самое с изменением состава отдельной пиццы */

    /* если превью и я ждму на изменить товар, то показать измекнить товар, иначе превью
    елси превь и я жму на изменить состав...
    
    или сделать по каждой ф-ции в каждой кнопке, т.к. там одна ф-ция отвечает за одну кнопку, то можно сделать тоглом, чтобы был возврат на превью
    */

    return(
        <div className="flex flex-row justify-center m-4 items-center w-[1000px]">
            {/* w-[550px] */}
            <div className="w-[70%] flex flex-row justify-center">
{/*                 {   
                    leftView1 === "void" &&
                    <div className="h-[1px] w-[1px]">

                    </div>
                }
                {   
                    leftView2 === "void" &&
                    <div className="h-[1px] w-[1px]">

                    </div>
                }
                {   
                    leftView2 === "void" &&
                    <div className="h-[1px] w-[1px]">

                    </div>
                } */}
                {
                    leftView1 === "initialPreview" &&  
                    <div className="self-center">
                        <img src="img/body/pizza/meet_with_adjika.jpg"></img>
                    </div>
/*                     ||
                    leftView2 === "initialPreview" &&  
                    <div className="self-center">
                        <img src="img/body/pizza/meet_with_adjika.jpg"></img>
                    </div> */
                }
                {
                    leftView1 === "itemsList" && 
                        <ItemsList></ItemsList>
                }
                {
                    leftView1 === "ingredientsList" && 
                        <IngredientsList></IngredientsList>
                }
                {
                    leftView2 === "itemsList" && 
                        <ItemsList></ItemsList>
                }
                {
                    leftView2 === "ingredientsList" && 
                        <IngredientsList></IngredientsList>
                }

            </div>

            {/* 
            overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded
            */}
            {/* w-[450px] */}
            <div className="flex flex-col justify-items-start ml-2 overflow-y-scroll w-[30%] ml-4 scrollbar-track:!bg-slate-100">

                <ul className="list:none flex flex-col">
                    <div className="mb-2 flex flex-row relative">
                        <div className="">
                            <h1>
                            Заголовок конфигурации
                            </h1>
                            <p>
                                Описание конфигурации
                            </p>
                        </div>
                        <div className="absolute right-2">
                            ккал
                        </div>
                    </div>
                    {/* shadow-lg shadow-white/50 */}
                    <li className="m-2 rounded-md p-4 shadow-[0px_0px_10px_1px_rgba(255,255,255,0.2)]">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row" id="setItem" data-type="edit" 
                            
                            >
                                <div className="chel">
                                    <img src="img/body/pizza/meet_with_adjika.jpg" className="rounded-md w-[68px] h-[68px]"></img>
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    <div className="flex flex-col items-center w-full">
                                        <h2>Пепперони фреш</h2>
                                            <p>
                                                25 см, традиционное тесто 25, 380 г
                                            </p>
                                            <p className="text-gray-400">
                                                Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус
                                            </p>
                                    </div>
                                    <div className="flex flex-row justify-center mt-4">
                                        <button className="mr-3 rounded-lg bg-red-400 px-2 py-1 editable pizza" id="pizza"/*  onClick={()=> setLeftView(prev => !prev)} */ onClick={leftChanger1}
                                >
                                            <span>
                                                Заменить
                                            </span>
                                        </button>
                                        <button className="mr-3 rounded-lg bg-green-600 px-2 py-1 editable ingredients" id="ingredients" onClick={()=>{
                                            leftView1 === "ingredientsList" ? setLeftView1("initialPreview") : setLeftView1("ingredientsList")
                                            console.log("INGIIDENTS WORKS");
                                            
                                        }}>
                                            <span>
                                                Изменить состав
                                            </span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className="m-2 rounded-md p-4 shadow-[0px_0px_10px_1px_rgba(255,255,255,0.2)]">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row" id="setItem" data-type="edit" 
                            
                            >
                                <div className="chel">
                                    <img src="img/body/pizza/meet_with_adjika.jpg" className="rounded-md w-[250px] h-[150px]"></img>
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    <h1>Название товара</h1>
                                    <p>описание</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center mt-4"> 
                                <button className="mr-3 rounded-lg bg-red-400 px-2 py-1 editable pizza" id="pizza"/*  onClick={()=> setLeftView(prev => !prev)} */ /* onClick={leftChanger2} */
                                onClick={
                                    ()=>{
                                        console.log("pizza2 btn");
                                    
                                        if(leftView2 === "itemsList"){
                                            setLeftView1("initialPreview")
                                            setLeftView2("void")
                                        } else {
                                            setLeftView2("itemsList")
                                            setLeftView1("void") 
                                        }  
                                    }
                                }
                                   
                                >
                                    <span>
                                        Заменить
                                    </span>
                                </button>
                                {/* один лефтВьюПревью, но 3 лефтВью с ингридиентами под каждую из 3 кнопок, при нажатии второй кнопки:
                                если у нас ИНГРИДИЕНТЫ, то ставлю сетВью1(превью), иначе сетВью1(пустой html) + сетВью2(ингридиенты) */}
                                <button className="mr-3 rounded-lg bg-green-600 px-2 py-1 editable ingredients" id="ingredients" onClick={()=>{
                                    console.log("ingre2 btn");
                                    
                                    if(leftView2 === "ingredientsList"){
                                        setLeftView1("initialPreview")
                                        setLeftView2("void")
                                    } else {
                                        setLeftView2("ingredientsList")
                                        setLeftView1("void") 
                                    }                             
                                }}>
                                    <span>
                                        Изменить состав
                                    </span>
                                </button>
                            </div>
                        </div>
                    </li>


                </ul>
                <div className="flex flex-row h-[150px] justify-between">
                    <div className="ml-[30px]">
                        <span>
                            999 рублей
                        </span>
                    </div>
                    <div className="mr-[30px]">
                        <button>
                            <span>В корзину</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}