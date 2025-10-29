import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import { ComboItems, ICombo, IComboItem, Iingredient, IPizza, IProduct } from "../models"
/* export const pizza = [
    {
        name: "Beef stroganoff",
        ingredients: [
            'spiced beef',
            'champignons',
            'mushroom sauce',
            'pickled cucumbers',
            'mozzarella',
            'red onion',
            'Alfredo\'s signature sauce'
        ]
    }
] */

    /* pizza: IProduct[] потом мб сменится интерфейс */
/* в интерфейсе сделать необязательным параметр thin, добавить картинки на thin*/
        /* сделать сразу через конструктор */
/*     export const pizza: IProduct[] = [
        beefStroganoff : {
            name: 'Beef stroganoff',
            img: 'img/body/pizza/beef_stroganoff.jpg',
            imgT: '',
            ingredients: [
                'spiced beef',
                'champignons',
                'mushroom sauce',
                'pickled cucumbers',
                'mozzarella',
                'red onion',
                'Alfredo\'s signature sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 249.7,
                        protein: 9.6,
                        fat: 9.3,
                        carbohydrates: 30.1,
                        weight: 410
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 295.8,
                        protein: 12.2,
                        fat: 12.8,
                        carbohydrates: 30.9,
                        weight: 420
                    },
                    thiсk: {
                        energy: 267.2,
                        protein: 10.2,
                        fat: 10.1,
                        carbohydrates: 32,
                        weight: 570
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 255.9,
                        protein: 10.2,
                        fat: 10.8,
                        carbohydrates: 27.8,
                        weight: 680
                    },
                    thiсk: {
                        energy: 264.1,
                        protein: 10,
                        fat: 10,
                        carbohydrates: 31.7,
                        weight: 770
                    }
                },
            }
        },
        meetWithAdjica : {
            name: 'Meet with adjica',
            img: 'img/body/pizza/meet_with_adjika.jpg',
            imgT: '',
            ingredients: [
                'bavarian sausages',
                'hot sauce adjika',
                'spicy chorizo ​​sausages',
                'chicken',
                'spicy pepperoni',
                'mozzarella',
                'signature tomato sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 307.3,
                        protein: 11.7,
                        fat: 15.1,
                        carbohydrates: 28.9,
                        weight: 420
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 303.7,
                        protein: 12.5,
                        fat: 16.4,
                        carbohydrates: 24.3,
                        weight: 520
                    },
                    thiсk: {
                        energy: 304.9,
                        protein: 11.8,
                        fat: 14.6,
                        carbohydrates: 29.4,
                        weight: 610
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 303.2,
                        protein: 12.4,
                        fat: 15.8,
                        carbohydrates: 25.7,
                        weight: 720
                    },
                    thiсk: {
                        energy: 294.9,
                        protein: 11.5,
                        fat: 14,
                        carbohydrates: 28.6,
                        weight: 840
                    }
                },
            }
        },
        shrimpWithSweetChile : {
            name: 'Shrimp with sweet chile',
            img: 'img/body/pizza/shrimp_with_sweet_chile.jpg',
            imgT: '',
            ingredients: [
                'shrips',
                'pineapples',
                'sweet chile ​​sauce',
                'sweet pepper',
                'mozzarella',
                'Alfredo\'s signature sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 255.2,
                        protein: 9.7,
                        fat: 7.7,
                        carbohydrates: 35,
                        weight: 390
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 242.6,
                        protein: 9.9,
                        fat: 8.7,
                        carbohydrates: 29.9,
                        weight: 490
                    },
                    thiсk: {
                        energy: 229.2,
                        protein: 8.7,
                        fat: 7.2,
                        carbohydrates: 30.9,
                        weight: 630
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 231.6,
                        protein: 9.2,
                        fat: 7.9,
                        carbohydrates: 29.3,
                        weight: 710
                    },
                    thiсk: {
                        energy: 242.3,
                        protein: 9.1,
                        fat: 7.5,
                        carbohydrates: 32.9,
                        weight: 800
                    }
                },
            }
        },

        pizzaOfHalfs : {
            name: 'Pizza of halfs',
            img: 'img/body/pizza/pizza_of_halfs.avif',
            imgT: '',
            ingredients: [
                'Two tastes in one pizza',
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 294.1,
                        protein: 10.6,
                        fat: 10.3,
                        carbohydrates: 37.8,
                        weight: 310
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 304.3,
                        protein: 12.1,
                        fat: 12.7,
                        carbohydrates: 33.2,
                        weight: 360
                    },
                    thiсk: {
                        energy: 292.8,
                        protein: 10.8,
                        fat: 10.6,
                        carbohydrates: 36.7,
                        weight: 470
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 296.5,
                        protein: 11.5,
                        fat: 12.2,
                        carbohydrates: 33.1,
                        weight: 530
                    },
                    thiсk: {
                        energy: 291.4,
                        protein: 10.7,
                        fat: 10.7,
                        carbohydrates: 36,
                        weight: 640
                    }
                },
            }
        },
        cheesy : {
            name: 'Cheesy',
            img: 'img/body/pizza/cheesy.avif',
            imgT: '',
            ingredients: [
                'mozzarella',
                'cheddar and parmesan cheeses',
                'Alfredo\'s signature sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 294.1,
                        protein: 10.6,
                        fat: 10.3,
                        carbohydrates: 37.8,
                        weight: 310
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 304.3,
                        protein: 12.1,
                        fat: 12.7,
                        carbohydrates: 33.2,
                        weight: 360
                    },
                    thiсk: {
                        energy: 292.8,
                        protein: 10.8,
                        fat: 10.6,
                        carbohydrates: 36.7,
                        weight: 470
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 296.5,
                        protein: 11.5,
                        fat: 12.2,
                        carbohydrates: 33.1,
                        weight: 530
                    },
                    thiсk: {
                        energy: 291.4,
                        protein: 10.7,
                        fat: 10.7,
                        carbohydrates: 36,
                        weight: 640
                    }
                },
            }
        },
        julienne : {
            name: 'Julienne pizza',
            img: 'img/body/pizza/julienne.avif',
            imgT: '',
            ingredients: [
                'chicken',
                'cheddar and parmesan cheeses',
                'champignons',
                'aromatic mushroom sauce',
                'red onion',
                'garlic',
                'mozzarella',
                'Alfredo\'s signature sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 237,
                        protein: 10.1,
                        fat: 8.5,
                        carbohydrates: 28.5,
                        weight: 430
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 243.3,
                        protein: 11.4,
                        fat: 10.1,
                        carbohydrates: 25.1,
                        weight: 510
                    },
                    thiсk: {
                        energy: 241.5,
                        protein: 10.3,
                        fat: 8.8,
                        carbohydrates: 28.7,
                        weight: 630
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 242.5,
                        protein: 11.2,
                        fat: 9.9,
                        carbohydrates: 25.6,
                        weight: 730
                    },
                    thiсk: {
                        energy: 251.7,
                        protein: 10.9,
                        fat: 9.3,
                        carbohydrates: 29.5,
                        weight: 820
                    }
                },
            }
        },
        pesto : {
            name: 'Pesto',
            img: 'img/body/pizza/pesto.avif',
            imgT: 'img/body/pizza/burger_pizza_t.avif',
            ingredients: [
                'chicken',
                'pesto sauce',
                'feta cheese cubics',
                'tomato',
                'mozzarella',
                'Alfredo\'s signature sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 269.2,
                        protein: 11.1,
                        fat: 10.8,
                        carbohydrates: 30.1,
                        weight: 400
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 270.9,
                        protein: 12.2,
                        fat: 12.5,
                        carbohydrates: 25.4,
                        weight: 490
                    },
                    thiсk: {
                        energy: 263.6,
                        protein: 10.9,
                        fat: 10.7,
                        carbohydrates: 29.1,
                        weight: 610
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 250.7,
                        protein: 11.4,
                        fat: 11,
                        carbohydrates: 24.7,
                        weight: 740
                    },
                    thiсk: {
                        energy: 265.3,
                        protein: 11.3,
                        fat: 10.6,
                        carbohydrates: 29.4,
                        weight: 810
                    }
                },
            }
        },
        carbonara : {
            name: 'Carbonara',
            img: 'img/body/pizza/carbonara.avif',
            imgT: 'img/body/pizza/burger_pizza_t.avif',
            ingredients: [
                'bacon',
                'cheddar and parmesan cheeses',
                'mozzarella',
                'tomatos',
                'red onion',
                'garlic',
                'Alfredo\'s signature sauce',
                'italian herbs'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 312.2,
                        protein: 9.8,
                        fat: 16.2,
                        carbohydrates: 29.3,
                        weight: 312.2
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 305.4,
                        protein: 10.2,
                        fat: 17.8,
                        carbohydrates: 23.9,
                        weight: 520
                    },
                    thiсk: {
                        energy: 316.7,
                        protein: 10.2,
                        fat: 16.3,
                        carbohydrates: 30.1,
                        weight: 590
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 321.8,
                        protein: 10.5,
                        fat: 18.7,
                        carbohydrates: 25.7,
                        weight: 710
                    },
                    thiсk: {
                        energy: 322.3,
                        protein: 10.2,
                        fat: 17.1,
                        carbohydrates: 29.7,
                        weight: 800
                    }
                },
            }
        },
        meety : {
            name: 'Meety',
            img: 'img/body/pizza/meety.avif',
            imgT: 'img/body/pizza/burger_pizza_t.avif',
            ingredients: [
                'chicken',
                'ham',
                'spicy pepperoni',
                'spicy chorizo ​​sausages',
                'mozzarella',
                'signature tomato sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 264.2,
                        protein: 11.5,
                        fat: 9.9,
                        carbohydrates: 30.5,
                        weight: 390
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 253.1,
                        protein: 12.2,
                        fat: 10.8,
                        carbohydrates: 25,
                        weight: 490
                    },
                    thiсk: {
                        energy: 257.8,
                        protein: 11.3,
                        fat: 9.6,
                        carbohydrates: 29.7,
                        weight: 590
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 249.3,
                        protein: 11.8,
                        fat: 10.3,
                        carbohydrates: 25.7,
                        weight: 700
                    },
                    thiсk: {
                        energy: 248.6,
                        protein: 11,
                        fat: 9.3,
                        carbohydrates: 28.6,
                        weight: 820
                    }
                },
            }
        },
        arriva : {
            name: 'Arriva',
            img: 'img/body/pizza/arriva.avif',
            imgT: 'img/body/pizza/burger_pizza_t.avif',
            ingredients: [
                'chicken',
                'spicy chorizo ​​sausages',
                'burger sauce',
                'sweet pepper',
                'red onion',
                'tomatos',
                'mozzarella',
                'ranch sauce',
                'garlic'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 285.1,
                        protein: 10.2,
                        fat: 11.8,
                        carbohydrates: 32.5,
                        weight: 370
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 282.1,
                        protein: 10.4,
                        fat: 13.7,
                        carbohydrates: 27.1,
                        weight: 460
                    },
                    thiсk: {
                        energy: 276.9,
                        protein: 9.9,
                        fat: 11.7,
                        carbohydrates: 31.1,
                        weight: 570
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 276.2,
                        protein: 10.5,
                        fat: 12.8,
                        carbohydrates: 27.9,
                        weight: 650
                    },
                    thiсk: {
                        energy: 274.8,
                        protein: 9.9,
                        fat: 11.4,
                        carbohydrates: 31.2,
                        weight: 760
                    }
                },
            }
        },

        burgerPizza : {
            name: 'Burger-pizza',
            img: 'img/body/pizza/burger_pizza.avif',
            imgT: 'img/body/pizza/burger_pizza_t.avif',
            ingredients: [
                'ham',
                'pickled cucumbers',
                'tomatos',
                'red onion',
                'garlic',
                'burger sauce',
                'mozzarella',
                'signature tomato sauce'
            ],
            size: {
                small: {
                    size: '25sm',
                    thin: {
                        
                    },
                    thiсk: {
                        energy: 222.5,
                        protein: 8.3,
                        fat: 7.3,
                        carbohydrates: 29.4,
                        weight: 420
                    }
                },
                medium: {
                    size: '30sm',
                    thin: {
                        energy: 206.1,
                        protein: 8.4,
                        fat: 7.8,
                        carbohydrates: 24.1,
                        weight: 540
                    },
                    thiсk: {
                        energy: 221.3,
                        protein: 8.3,
                        fat: 7.3,
                        carbohydrates: 29,
                        weight: 630
                    }
                },
                big: {
                    size: '35sm',
                    thin: {
                        energy: 198,
                        protein: 7.9,
                        fat: 7.1,
                        carbohydrates: 24.4,
                        weight: 780
                    },
                    thiсk: {
                        energy: 206.5,
                        protein: 7.7,
                        fat: 6.7,
                        carbohydrates: 27.6,
                        weight: 890
                    }
                },
            }
        }

    ] */
        /* 4kkal, 9kkal, 4kkal */
