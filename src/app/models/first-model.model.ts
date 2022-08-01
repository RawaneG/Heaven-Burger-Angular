export class Produit
{
    constructor
    (
        public id : number,
        public nom : string,
        public prix : number,
        public image : string,
        public quantite: number
    ) { }
}
export class Menu
{
    constructor
    (
        public id : number,
        public nom : string,
        public prix : number,
        public image : string,
        public count : number,
        public Frites : [],
        public Burgers : [],
        public Boissons : []
    ) { }
}
export class Boisson
{
    constructor
    (
        public id : number,
        public image : string,
        public nom : string,
        public prix : number,
        public quantite : number
    ) { }
}