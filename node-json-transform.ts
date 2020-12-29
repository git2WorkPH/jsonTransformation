import { BaseMenu } from ".";

const {transform} = require('node-json-transform')

export function NodeJsonTransform(basedInput:BaseMenu) {

  // explore filtering functionality, where were 2 json will merge and filter 
  // merge json files
  // replace original json with new json? process 2
  // join different json structure (e.g store, categories:{ fillings:{}},products)

const storeId = {storeId:102}

const mergeSubItem = {
  fillings:{
    categories:[{
      id:1,
      price:0,
      name:'add-ons'
    }]
  }
}

const storeDetails = {
   storeId:"store.id",
    storeName:"store.name",
    startTime:"store.start_time",
    endTime:"store.end_time"
}

const categories = {
  "item":{
    "catId":"id",
    "description":"title"
  }
}

const productFilling = {

}

const template = {
    item:{
      service_availability:storeDetails,
      subsections:{
        items:'products',
        categories:'categories'
      }
    }
  ,  
  
  // this can be define in the UI (if any)
  // remove:["id","phoneNumber","address"],
  // each:function(item:any,store:any){
  //   item.service_availability.storeId = store.id
  //   return item
  // }
};


function changeName(item:any):any{


}
const result = transform(basedInput,template)




return result;
}