export class Ingredient {
   
   /* name: string;
    amount: number;

    constructor(name: string, amount:number){
        this.name = name;
        this.amount = amount;
    }
    */
    /* Comme on assigne directement les attributs à la création de l'objet, typescript permet d'écrire directement
    Le constructor comme ça*/

    constructor(public name: string,public amount:number) {}
}
