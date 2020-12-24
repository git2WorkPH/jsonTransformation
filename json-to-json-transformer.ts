import { BaseMenu } from ".";

const {transform} = require('json-to-json-transformer')


export function Json2JsonTransformer(baseInput:BaseMenu){

    const inputObj = {
        foo: {
          bar1: 'hello',
          bar2: 'world' 
        }
      };

      const mergeSubItem = {
        fillings:{
          categories:[{
            id:1,
            price:0,
            name:'add-ons'
          }]
        }
      }


  

      const templateObj = {
        contact: '{{store.phoneNumber}}',
        startTime:'{{store.start_time}}',
        endTime:'{{store.end_time}}',
        categories:['{{categories}}',{
            id:'{{id}}',
            description:'{{title}}'
        }]
      };

      const newObj = transform(templateObj,baseInput)

      return newObj
}
