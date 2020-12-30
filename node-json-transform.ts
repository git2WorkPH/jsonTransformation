import { BaseMenu } from ".";
import * as _ from 'lodash'
import * as fs from 'fs';
import { resolve } from "path";
import { reject } from "lodash";

const {transform} = require('node-json-transform')

export  function NodeJsonTransform(basedInput:BaseMenu) {

// explore filtering functionality, where were 2 json will merge and filter 
// merge json files 
// replace original json with new json? process 2
// join different json structure (e.g store, categories:{ fillings:{}},products)

// TODO:
// think on how to dynamically set the attributes in the template.
// 

const store = {storeId:102}

const storeDetails = {
   storeId:"store.id",
    storeName:"store.name",
    startTime:"store.start_time",
    endTime:"store.end_time"
}

const mergeProductFilling = {
  id:1000,
  description:'merge product filling',
  price:0
}

const productsItem = 
  { 
    id:"products.id",
    description:"products.title",
    categoryIds:"products.categoryIds",
    fillings:'product.fillings',
  }
  
const template = {
    item:{
      service_availability:storeDetails,
      subsections:{
        items:'products',
        categories:'categories'
      }
    },
  operate:[
    {
      run:function(ar:any[]){
        return transform(ar,productsItem)
      },
      on:'subsections.items'
    },
    {
      run:()=>{return setStoreId()},
      on:'service_availability.storeId'
    },
    {
      run:(items:any[]) =>{
          return productFillingMerge(items)
      },
      on:'subsections.items'
    }
  ]
};

const result = JSON.stringify(transform(basedInput,template),null,3)


function productFillingMerge(ar:any[]){
   return  ar.map(el => {
      
        if(el.title === 'One Hard Taco'){
          el.fillings.push(mergeProductFilling)
        }
        return el
    })
}

function setStoreId(){
  return store.storeId
}

// const json = new Promise(function(res){ fs.readFileSync('./output/nodeJsonTransform2.json','utf8',(data,err)=>{
  
//   if(err) console.log('err',err)
//   console.log('1',data)

//   res(data)
//  })})
const json = fs.readFileSync('./output/nodeJsonTransform2.json','utf8')
console.log('test',json)
console.log('transform',result)
const mergeJson = JSON.stringify( _.merge(json,result),null,3)

console.log('resultxx',mergeJson)



return mergeJson;
}