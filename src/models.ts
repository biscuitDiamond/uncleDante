/* типы данных, которые мы юзаем в проекте */

export interface IProduct {
    name: string,
    img: string,
    imgT?: string,
    ingredients: Array<string>,
    size: {
        small: {
            size: string,
            thin?: {
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            },
            thiсk:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        },
        medium: {
            size: string,
            thin?: {
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            },
            thiсk:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        }
        big: {
            size: string,
            thin?: {
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            },
            thiсk:{
                energy: number,
                protein: number,
                fat: number,
                carbohydrates: number,
                weight: number
            }
        }
    }
}

export interface IPizza {

}