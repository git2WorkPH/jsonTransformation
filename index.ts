import * as fs from 'fs'
import * as path from 'path'
import { Json2JsonTransformer } from "./json-to-json-transformer";
import { NodeJsonTransform } from "./node-json-transform";


type Store = {
    id:number,name:string;phoneNumber:string;address:object,start_time:string;end_time:string
}

export type BaseMenu = {
    store:Store,categories:object[],products:object[]
}

const basedInput : BaseMenu = 
    {
    store:{
        id:1,
        name:'World Square',
        phoneNumber:'(02) 9191 0909',
        address:{
            streetAddress:'World Square Shopping Centre',
            postCode:2000,
            hasCoordinate:false
        },
        start_time:'10:30',
        end_time:'21:55',
    },
    categories:[{id: 37, title:'Hard Tacos' },{id:38,title:'Soft Tacos'}],
    products:[
              {id:877,
               title:'One Hard Taco',
               categoryIds:[37],
               price:0,
               fillings:[{
                   id:673,
                   title:'Please select second Taco choice',
                   price:0,
                   fillings:[{
                       id:748,
                       title:'Grilled Chicken (Mild)',
                       price:5
                   }]
                }]},
              {id:783,
               title:'Two Hard Taco',
               description:'Two Hard Taco',
               categoryIds:[37],
               fillings:[{
                   id:673,
                   title:'Please select second Taco choice',
                   price:0,
                   fillings:[{
                       id:2011,
                       title:'Ground Beef (Spicy) Taco #1',
                       price:4.75
                   }]
               }]},

            ],
    }

    
if(!fs.existsSync('./output')){
    fs.mkdirSync('./output')
}

fs.writeFile('./output/nodeJsonTransform.json',JSON.stringify( NodeJsonTransform(basedInput),null,3),(err)=>{ if(err) console.log(err) } )  
fs.writeFile('./output/json2JsonTransform.json',JSON.stringify( Json2JsonTransformer(basedInput),null,3),(err)=>{if(err) console.log(err)} )  


























// import express from 'express'
// import { Json2JsonTransformer } from './json-to-json-transformer';
// import { NodeJsonTransform } from './node-json-transform';

// const app = express();

// app.get(`/node-json-transform`,async function(req,res){
  
//     console.log('result', JSON.stringify(NodeJsonTransform(),null,3))
//     res.send( NodeJsonTransform())

// }) 

// app.get(`/json-2-json-transformer`,async function(req,res){
  
//     console.log('result', JSON.stringify(
//         Json2JsonTransformer(),null,3))
//     res.send( Json2JsonTransformer())

// }) 

// app.listen(3000,()=> console.log('Listening to port 3000'));