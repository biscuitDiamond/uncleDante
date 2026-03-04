
import { IComboItem, ICombo, Iingredient } from "../../models"
import { combos } from "../../data/dataEng"
import { calculateEnergy } from "../../App"

interface ComboProps {
    c: ICombo
}

/* в параметры добавить элементы комбо */
export function Combo(props : ComboProps){

    /* сделать отдельный компонент Комбо, внутри создать поля под каждое комбо,
    заполнить их извне, интерполируя через мап массив комбос и подставляя в этот мап
    шаблон компонента Комбо 
    
    */

    /* здесь можно сделать матрицу, типо не тотал а вообще всего, 
    а сумма отдельного вектора уже будет показывать суммку одного элемента комбо*/
    function totalEnergyCalc(item : Array<Iingredient>, total : number){
        let tmp : number[] = item.map((i)=> energyCalc(i))
        total = tmp.reduce((acc, curr) => acc + curr)
        /* totalCcal = total */
        /* через редус */
        return total
    }
    function energyCalc(item: Iingredient){

        return item.protein * 4 + item.fat * 9 + item.carbohydrates * 4;
    }
    let currItem : number = 0;
    let tmpCcal : number[] = []
    let itemsTotalCcal : number[] = []
    let comboTotalCcal = itemsTotalCcal.length === 0 ? 0 : itemsTotalCcal.reduce((acc, cur)=> acc + cur)


    function filler(input : number[], cur : number[], out : number[], sz : string) : void{
/*         let tmp : number[] = input
        cur = tmp.reduce((a, c)=>{a + c})
        c.comboElements.map((item)=>{
            currItem = currItem + item.ingredients.map((i)=>{energyCalc(i)})
            
        }) */
        /* for(let i = 0; i < c.comboElements.length; ++i){
        itemsTotalCcal[i] = c.comboElements[i].полеКалорий в зависимости от выбранного размера
       } */
/*         for(let i = 0; i < c.comboElements.length; ++i){
            сделать в IProduct необязательные размеры
        itemsTotalCcal[i] = c.comboElements[i].size?.medium?.thin?.energy?
       } */
    }

    return(
        <li className="p-2 card ">
            <img src={props.c.comboImg} alt={props.c.comboName}></img>
            <div className="my-3px">
                <h1>
                    {props.c.comboName}
                </h1>            
                <span>
    {/*                 {c.comboElements.map((elem)=>{
                        `${elem.prodName}, ccal: ${elem.ingredients.map()=>{

                        }}`
                    })} */}
                    {props.c.comboDescription}
                </span>
            </div>
            <div className="h-[40px] flex flex-row justify-between align-center mt-2">
                <div>
                    <span className="price">
                        5 369 ₽
                    </span>
                    <div className="old-price">
                        7 710 ₽
                    </div>
                </div>
                <div className="flex flex-row justify-between align-center">
                    <button className="btn">
                        <span>Выбрать</span>
                    </button>
                </div>
            </div>
        </li>
    )
}