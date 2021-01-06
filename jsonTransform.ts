import * as fs from 'fs'
import * as _ from 'lodash'
import { merge, rest } from 'lodash';
const { transform } = require("node-json-transform");



type PartsExtras = {
    id: number;
    title: string;
    description: string;
    price: number;
    parts:PartsExtras[];
    extras:PartsExtras[];
    drinks:object[];
}

type Products = {
    id: number;
    title: string;
    description: string;
    price: number;
    parts:PartsExtras[];
}
type BaseMenu = {
        id: number;
        title: string;
        products:Products[];
        image: string;
        description: string;
        mainCategory: boolean;
}

type CacheMenu = {
    Categories:BaseMenu[],
    AllCategories:BaseMenu[]
}

export function JsonTransformForMobileWebApp() {

    const data = {
        Categories:[
            {
                "id": 37,
                "title": "Hard Tacos",
                "products": [
                {
                    "id": 877,
                    "title": "One Hard Taco",
                    "description": "One Hard Taco",
                    "price": 0,
                    "parts": [
                    {
                        "id": 673,
                        "title": "Please select first Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 748,
                            "title": "Grilled Chicken (Mild)",
                            "description": "H Grilled Chicken (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100148
                        },
                        {
                            "id": 749,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100149
                        },
                        {
                            "id": 751,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100151
                        },
                        {
                            "id": 752,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100152
                        },
                        {
                            "id": 753,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100153
                        },
                        {
                            "id": 754,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100154
                        },
                        {
                            "id": 772,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100156
                        },
                        {
                            "id": 773,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100157
                        },
                        {
                            "id": 774,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100158
                        },
                        {
                            "id": 775,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100159
                        },
                        {
                            "id": 2010,
                            "title": "Ground Beef (Mild)",
                            "description": "H Ground Beef (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 142
                        },
                        {
                            "id": 2011,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 143
                        }
                        ],
                        "extras": [
                        {
                            "id": 385441,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 385473,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 385433,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385469,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 342,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #1",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385453,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385449,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385493,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 385437,
                            "title": "Add Habanero",
                            "description": "Add Habanero",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385022,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385024,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385489,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 2256,
                            "title": "No Dairy",
                            "description": "No Dairy S Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385018,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385465,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385485,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385445,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 143
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 171
                },
                {
                    "id": 783,
                    "title": "Two Hard Tacos",
                    "description": "Two Hard Tacos",
                    "price": 0,
                    "parts": [
                    {
                        "id": 673,
                        "title": "Please select first Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2011,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5092
                        },
                        {
                            "id": 748,
                            "title": "Grilled Chicken (Mild)",
                            "description": "H Grilled Chicken (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5105
                        },
                        {
                            "id": 749,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5106
                        },
                        {
                            "id": 751,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5108
                        },
                        {
                            "id": 752,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5109
                        },
                        {
                            "id": 753,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5110
                        },
                        {
                            "id": 754,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5111
                        },
                        {
                            "id": 772,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5113
                        },
                        {
                            "id": 773,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5114
                        },
                        {
                            "id": 774,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5115
                        },
                        {
                            "id": 775,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5116
                        },
                        {
                            "id": 2010,
                            "title": "Ground Beef (Mild)",
                            "description": "H Ground Beef (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5091
                        }
                        ],
                        "extras": [
                        {
                            "id": 368,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 365,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385561,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 342,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #1",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385565,
                            "title": "Add Habanero",
                            "description": "Add Habanero",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385573,
                            "title": "No Dairy",
                            "description": "No Dairy",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385577,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385569,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 5091
                    },
                    {
                        "id": 674,
                        "title": "Please select second Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2012,
                            "title": "Ground Beef (Mild)",
                            "description": "H Ground Beef (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5123
                        },
                        {
                            "id": 2013,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5124
                        },
                        {
                            "id": 790,
                            "title": "Grilled Chicken (Mild)",
                            "description": "H Grilled Chicken (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5137
                        },
                        {
                            "id": 791,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5138
                        },
                        {
                            "id": 793,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5140
                        },
                        {
                            "id": 794,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5141
                        },
                        {
                            "id": 795,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5142
                        },
                        {
                            "id": 796,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5143
                        },
                        {
                            "id": 798,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5145
                        },
                        {
                            "id": 799,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5146
                        },
                        {
                            "id": 800,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5147
                        },
                        {
                            "id": 801,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5148
                        }
                        ],
                        "extras": [
                        {
                            "id": 385136,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 435,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 433,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385132,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 429,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #2",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385148,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385144,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385182,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 431,
                            "title": "Add Habanero",
                            "description": "Add Habanero Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385141,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385133,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385179,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 385164,
                            "title": "No Dairy",
                            "description": "No Dairy",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385165,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385160,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385175,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385140,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100159
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 78
                },
                {
                    "id": 784,
                    "title": "Three Hard Tacos",
                    "description": "Three Hard Tacos",
                    "price": 0,
                    "parts": [
                    {
                        "id": 673,
                        "title": "Please select first Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2010,
                            "title": "Ground Beef (Mild)",
                            "description": "H Ground Beef (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5155
                        },
                        {
                            "id": 2011,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5156
                        },
                        {
                            "id": 748,
                            "title": "Grilled Chicken (Mild)",
                            "description": "H Grilled Chicken (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5169
                        },
                        {
                            "id": 749,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5170
                        },
                        {
                            "id": 751,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5172
                        },
                        {
                            "id": 752,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5173
                        },
                        {
                            "id": 753,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5174
                        },
                        {
                            "id": 754,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5175
                        },
                        {
                            "id": 772,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5177
                        },
                        {
                            "id": 773,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5178
                        },
                        {
                            "id": 774,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5179
                        },
                        {
                            "id": 775,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5180
                        }
                        ],
                        "extras": [
                        {
                            "id": 385441,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 385473,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 385469,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385433,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 342,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #1",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385453,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385449,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385493,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 385437,
                            "title": "Add Habanero",
                            "description": "Add Habanero",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385022,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385024,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385489,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 2256,
                            "title": "No Dairy",
                            "description": "No Dairy S Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385018,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385465,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385485,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385445,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100159
                    },
                    {
                        "id": 674,
                        "title": "Please select second Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2012,
                            "title": "Ground Beef (Mild)",
                            "description": "H Ground Beef (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5187
                        },
                        {
                            "id": 2013,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5188
                        },
                        {
                            "id": 790,
                            "title": "Grilled Chicken (Mild)",
                            "description": "H Grilled Chicken (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5201
                        },
                        {
                            "id": 791,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5202
                        },
                        {
                            "id": 793,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5204
                        },
                        {
                            "id": 794,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5205
                        },
                        {
                            "id": 795,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5206
                        },
                        {
                            "id": 796,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5207
                        },
                        {
                            "id": 798,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5209
                        },
                        {
                            "id": 799,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5210
                        },
                        {
                            "id": 800,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5211
                        },
                        {
                            "id": 801,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5212
                        }
                        ],
                        "extras": [
                        {
                            "id": 385136,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 435,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 433,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385132,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 429,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #2",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385148,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385144,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385182,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 431,
                            "title": "Add Habanero",
                            "description": "Add Habanero Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385141,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385133,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385179,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 385164,
                            "title": "No Dairy",
                            "description": "No Dairy",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385165,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385160,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385175,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385140,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100159
                    },
                    {
                        "id": 676,
                        "title": "Please select third Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2014,
                            "title": "Ground Beef (Mild)",
                            "description": "H Ground Beef (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5219
                        },
                        {
                            "id": 2015,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5220
                        },
                        {
                            "id": 802,
                            "title": "Grilled Chicken (Mild)",
                            "description": "H Grilled Chicken (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5233
                        },
                        {
                            "id": 803,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5234
                        },
                        {
                            "id": 805,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5236
                        },
                        {
                            "id": 806,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5237
                        },
                        {
                            "id": 807,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5238
                        },
                        {
                            "id": 808,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5239
                        },
                        {
                            "id": 810,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5241
                        },
                        {
                            "id": 811,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5242
                        },
                        {
                            "id": 812,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5243
                        },
                        {
                            "id": 813,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5244
                        }
                        ],
                        "extras": [
                        {
                            "id": 385002,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 436,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo Tacos #3",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 434,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #3",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 457,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese Soft Taco 1",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 430,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #3",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385016,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385017,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385183,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 432,
                            "title": "Add Habanero",
                            "description": "Add Habanero Tacos #3",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385142,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385134,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385025,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 2256,
                            "title": "No Dairy",
                            "description": "No Dairy S Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385714,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385034,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385009,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385014,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100159
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 76
                }
                ],
                "image": "https://apac03-mcui-prod.mfapdc.com/GYG_PROD/UIServices/Cache/136_Category_Small_Image_en-AU.jpg",
                "description": "Jack cheese, Iceberg lettuce, salsa and filling, in a Chipotle-seasoned hard shell corn tortilla.\r\n",
                "mainCategory": true
            },
            {
                "id": 45,
                "title": "Soft Tacos",
                "products": [
                {
                    "id": 878,
                    "title": "One Soft Taco",
                    "description": "One Soft Taco",
                    "price": 0,
                    "parts": [
                    {
                        "id": 874,
                        "title": "Please select first Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 814,
                            "title": "Grilled Chicken (Mild)",
                            "description": "Grilled Chicken (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100133
                        },
                        {
                            "id": 815,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100134
                        },
                        {
                            "id": 817,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100136
                        },
                        {
                            "id": 818,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100137
                        },
                        {
                            "id": 819,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100138
                        },
                        {
                            "id": 820,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100139
                        },
                        {
                            "id": 822,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100144
                        },
                        {
                            "id": 823,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #1",
                            "price": 5.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100145
                        },
                        {
                            "id": 824,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100146
                        },
                        {
                            "id": 825,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 100147
                        },
                        {
                            "id": 2016,
                            "title": "Ground Beef (Mild)",
                            "description": "Ground Beef (Mild) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 140
                        },
                        {
                            "id": 2017,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #1",
                            "price": 5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 141
                        }
                        ],
                        "extras": [
                        {
                            "id": 385441,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 385473,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 385433,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385469,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 342,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #1",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385453,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385449,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385493,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 385437,
                            "title": "Add Habanero",
                            "description": "Add Habanero",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385022,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385024,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385489,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 2256,
                            "title": "No Dairy",
                            "description": "No Dairy S Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385018,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385465,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385485,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385445,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 141
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 171
                },
                {
                    "id": 744,
                    "title": "Two Soft Tacos",
                    "description": "Two Soft Tacos",
                    "price": 0,
                    "parts": [
                    {
                        "id": 874,
                        "title": "Please select first Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 814,
                            "title": "Grilled Chicken (Mild)",
                            "description": "Grilled Chicken (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5093
                        },
                        {
                            "id": 815,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5094
                        },
                        {
                            "id": 817,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5096
                        },
                        {
                            "id": 818,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5097
                        },
                        {
                            "id": 819,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5098
                        },
                        {
                            "id": 820,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5099
                        },
                        {
                            "id": 822,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5101
                        },
                        {
                            "id": 823,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #1",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5102
                        },
                        {
                            "id": 824,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5103
                        },
                        {
                            "id": 825,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5104
                        },
                        {
                            "id": 2017,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5090
                        },
                        {
                            "id": 2016,
                            "title": "Ground Beef (Mild)",
                            "description": "Ground Beef (Mild) Taco #1",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5089
                        }
                        ],
                        "extras": [
                        {
                            "id": 385509,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 365,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385497,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 342,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #1",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385501,
                            "title": "Add Habanero",
                            "description": "Add Habanero",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385018,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385505,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 5089
                    },
                    {
                        "id": 875,
                        "title": "Please select second Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2018,
                            "title": "Ground Beef (Mild)",
                            "description": "Ground Beef (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5121
                        },
                        {
                            "id": 2019,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5122
                        },
                        {
                            "id": 850,
                            "title": "Grilled Chicken (Mild)",
                            "description": "Grilled Chicken (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5125
                        },
                        {
                            "id": 851,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5126
                        },
                        {
                            "id": 853,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5128
                        },
                        {
                            "id": 854,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5129
                        },
                        {
                            "id": 855,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5130
                        },
                        {
                            "id": 856,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5131
                        },
                        {
                            "id": 858,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5133
                        },
                        {
                            "id": 859,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #2",
                            "price": 5.25,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5134
                        },
                        {
                            "id": 860,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5135
                        },
                        {
                            "id": 861,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #2",
                            "price": 4.75,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5136
                        }
                        ],
                        "extras": [
                        {
                            "id": 385136,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 435,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 385132,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 433,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 429,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #2",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385148,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385144,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385182,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 431,
                            "title": "Add Habanero",
                            "description": "Add Habanero Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385141,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385133,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385179,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 385164,
                            "title": "No Dairy",
                            "description": "No Dairy",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385165,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385160,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385175,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385140,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100147
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 78
                },
                {
                    "id": 745,
                    "title": "Three Soft Tacos",
                    "description": "Three Soft Tacos",
                    "price": 0,
                    "parts": [
                    {
                        "id": 874,
                        "title": "Please select first Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2016,
                            "title": "Ground Beef (Mild)",
                            "description": "Ground Beef (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5153
                        },
                        {
                            "id": 2017,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5154
                        },
                        {
                            "id": 814,
                            "title": "Grilled Chicken (Mild)",
                            "description": "Grilled Chicken (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5157
                        },
                        {
                            "id": 815,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5158
                        },
                        {
                            "id": 817,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5160
                        },
                        {
                            "id": 818,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5161
                        },
                        {
                            "id": 819,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5162
                        },
                        {
                            "id": 820,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5163
                        },
                        {
                            "id": 822,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5165
                        },
                        {
                            "id": 823,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #1",
                            "price": 4.34,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5166
                        },
                        {
                            "id": 824,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5167
                        },
                        {
                            "id": 825,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #1",
                            "price": 3.84,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5168
                        }
                        ],
                        "extras": [
                        {
                            "id": 385441,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 385473,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 385433,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385469,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 342,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #1",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385453,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385449,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385493,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 385437,
                            "title": "Add Habanero",
                            "description": "Add Habanero",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385022,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385024,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385489,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 2256,
                            "title": "No Dairy",
                            "description": "No Dairy S Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385018,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385465,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385485,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385445,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100147
                    },
                    {
                        "id": 875,
                        "title": "Please select second Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2018,
                            "title": "Ground Beef (Mild)",
                            "description": "Ground Beef (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5185
                        },
                        {
                            "id": 2019,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5186
                        },
                        {
                            "id": 850,
                            "title": "Grilled Chicken (Mild)",
                            "description": "Grilled Chicken (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5189
                        },
                        {
                            "id": 851,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5190
                        },
                        {
                            "id": 853,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5192
                        },
                        {
                            "id": 854,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5193
                        },
                        {
                            "id": 855,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5194
                        },
                        {
                            "id": 856,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5195
                        },
                        {
                            "id": 858,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5197
                        },
                        {
                            "id": 859,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #2",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5198
                        },
                        {
                            "id": 860,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5199
                        },
                        {
                            "id": 861,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #2",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5200
                        }
                        ],
                        "extras": [
                        {
                            "id": 385136,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 435,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 385132,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 433,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 429,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #2",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385148,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385144,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385182,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 431,
                            "title": "Add Habanero",
                            "description": "Add Habanero Tacos #2",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385141,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385133,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385179,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 385164,
                            "title": "No Dairy",
                            "description": "No Dairy",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385165,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385160,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385175,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385140,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100147
                    },
                    {
                        "id": 876,
                        "title": "Please select third Taco choice",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 2020,
                            "title": "Ground Beef (Mild)",
                            "description": "Ground Beef (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5217
                        },
                        {
                            "id": 2021,
                            "title": "Ground Beef (Spicy)",
                            "description": "Ground Beef (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5218
                        },
                        {
                            "id": 862,
                            "title": "Grilled Chicken (Mild)",
                            "description": "Grilled Chicken (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5221
                        },
                        {
                            "id": 863,
                            "title": "Grilled Chicken (Spicy)",
                            "description": "Grilled Chicken (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5222
                        },
                        {
                            "id": 865,
                            "title": "Slow Cooked Beef (Mild) $0.50",
                            "description": "Slow Cooked Beef (Mild) Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5224
                        },
                        {
                            "id": 866,
                            "title": "Pulled Pork (Spicy)",
                            "description": "Pulled Pork Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5225
                        },
                        {
                            "id": 867,
                            "title": "Pan Seared Barramundi (Mild)",
                            "description": "Pan Seared Barramundi (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5226
                        },
                        {
                            "id": 868,
                            "title": "Sautéed Vegetables with Guacamole (Mild)",
                            "description": "Sautéed Vegetables with Guacamole (Mild) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5227
                        },
                        {
                            "id": 870,
                            "title": "Slow Cooked Beef (Spicy) $0.50",
                            "description": "Slow Cooked Beef (Spicy) Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5229
                        },
                        {
                            "id": 871,
                            "title": "Pulled Pork (Mild)",
                            "description": "Pulled Pork (Mild) Taco #3",
                            "price": 4.33,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5230
                        },
                        {
                            "id": 872,
                            "title": "Pan Seared Barramundi (Spicy)",
                            "description": "Pan Seared Barramundi (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5231
                        },
                        {
                            "id": 873,
                            "title": "Sautéed Vegetables with Guacamole (Spicy)",
                            "description": "Sautéed Vegetables with Guacamole (Spicy) Taco #3",
                            "price": 3.83,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 5232
                        }
                        ],
                        "extras": [
                        {
                            "id": 385002,
                            "title": "Beans",
                            "description": "Beans",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105003,
                            "taskIngredientPlu": 385002
                        },
                        {
                            "id": 436,
                            "title": "No Pico De Gallo",
                            "description": "No Pico De Gallo Tacos #3",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103571,
                            "taskIngredientPlu": 385005
                        },
                        {
                            "id": 457,
                            "title": "Extra Cheese",
                            "description": "Extra Cheese Soft Taco 1",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 434,
                            "title": "No Cheese",
                            "description": "No Cheese H Tacos #3",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103570,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 430,
                            "title": "Add Fresh Jalapeños",
                            "description": "Add Fresh Jalapeños Tacos #3",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103574,
                            "taskIngredientPlu": 385010
                        },
                        {
                            "id": 385016,
                            "title": "Diced Onions",
                            "description": "Diced Onions",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105017,
                            "taskIngredientPlu": 385016
                        },
                        {
                            "id": 385017,
                            "title": "Coriander",
                            "description": "Coriander",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105018,
                            "taskIngredientPlu": 385017
                        },
                        {
                            "id": 385183,
                            "title": "Tomatillo",
                            "description": "Tomatillo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105020,
                            "taskIngredientPlu": 385019
                        },
                        {
                            "id": 432,
                            "title": "Add Habanero",
                            "description": "Add Habanero Tacos #3",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 103573,
                            "taskIngredientPlu": 385021
                        },
                        {
                            "id": 385142,
                            "title": "Chimi Mayo",
                            "description": "Chimi Mayo",
                            "price": 0.3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105023,
                            "taskIngredientPlu": 385022
                        },
                        {
                            "id": 385134,
                            "title": "Add Smoky Chipotle Salsa",
                            "description": "Add Smoky Chipotle Salsa",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105025,
                            "taskIngredientPlu": 385024
                        },
                        {
                            "id": 385025,
                            "title": "Sub Chimi Mayo",
                            "description": "Sub Chimi Mayo",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105026,
                            "taskIngredientPlu": 385025
                        },
                        {
                            "id": 2256,
                            "title": "No Dairy",
                            "description": "No Dairy S Tacos #1",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105031,
                            "taskIngredientPlu": 385032
                        },
                        {
                            "id": 385714,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105019,
                            "taskIngredientPlu": 385018
                        },
                        {
                            "id": 385034,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 106241,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385009,
                            "title": "Sour Cream",
                            "description": "Sour Cream",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105010,
                            "taskIngredientPlu": 385009
                        },
                        {
                            "id": 385014,
                            "title": "Chipotle Mayo",
                            "description": "Chipotle Mayo",
                            "price": 0.5,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105886,
                            "taskIngredientPlu": 385040
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 100147
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 76
                }
                ],
                "image": "https://apac03-mcui-prod.mfapdc.com/GYG_PROD/UIServices/Cache/145_Category_Small_Image_en-AU.jpg",
                "description": "Jack cheese, Iceberg lettuce, salsa and filling, in a soft flour tortilla.",
                "mainCategory": true
            },
            {
                "id": 105,
                "title": "$3 tacos",
                "products": [
                {
                    "id": 2302,
                    "title": "1 x $3 Taco",
                    "description": "1 x $3 Taco",
                    "price": 0,
                    "parts": [
                    {
                        "id": 106257,
                        "title": "Menu 1",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 460035,
                            "title": "$3 Mild Gr Beef",
                            "description": "$3 Mild Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 502
                        },
                        {
                            "id": 460034,
                            "title": "$3 Spicy Gr Beef",
                            "description": "$3 Spicy Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 503
                        }
                        ],
                        "extras": [
                        {
                            "id": 385720,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385718,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385719,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385018
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 106239
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 223
                },
                {
                    "id": 2303,
                    "title": "2 x $3 Tacos",
                    "description": "2 x $3 Tacos",
                    "price": 0,
                    "parts": [
                    {
                        "id": 106257,
                        "title": "Menu 1",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 460034,
                            "title": "$3 Spicy Gr Beef",
                            "description": "$3 Spicy Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 538
                        },
                        {
                            "id": 460035,
                            "title": "$3 Mild Gr Beef",
                            "description": "$3 Mild Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 533
                        }
                        ],
                        "extras": [
                        {
                            "id": 385723,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385721,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385722,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385018
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 106269
                    },
                    {
                        "id": 106258,
                        "title": "Menu 2",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 460036,
                            "title": "$3 Spicy Gr Beef",
                            "description": "$3 Spicy Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 540
                        },
                        {
                            "id": 460037,
                            "title": "$3 Mild Gr Beef",
                            "description": "$3 Mild Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 534
                        }
                        ],
                        "extras": [
                        {
                            "id": 385729,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385727,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385728,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385018
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 106282
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 224
                },
                {
                    "id": 2304,
                    "title": "3 x $3 Taco",
                    "description": "3 x $3 Taco",
                    "price": 0,
                    "parts": [
                    {
                        "id": 106257,
                        "title": "Menu 1",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 460034,
                            "title": "$3 Spicy Gr Beef",
                            "description": "$3 Spicy Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 539
                        },
                        {
                            "id": 460035,
                            "title": "$3 Mild Gr Beef",
                            "description": "$3 Mild Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 514
                        }
                        ],
                        "extras": [
                        {
                            "id": 385723,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385721,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385722,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385018
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 106281
                    },
                    {
                        "id": 106258,
                        "title": "Menu 2",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 460036,
                            "title": "$3 Spicy Gr Beef",
                            "description": "$3 Spicy Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 541
                        },
                        {
                            "id": 460037,
                            "title": "$3 Mild Gr Beef",
                            "description": "$3 Mild Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 535
                        }
                        ],
                        "extras": [
                        {
                            "id": 385729,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385727,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385728,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385018
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 106283
                    },
                    {
                        "id": 106259,
                        "title": "Menu 3",
                        "description": "",
                        "price": 0,
                        "parts": [
                        {
                            "id": 460038,
                            "title": "$3 Spicy Gr Beef",
                            "description": "$3 Spicy Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 542
                        },
                        {
                            "id": 460039,
                            "title": "$3 Mild Gr Beef",
                            "description": "$3 Mild Gr Beef",
                            "price": 3,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskMenuflowId": null,
                            "taskMenuFlowProductPlu": 537
                        }
                        ],
                        "extras": [
                        {
                            "id": 385735,
                            "title": "Lime",
                            "description": "Lime",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 505
                        },
                        {
                            "id": 385733,
                            "title": "No Cheese",
                            "description": "No Cheese",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385006
                        },
                        {
                            "id": 385734,
                            "title": "No Shredded Lettuce",
                            "description": "No Shredded Lettuce",
                            "price": 0,
                            "parts": [
                            
                            ],
                            "extras": [
                            
                            ],
                            "drinks": [
                            
                            ],
                            "taskModifierId": 1,
                            "taskModifier": "Extra",
                            "taskIngredientId": 105007,
                            "taskIngredientPlu": 385018
                        }
                        ],
                        "drinks": [
                        
                        ],
                        "productId": 106273
                    }
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": 225
                }
                ],
                "image": "",
                "description": "",
                "mainCategory": true
            }
        ],
        AllCategories:[
            {
                "id": 66,
                "title": "Soft Tacos Options",
                "products": [
                {
                    "id": 385441,
                    "title": "Beans",
                    "description": "Beans",
                    "price": 0.5,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105003,
                    "taskIngredientPlu": 385002
                },
                {
                    "id": 385473,
                    "title": "No Pico De Gallo",
                    "description": "No Pico De Gallo",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 103571,
                    "taskIngredientPlu": 385005
                },
                {
                    "id": 385433,
                    "title": "Extra Cheese",
                    "description": "Extra Cheese",
                    "price": 0.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 103570,
                    "taskIngredientPlu": 385006
                },
                {
                    "id": 385469,
                    "title": "No Cheese",
                    "description": "No Cheese",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 103570,
                    "taskIngredientPlu": 385006
                },
                {
                    "id": 342,
                    "title": "Add Fresh Jalapeños",
                    "description": "Add Fresh Jalapeños Tacos #1",
                    "price": 0.5,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 103574,
                    "taskIngredientPlu": 385010
                },
                {
                    "id": 385453,
                    "title": "Diced Onions",
                    "description": "Diced Onions",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105017,
                    "taskIngredientPlu": 385016
                },
                {
                    "id": 385449,
                    "title": "Coriander",
                    "description": "Coriander",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105018,
                    "taskIngredientPlu": 385017
                },
                {
                    "id": 385493,
                    "title": "Tomatillo",
                    "description": "Tomatillo",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105020,
                    "taskIngredientPlu": 385019
                },
                {
                    "id": 385437,
                    "title": "Add Habanero",
                    "description": "Add Habanero",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 103573,
                    "taskIngredientPlu": 385021
                },
                {
                    "id": 385022,
                    "title": "Chimi Mayo",
                    "description": "Chimi Mayo",
                    "price": 0.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105023,
                    "taskIngredientPlu": 385022
                },
                {
                    "id": 385024,
                    "title": "Add Smoky Chipotle Salsa",
                    "description": "Add Smoky Chipotle Salsa",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105025,
                    "taskIngredientPlu": 385024
                },
                {
                    "id": 385489,
                    "title": "Sub Chimi Mayo",
                    "description": "Sub Chimi Mayo",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105026,
                    "taskIngredientPlu": 385025
                },
                {
                    "id": 2256,
                    "title": "No Dairy",
                    "description": "No Dairy S Tacos #1",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105031,
                    "taskIngredientPlu": 385032
                },
                {
                    "id": 385018,
                    "title": "No Shredded Lettuce",
                    "description": "No Shredded Lettuce",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105019,
                    "taskIngredientPlu": 385018
                },
                {
                    "id": 385465,
                    "title": "Lime",
                    "description": "Lime",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 106241,
                    "taskIngredientPlu": 505
                },
                {
                    "id": 385485,
                    "title": "Sour Cream",
                    "description": "Sour Cream",
                    "price": 0.5,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105010,
                    "taskIngredientPlu": 385009
                },
                {
                    "id": 385445,
                    "title": "Chipotle Mayo",
                    "description": "Chipotle Mayo",
                    "price": 0.5,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105886,
                    "taskIngredientPlu": 385040
                }
                ],
                "image": "https://apac03-mcui-prod.mfapdc.com/GYG_PROD/UIServices/Cache/145_Category_Small_Image_en-AU.jpg",
                "description": "Soft Tacos Optional Mods",
                "mainCategory": false
            },
            {
                "id": 105,
                "title": "$3 tacos Options",
                "products": [
                {
                    "id": 385720,
                    "title": "Lime",
                    "description": "Lime",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105007,
                    "taskIngredientPlu": 505
                },
                {
                    "id": 385718,
                    "title": "No Cheese",
                    "description": "No Cheese",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105007,
                    "taskIngredientPlu": 385006
                },
                {
                    "id": 385719,
                    "title": "No Shredded Lettuce",
                    "description": "No Shredded Lettuce",
                    "price": 0,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskModifierId": 1,
                    "taskModifier": "Extra",
                    "taskIngredientId": 105007,
                    "taskIngredientPlu": 385018
                }
                ],
                "image": "",
                "description": "$3 tacos Optional Mods",
                "mainCategory": false
            },
            {
                "id": 115,
                "title": "Make It a Meal Options",
                "products": [
                {
                    "id": 1690,
                    "title": "Large Fries with GYG Seasoning - 2250kJ",
                    "description": "Large Fries with GYG Seasoning - 2250kJ",
                    "price": 2.7,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 202
                },
                {
                    "id": 1689,
                    "title": "Medium Fries with GYG Seasoning - 1500kJ",
                    "description": "",
                    "price": 1.7,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 201
                },
                {
                    "id": 1697,
                    "title": "Apple Juice (Bottle)",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 40
                },
                {
                    "id": 1698,
                    "title": "Orange Juice (Bottle)",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 41
                },
                {
                    "id": 1962,
                    "title": "Real Iced Tea Peach",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 56
                },
                {
                    "id": 1961,
                    "title": "Real Iced Tea Lemon",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 57
                },
                {
                    "id": 1696,
                    "title": "Ginger Beer (Bottle)",
                    "description": "",
                    "price": 3.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100462
                },
                {
                    "id": 1692,
                    "title": "Jarritos Guava (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100465
                },
                {
                    "id": 1693,
                    "title": "Jarritos Mandarin (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100466
                },
                {
                    "id": 1694,
                    "title": "Jarritos Lime (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100467
                },
                {
                    "id": 1695,
                    "title": "Jarritos Cola (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100468
                },
                {
                    "id": 1700,
                    "title": "Coke 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100489
                },
                {
                    "id": 1701,
                    "title": "Coke No Sugar 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100490
                },
                {
                    "id": 1702,
                    "title": "Lift 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100491
                },
                {
                    "id": 1703,
                    "title": "Sprite 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100492
                },
                {
                    "id": 1706,
                    "title": "Coke 600ml (Bottle)",
                    "description": "",
                    "price": 4.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100493
                },
                {
                    "id": 1707,
                    "title": "Coke No Sugar 600ml (Bottle)",
                    "description": "",
                    "price": 4.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100494
                },
                {
                    "id": 1708,
                    "title": "Sprite 600ml (Bottle)",
                    "description": "",
                    "price": 4.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100495
                },
                {
                    "id": 1704,
                    "title": "Mt Franklin Still 600ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100496
                },
                {
                    "id": 1705,
                    "title": "Mt Franklin Sparkling 450ml (Bottle)",
                    "description": "",
                    "price": 3.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100497
                },
                {
                    "id": 1697,
                    "title": "Apple Juice (Bottle)",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 40
                },
                {
                    "id": 1698,
                    "title": "Orange Juice (Bottle)",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 41
                },
                {
                    "id": 1962,
                    "title": "Real Iced Tea Peach",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 56
                },
                {
                    "id": 1961,
                    "title": "Real Iced Tea Lemon",
                    "description": "",
                    "price": 4.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 57
                },
                {
                    "id": 1696,
                    "title": "Ginger Beer (Bottle)",
                    "description": "",
                    "price": 3.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100462
                },
                {
                    "id": 1692,
                    "title": "Jarritos Guava (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100465
                },
                {
                    "id": 1693,
                    "title": "Jarritos Mandarin (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100466
                },
                {
                    "id": 1694,
                    "title": "Jarritos Lime (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100467
                },
                {
                    "id": 1695,
                    "title": "Jarritos Cola (Bottle)",
                    "description": "",
                    "price": 5.1,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100468
                },
                {
                    "id": 1700,
                    "title": "Coke 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100489
                },
                {
                    "id": 1701,
                    "title": "Coke No Sugar 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100490
                },
                {
                    "id": 1702,
                    "title": "Lift 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100491
                },
                {
                    "id": 1703,
                    "title": "Sprite 390ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100492
                },
                {
                    "id": 1706,
                    "title": "Coke 600ml (Bottle)",
                    "description": "",
                    "price": 4.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100493
                },
                {
                    "id": 1707,
                    "title": "Coke No Sugar 600ml (Bottle)",
                    "description": "",
                    "price": 4.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100494
                },
                {
                    "id": 1708,
                    "title": "Sprite 600ml (Bottle)",
                    "description": "",
                    "price": 4.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100495
                },
                {
                    "id": 1704,
                    "title": "Mt Franklin Still 600ml (Bottle)",
                    "description": "",
                    "price": 3.3,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100496
                },
                {
                    "id": 1705,
                    "title": "Mt Franklin Sparkling 450ml (Bottle)",
                    "description": "",
                    "price": 3.8,
                    "parts": [
                    
                    ],
                    "extras": [
                    
                    ],
                    "drinks": [
                    
                    ],
                    "taskMenuflowId": null,
                    "taskMenuFlowProductPlu": 100497
                }
                ],
                "image": "",
                "description": "Make It a Meal Optional Mods",
                "mainCategory": false
            },
        ],
    };

const cacheMenu:CacheMenu =  JSON.parse(fs.readFileSync('./jsonFile/Standard-BOH-V93(APP).json','utf8'))

const mergeCategories = _.merge(cacheMenu.AllCategories,cacheMenu.Categories)
const preProcessCacheMenu = mergeCategories.filter(el=> el.mainCategory === true  )

let getProductsList:{
    id:number;
    title:string;
    description:string;
    price:number;
    fillings:Array<{}>,
    extras:Array<{}>,
    drinks:Array<{}>,
    categoryIds:Array<number>,
}[]=[];

preProcessCacheMenu.forEach((el:any)=>{
     el.products.forEach((x:any)=>{
        getProductsList.push( {
            id: x.id,
            title: x.title,
            description: x.description,
            price: x.price,
            fillings: x.parts,
            extras: x.extras,
            drinks: x.drinks,
            categoryIds:[el.id]
        })
    })
   
})

/** Category details transformation */
const categoriesProducts = {
    id:'id',
    title:'title',
    image:'image',
    description:'description',
}

const categoryTemplate = {

   item:categoriesProducts,
   operate:[
       {
        run:()=>{
            return true
        },
        on:'isQuantitative'
       },
   ]
}  
  
const categories = transform(preProcessCacheMenu, categoryTemplate);
/** end  */

/** Start Product Details transformation */

const productDetailsTemplate= {
    items:{
        id:'id',
        title:'title',
        description:'description',
        fillings:'parts',
        categoryIds:'categoryIds'
    },
}

const productDetailTransform = transform(getProductsList,productDetailsTemplate)

const finalResults = {
    categories,
    filters:[],
    products:productDetailTransform,
}

console.log('final:',JSON.stringify(finalResults,null,3));

fs.writeFileSync('./output/menu.json',JSON.stringify(finalResults,null,3))
}
