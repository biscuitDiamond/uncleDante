/* типы данных, которые мы юзаем в проекте */

/* import { Interface } from "readline"
import { ingredients } from "./data/dataEng" */

export function calc(this:any, i: Iingredient){
    return i.protein * 4 + i.fat * 9 + i.carbohydrates * 4
}

export interface Iingredient {
    ing_id: number,
    name: string,
    img: string,
    protein: number,
    fat: number,
    carbohydrates: number,
    weight: number,
    energy: number,
    cost: number,
/*     calc: ()=>{} */
/*     toCalcEnergy() => {
        return 1;
    } */
/*     toCalc: ()=>{
    } */
    /* calc?: Function */
}




/* до редактирования под "комбо" обязательные были ингридиенты, размер, смол, медиум, биг, thick */
export interface IProduct {
    prodId: number,
    prodName: string,
    /* s, m, l */
    img: {
        s: string,
        m?: string,
        l?: string
    },
    ingredients: Array<Iingredient>
    /* добавить поля size */
    size?: {
        small?:{
            size: string,
            thick?:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        },
        medium?: {
            size: string,
            thin?: {
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            },
            thiсk?:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        }
        big?: {
            size: string,
            thin?: {
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            },
            thiсk?:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        }
    }
}
/* общий интерфейс под комбо, в зависимости от того, что является элементом комбо, реализовать элементами другие интерфейсы.
итем комбо - перечисление ? */
export const enum ComboItems {
    Pizza,
    Snacks,
    Cocktails,
    Coffee,
    Drinks,
    Deserts,
    Sauces
}

export interface IPizza extends IProduct {
    imgThick?: {
        s: string,
        m?: string,
        l?: string
    },
    size: {
        small?: {
            size: string,
            thiсk?:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        },
        medium?: {
            size: string,
            thin?: {
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            },
            thiсk?:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        }
        big?: {
            size: string,
            thin?: {
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            },
            thiсk?:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        }
    }
}

/* export interface ISnack extends IProduct {
    size: { */
        /* мб энергоценность внести в IProduct, а зависимость от размера уже вынести, как какой-то множитель, и на основании этого высчитывать ее в конечном продукте ? т.к. сейчас идет дубляж кода */
/*         small?: {
            energy: number,
            protein: number,
            fat: number,
            carbohydrates: number,
            weight: number    
        },
        medium?:{

        },
        big?:{
            
        }
    }
} */
export interface IComboItem {
    itemId: number,
    itemName: string,
    /* itemType: Interface */
    /* pizza: IProduct, */
    /* 
    если сделать IProduct максимально обобщенный, после реализовать общий более узкими интерфейсами
    в ICombo сделать поле product: interface[], в реализацию закинуть массив поле/интерфейс, в зависимости от выбранно
    */


/*     product:Interface[
        
    ] */
/* product: Array<Interface> */
    /* product: ComboItems.Pizza */
    /* product: Array<Enumerator<ComboItems>>[] */
    itemType: ComboItems,
    /* если мой элемент == пицца, то будет поле  */
    pizza?: IPizza,
/*     snack?: ISnack */
}

export interface IDrink {
    name: string,
    surname: string,
    prodName: string
}

export interface ICoffee extends IProduct {
    
}

export interface ICocktails extends IProduct {
    
}

export interface IDesserts extends IProduct {
    
}

export interface IDrinks extends IProduct {
    
}

export interface IComboType {
    pizza?: IPizza,
    drink?: IDrink
}

export interface ICombo {
    comboId: number,
    comboName: string,
    comboImg: string,
    comboDescription: string,
    /* в T добавить общий интерфейс, в которм интерфейсы всех продуктов ? */
    comboElements: Array<IPizza | ICoffee | ICocktails | IDesserts | IDrinks>
}

