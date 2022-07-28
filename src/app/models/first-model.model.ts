export class Produit
{
    constructor (public id : number, public nom : string, public prix : number, public image : string, public quantite: number) { }
}
export class LigneDeMenu
{
    constructor (public id : number, public nom : string, public prix : number, public image : string) { }
}
export class LigneDeBoisson
{
    constructor (public id : number, public nom : string, public prix : number, public image : string) { }
}
export class LigneDeFrites
{
    constructor (public id : number, public nom : string, public prix : number, public image : string) { }
}