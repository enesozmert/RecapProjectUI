export interface CreditCard {
    id: number;
    guid: string;
    userId: number;
    cardName: string;
    carNumber:string;
    expiration: string;
    date: Date;
    cvv: number;
}