/*         function calculateEnergy(p : number, f : number, c : number, w : number) : number{
            let ans = (p * 4 + f * 9 + c * 4) * w
            return ans
        } */
        function calculateEnergy(item: Object, p : number, f : number, c : number, w : number) : number{
            let ans = (p * 4 + f * 9 + c * 4) * w
            return ans
        }

        export const ingredients : Iingredient[] = [
            {
                ing_id: 0,
                name: "dough",
                protein: 5.5,
                fat: 6.5,
                carbohydrates: 43.4,
                weight: 100,
                /* energy: calculateEnergy(this.protein, this.fat, this.carbohydrates, this.weight), */
                energy: 5.5 * 4 + 6.5 * 9 + 43.4 * 4,
                cost: 20
                /* СДЕЛАТЬ СТАТИЧНУЮ Ф-ЦИЮ (УЖЕ СДЕЛАЛ ВЫШЕ), ДАЛЕЕ ПРИ СОЗДАНИИ ЭЛЕМЕНТА СРАЗУ ЕЕ ВЫЗЫВАТЬ, ЧТОБЫ БЫЛ ПОДСЧЕТ/ЗАПОЛНЕНИЕ ПОЛЕЙ СРАЗУ */
            },
            {
                ing_id: 1,
                name: "ham",
                protein: 12,
                fat: 8,
                carbohydrates: 1,
                weight: 100,
                energy: 12 * 4 + 8 * 9 + 1 * 4,
                cost: 20
            },
            {
                ing_id: 2,
                name: "beef",
                protein: 26,
                fat: 12,
                carbohydrates: 1,
                weight: 100,
                energy: 26 * 4 + 12 * 9 + 1 * 4,
                cost: 139
            },
            {
                ing_id: 3,
                name: "mozzarella",
                protein: 28,
                fat: 26,
                carbohydrates: 5.6,
                weight: 100,
                energy: 28 * 4 + 26 * 9 + 5.6 * 4,
                cost: 115
            },
            {
                ing_id: 4,
                name: "cheddar",
                protein: 25.9,
                fat: 33.3,
                carbohydrates: 3,
                weight: 100,
                energy: 25.9 * 4 + 33.3 * 9 + 3 * 4,
                cost: 99
            },
            {
                ing_id: 5,
                name: "jalapeno",
                protein: 0.91,
                fat: 0.37,
                carbohydrates: 6.5,
                weight: 100,
                energy: 0.91 * 4 + 0.37 * 9 + 6.5 * 4,
                cost: 79
            },
        ]

        export const pizza: IPizza[] = [
/*             {
                prodId: 0,
                prodName: 'Beef stroganoff',
                img: {
                    s:'',
                    m: 'img/body/pizza/beef_stroganov.avif'
                },
                ingredients: [
                    'spiced beef',
                    'champignons',
                    'mushroom sauce',
                    'pickled cucumbers',
                    'mozzarella',
                    'red onion',
                    'Alfredo\'s signature sauce'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 249.7,
                            protein: 9.6,
                            fat: 9.3,
                            carbohydrates: 30.1,
                            weight: 410
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 295.8,
                            protein: 12.2,
                            fat: 12.8,
                            carbohydrates: 30.9,
                            weight: 420
                        },
                        thiсk: {
                            energy: 267.2,
                            protein: 10.2,
                            fat: 10.1,
                            carbohydrates: 32,
                            weight: 570
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 255.9,
                            protein: 10.2,
                            fat: 10.8,
                            carbohydrates: 27.8,
                            weight: 680
                        },
                        thiсk: {
                            energy: 264.1,
                            protein: 10,
                            fat: 10,
                            carbohydrates: 31.7,
                            weight: 770
                        }
                    },
                }
            } */
            {
                prodId: 0,
                prodName: 'Beef stroganoff',
                img: {
                    s:'',
                    m: 'img/body/pizza/beef_stroganov.avif'
                },
                ingredients: [
                    ingredients[0],
                    ingredients[1],
                    ingredients[3]
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 249.7,
                            protein: ingredients[0].protein * 2
                            + ingredients[1].protein * 1.4
                             + ingredients[2].protein * 2.7,
                            fat: 9.3,
                            carbohydrates: 30.1,
                            weight: 410
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 295.8,
                            protein: 12.2,
                            fat: 12.8,
                            carbohydrates: 30.9,
                            weight: 420
                        },
                        thiсk: {
                            energy: 267.2,
                            protein: 10.2,
                            fat: 10.1,
                            carbohydrates: 32,
                            weight: 570
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 255.9,
                            protein: 10.2,
                            fat: 10.8,
                            carbohydrates: 27.8,
                            weight: 680
                        },
                        thiсk: {
                            energy: 264.1,
                            protein: 10,
                            fat: 10,
                            carbohydrates: 31.7,
                            weight: 770
                        }
                    },
                }
            }
           
                /* ,
            {
                name: 'Meet with adjica',
                img: 'img/body/pizza/meet_with_adjika.avif',
                imgT: '',
                ingredients: [
                    'bavarian sausages',
                    'hot sauce adjika',
                    'spicy chorizo ​​sausages',
                    'chicken',
                    'spicy pepperoni',
                    'mozzarella',
                    'signature tomato sauce'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 307.3,
                            protein: 11.7,
                            fat: 15.1,
                            carbohydrates: 28.9,
                            weight: 420
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 303.7,
                            protein: 12.5,
                            fat: 16.4,
                            carbohydrates: 24.3,
                            weight: 520
                        },
                        thiсk: {
                            energy: 304.9,
                            protein: 11.8,
                            fat: 14.6,
                            carbohydrates: 29.4,
                            weight: 610
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 303.2,
                            protein: 12.4,
                            fat: 15.8,
                            carbohydrates: 25.7,
                            weight: 720
                        },
                        thiсk: {
                            energy: 294.9,
                            protein: 11.5,
                            fat: 14,
                            carbohydrates: 28.6,
                            weight: 840
                        }
                    },
                }
            } */,
            {
                prodId: 1,
                prodName: 'Shrimp with sweet chile',
                img:{
                    s:'',
                    m: 'img/body/pizza/shrimp_with_sweet_chile.avif'
                },
                ingredients: [
/*                     'shrips',
                    'pineapples',
                    'sweet chile ​​sauce',
                    'sweet pepper',
                    'mozzarella',
                    'Alfredo\'s signature sauce' */
                    ingredients[0],
                    ingredients[2],
                    ingredients[3]
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 255.2,
                            protein: 9.7,
                            fat: 7.7,
                            carbohydrates: 35,
                            weight: 390
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 242.6,
                            protein: 9.9,
                            fat: 8.7,
                            carbohydrates: 29.9,
                            weight: 490
                        },
                        thiсk: {
                            energy: 229.2,
                            protein: 8.7,
                            fat: 7.2,
                            carbohydrates: 30.9,
                            weight: 630
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 231.6,
                            protein: 9.2,
                            fat: 7.9,
                            carbohydrates: 29.3,
                            weight: 710
                        },
                        thiсk: {
                            energy: 242.3,
                            protein: 9.1,
                            fat: 7.5,
                            carbohydrates: 32.9,
                            weight: 800
                        }
                    },
                }
            }/* ,
            {
                id: 2,
                name: 'Pizza of halfs',
                img: 'img/body/pizza/pizza_of_halfs.avif',
                imgT: '',
                ingredients: [
                    'Two tastes in one pizza',
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 294.1,
                            protein: 10.6,
                            fat: 10.3,
                            carbohydrates: 37.8,
                            weight: 310
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 304.3,
                            protein: 12.1,
                            fat: 12.7,
                            carbohydrates: 33.2,
                            weight: 360
                        },
                        thiсk: {
                            energy: 292.8,
                            protein: 10.8,
                            fat: 10.6,
                            carbohydrates: 36.7,
                            weight: 470
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 296.5,
                            protein: 11.5,
                            fat: 12.2,
                            carbohydrates: 33.1,
                            weight: 530
                        },
                        thiсk: {
                            energy: 291.4,
                            protein: 10.7,
                            fat: 10.7,
                            carbohydrates: 36,
                            weight: 640
                        }
                    },
                }
            },
            {
                id: 3,
                name: 'Cheesy',
                img: 'img/body/pizza/cheesy.avif',
                imgT: '',
                ingredients: [
                    'mozzarella',
                    'cheddar and parmesan cheeses',
                    'Alfredo\'s signature sauce'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 294.1,
                            protein: 10.6,
                            fat: 10.3,
                            carbohydrates: 37.8,
                            weight: 310
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 304.3,
                            protein: 12.1,
                            fat: 12.7,
                            carbohydrates: 33.2,
                            weight: 360
                        },
                        thiсk: {
                            energy: 292.8,
                            protein: 10.8,
                            fat: 10.6,
                            carbohydrates: 36.7,
                            weight: 470
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 296.5,
                            protein: 11.5,
                            fat: 12.2,
                            carbohydrates: 33.1,
                            weight: 530
                        },
                        thiсk: {
                            energy: 291.4,
                            protein: 10.7,
                            fat: 10.7,
                            carbohydrates: 36,
                            weight: 640
                        }
                    },
                }
            },
            {
                id: 4,
                name: 'Julienne pizza',
                img: 'img/body/pizza/julienne.avif',
                imgT: '',
                ingredients: [
                    'chicken',
                    'cheddar and parmesan cheeses',
                    'champignons',
                    'aromatic mushroom sauce',
                    'red onion',
                    'garlic',
                    'mozzarella',
                    'Alfredo\'s signature sauce'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 237,
                            protein: 10.1,
                            fat: 8.5,
                            carbohydrates: 28.5,
                            weight: 430
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 243.3,
                            protein: 11.4,
                            fat: 10.1,
                            carbohydrates: 25.1,
                            weight: 510
                        },
                        thiсk: {
                            energy: 241.5,
                            protein: 10.3,
                            fat: 8.8,
                            carbohydrates: 28.7,
                            weight: 630
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 242.5,
                            protein: 11.2,
                            fat: 9.9,
                            carbohydrates: 25.6,
                            weight: 730
                        },
                        thiсk: {
                            energy: 251.7,
                            protein: 10.9,
                            fat: 9.3,
                            carbohydrates: 29.5,
                            weight: 820
                        }
                    },
                }
            },
            {
                id: 5,
                name: 'Pesto',
                img: 'img/body/pizza/pesto.avif',
                imgT: 'img/body/pizza/burger_pizza_t.avif',
                ingredients: [
                    'chicken',
                    'pesto sauce',
                    'feta cheese cubics',
                    'tomato',
                    'mozzarella',
                    'Alfredo\'s signature sauce'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 269.2,
                            protein: 11.1,
                            fat: 10.8,
                            carbohydrates: 30.1,
                            weight: 400
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 270.9,
                            protein: 12.2,
                            fat: 12.5,
                            carbohydrates: 25.4,
                            weight: 490
                        },
                        thiсk: {
                            energy: 263.6,
                            protein: 10.9,
                            fat: 10.7,
                            carbohydrates: 29.1,
                            weight: 610
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 250.7,
                            protein: 11.4,
                            fat: 11,
                            carbohydrates: 24.7,
                            weight: 740
                        },
                        thiсk: {
                            energy: 265.3,
                            protein: 11.3,
                            fat: 10.6,
                            carbohydrates: 29.4,
                            weight: 810
                        }
                    },
                }
            },
            {
                id: 6,
                name: 'Carbonara',
                img: 'img/body/pizza/carbonara.avif',
                imgT: 'img/body/pizza/burger_pizza_t.avif',
                ingredients: [
                    'bacon',
                    'cheddar and parmesan cheeses',
                    'mozzarella',
                    'tomatos',
                    'red onion',
                    'garlic',
                    'Alfredo\'s signature sauce',
                    'italian herbs'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 312.2,
                            protein: 9.8,
                            fat: 16.2,
                            carbohydrates: 29.3,
                            weight: 312.2
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 305.4,
                            protein: 10.2,
                            fat: 17.8,
                            carbohydrates: 23.9,
                            weight: 520
                        },
                        thiсk: {
                            energy: 316.7,
                            protein: 10.2,
                            fat: 16.3,
                            carbohydrates: 30.1,
                            weight: 590
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 321.8,
                            protein: 10.5,
                            fat: 18.7,
                            carbohydrates: 25.7,
                            weight: 710
                        },
                        thiсk: {
                            energy: 322.3,
                            protein: 10.2,
                            fat: 17.1,
                            carbohydrates: 29.7,
                            weight: 800
                        }
                    },
                }
            },
            {
                id: 7,
                name: 'Meety',
                img: 'img/body/pizza/meety.avif',
                imgT: 'img/body/pizza/burger_pizza_t.avif',
                ingredients: [
                    'chicken',
                    'ham',
                    'spicy pepperoni',
                    'spicy chorizo ​​sausages',
                    'mozzarella',
                    'signature tomato sauce'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 264.2,
                            protein: 11.5,
                            fat: 9.9,
                            carbohydrates: 30.5,
                            weight: 390
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 253.1,
                            protein: 12.2,
                            fat: 10.8,
                            carbohydrates: 25,
                            weight: 490
                        },
                        thiсk: {
                            energy: 257.8,
                            protein: 11.3,
                            fat: 9.6,
                            carbohydrates: 29.7,
                            weight: 590
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 249.3,
                            protein: 11.8,
                            fat: 10.3,
                            carbohydrates: 25.7,
                            weight: 700
                        },
                        thiсk: {
                            energy: 248.6,
                            protein: 11,
                            fat: 9.3,
                            carbohydrates: 28.6,
                            weight: 820
                        }
                    },
                }
            },
            {
                id: 8,
                name: 'Arriva',
                img: 'img/body/pizza/arriva.avif',
                imgT: 'img/body/pizza/burger_pizza_t.avif',
                ingredients: [
                    'chicken',
                    'spicy chorizo ​​sausages',
                    'burger sauce',
                    'sweet pepper',
                    'red onion',
                    'tomatos',
                    'mozzarella',
                    'ranch sauce',
                    'garlic'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 285.1,
                            protein: 10.2,
                            fat: 11.8,
                            carbohydrates: 32.5,
                            weight: 370
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 282.1,
                            protein: 10.4,
                            fat: 13.7,
                            carbohydrates: 27.1,
                            weight: 460
                        },
                        thiсk: {
                            energy: 276.9,
                            protein: 9.9,
                            fat: 11.7,
                            carbohydrates: 31.1,
                            weight: 570
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 276.2,
                            protein: 10.5,
                            fat: 12.8,
                            carbohydrates: 27.9,
                            weight: 650
                        },
                        thiсk: {
                            energy: 274.8,
                            protein: 9.9,
                            fat: 11.4,
                            carbohydrates: 31.2,
                            weight: 760
                        }
                    },
                }
            },
            {
                id: 9,
                name: 'Burger-pizza',
                img: 'img/body/pizza/burger_pizza.avif',
                imgT: 'img/body/pizza/burger_pizza_t.avif',
                ingredients: [
                    'ham',
                    'pickled cucumbers',
                    'tomatos',
                    'red onion',
                    'garlic',
                    'burger sauce',
                    'mozzarella',
                    'signature tomato sauce'
                ],
                size: {
                    small: {
                        size: '25sm',
                        thiсk: {
                            energy: 222.5,
                            protein: 8.3,
                            fat: 7.3,
                            carbohydrates: 29.4,
                            weight: 420
                        }
                    },
                    medium: {
                        size: '30sm',
                        thin: {
                            energy: 206.1,
                            protein: 8.4,
                            fat: 7.8,
                            carbohydrates: 24.1,
                            weight: 540
                        },
                        thiсk: {
                            energy: 221.3,
                            protein: 8.3,
                            fat: 7.3,
                            carbohydrates: 29,
                            weight: 630
                        }
                    },
                    big: {
                        size: '35sm',
                        thin: {
                            energy: 198,
                            protein: 7.9,
                            fat: 7.1,
                            carbohydrates: 24.4,
                            weight: 780
                        },
                        thiсk: {
                            energy: 206.5,
                            protein: 7.7,
                            fat: 6.7,
                            carbohydrates: 27.6,
                            weight: 890
                        }
                    }
                }
            } */
    
        ]

        /*  нужно будет делать отдельный интерфейс под комбо */
        export const combos: ICombo[] = [
            {
                comboId: 0,
                comboName: '2 drinks',
                comboImg: 'img/body/combo/2_drinks.avif',
                comboElements: [

                ]
            },
            {
                comboId: 1,
                comboName: '2 desserts',
                comboImg: 'img/body/combo/2_desserts.avif',
                comboElements: [

                ]
            },
            {
                comboId: 2,
                comboName: '2 coffee: Latte or Cappuccino',
                comboImg: 'img/body/combo/2_coffee_latte_cappuccino.avif',
                comboElements: [

                ]
            },
            {
                comboId: 3,
                comboName: '2 pizzas',
                comboImg: 'img/body/combo/2_pizzas.avif',
                comboElements: [
                    pizza[0],
                    pizza[1]
                ]
            }/* ,
            {
                id: 4,
                name: '2 pizzas and drink',
                img: 'img/body/combo/2_pizzas_and_drink.avif',
                imgT: '',
                size: {
                    small: {
                        size: '0,5 l'
                    }
                }
            },
            {
                id: 5,
                name: '2 sauces',
                img: 'img/body/combo/2_sauces.avif',
                imgT: '',
                size: {
                    small: {
                        size: '0,5 l'
                    }
                }
            },
            {
                id: 6,
                name: '3 pizzas',
                img: 'img/body/combo/3_pizzas.avif',
                imgT: '',
                size: {
                    small: {
                        size: '0,5 l'
                    }
                }
            },
            {
                id: 7,
                name: '3 pizzas 25sm',
                img: 'img/body/combo/3_pizzas.avif',
                imgT: '',
                size: {
                    small: {
                        size: '0,5 l'
                    }
                }
            },
            {
                id: 8,
                name: '4 snacks',
                img: 'img/body/combo/4in1.avif',
                imgT: '',
                size: {
                    small: {
                        size: '0,5 l'
                    }
                }
            },
            {
                id: 9,
                name: 'breakfast for couple',
                img: 'img/body/combo/combo_breakfast_for_duo.avif',
                imgT: '',
                size: {
                    small: {
                        size: '0,5 l'
                    }
                }
            } */
        ]

        export const testCombo: IComboItem[] = [
            {
                itemId: 0,
                itemName: "2 drinks",
                itemType: ComboItems.Pizza
            }
        ]