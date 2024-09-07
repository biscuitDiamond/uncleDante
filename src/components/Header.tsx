import React from "react";

export function Header(){
    return(
        <>
            <div className="flex flex-col">
                <ul className="list:none flex flex-row">
                    <span>
                        в додо здесь
                    </span>
                    <li className="m-1">
                        прямой эфир
                    </li>
                    <li>
                        работа в додо
                    </li>
                </ul>
                <div className="bg-gray-300 w-full h-px">
                </div>
                <div className="flex flex-row justify-center">
                    <div className="p-2">logo</div>
                    <div className="flex flex-col justify-center items-center mx-4">
                        <div>
                            orbs-icon
                        </div>
                        <span className="p-2">
                            orbs
                        </span>
                    </div>
                    <div>
                        <button className="bg-gray-600 rounded">
                            <span className="p-4">
                                Войти
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row sticky ">
                    <ul className="list:none flex flex-row justify-start items-center">
                        <li className="mx-2">
                            <span>
                                Пицца
                            </span>
                        </li>
                        <li className="mx-2">
                            <span>
                                Комбо
                            </span>
                        </li>
                        <li className="mx-2">
                            <span>
                                Закуски
                            </span>
                        </li>
                        <li className="mx-2">
                            <span>
                                Коктейли
                            </span>
                        </li>
                        <li className="mx-2">
                            <span>
                                Кофе
                            </span>
                        </li>
                        <li className="mx-2">
                            <span>
                                Напитки
                            </span>
                        </li>
                        <li>
                            <span>
                                Десерты
                            </span>
                        </li>
                        <li className="bg-gray-600 rounded flex flex-row justify-center pl-2">
                            <span>
                                Еще
                            </span>
                            <div className="flex flex-row justify-center px-2">
                                <span>
                                    +
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="bg-red-400 rounded flex flex-row justify-center absolute right-0">
                    <button>
                        <span className="mx-2">
                            Корзина
                        </span>
                    </button>
                    </div>
                </div>
                {/* слайдер */}
                <div className="my-2">
                    <ul className="flex flex-row">
                        <li>
                            <span>
                                слайд1
                            </span>
                        </li>
                        <li>
                            <span>
                                слайд2
                            </span>
                        </li>
                        <li>
                            <span>
                                слайд3
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="my-2">
                    <h2>
                        Часто заказывают
                    </h2>
                    <ul className="flex flex-row">
                        <li>
                                <span>
                                    слайд1
                                </span>
                            </li>
                            <li>
                                <span>
                                    слайд2
                                </span>
                            </li>
                            <li>
                                <span>
                                    слайд3
                                </span>
                            </li>   
                    </ul>
                </div>
            </div>
        </>
    )
}