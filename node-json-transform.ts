import { BaseMenu } from ".";

const {transform} = require('node-json-transform')

export function NodeJsonTransform(basedInput:BaseMenu) {


  // explore filtering functionality, where were 2 json will merge and filter 
  // merge json files
  // replace original json with new json? process 2
  
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
 "store":{ 
   storeId:"id",
    storeName:"name",
    startTime:"start_time",
    endTime:"end_time"
  }
}

const template = {
    service_availability:{
      "storeName":"name",
      "startTime":"start_time",
      "endTime":"end_time"
    },
    categories:"categories"
  ,  
  operate:[
      {
        run:function(){
          return mergeSubItem
        },
        on:'categories'
      }
  ],  
  // this can be define in the UI (if any)
  // remove:["id","phoneNumber","address"],
  // each:function(item:any,store:any){
  //   item.service_availability.storeId = store.id
  //   return item
  // }
};

const result = transform(basedInput,template)




return result;
}