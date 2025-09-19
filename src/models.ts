/* типы данных, которые мы юзаем в проекте */

import { Interface } from "readline"

/* до редактирования под "комбо" обязательные были ингридиенты, размер, смол, медиум, биг, thick */
export interface IProduct {
    id: number,
    name: string,
    img: string,
    imgT?: string,
    ingredients?: Array<string>,
    size?: {
        small?: {
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

export interface IPizza implements IProduct {
    
}

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
    product: ComboItems,
    pizza?: IPizza,
    snack?:
}

