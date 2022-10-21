export interface Product{

  category:string;
  description:string;
  id:number;
  image:string;
  negativeVotes:number;
  positiveVotes:number;
  price:number;
  productName:string;
  sale:boolean;
  stock:number;

}

export interface ProductCart{

  category:string;
  description:string;
  id:number;
  image:string;
  negativeVotes:number;
  positiveVotes:number;
  price:number;
  productName:string;
  sale:boolean;
  stock:number;
  qty:number;

}

