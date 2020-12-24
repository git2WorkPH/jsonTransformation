
interface Address{
    streetAddress:string;
    city:string;
    state:string ;
    postCode:string;
    latitude:string;
    longtitude:string;
    buildingNumber:number;
    hasCoordinate:boolean;
}

interface Store{
    id:number;
    name:string;
    phoneNumber:string;
    address:Address;
    orderDate:Date;
    orderTime:Date;
    orderOffset:number;
}


interface Categories{
    id:number;
    title:string;
    image:string;
    description:string;
    isQuantitative:boolean;
}

interface Products{
    
}

export type MenuBaseJson = {

        store:Store;
        categories:Categories[];
        filters:object[];

}