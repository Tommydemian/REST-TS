# Controllers:
  controllers should not knwo about business logic
  el controlador recive y contesta => No se encarga de la logica de negocio. 

 ``` TODO: better error handling 
```
 ## Mongoose: 
 making Schemas with mongoosee => key => having interfaces:
 4example: 
 ```javascript
  import {Schema, Types, model, Model} from 'mongoose';
  import { Item } from '../types/item';

  const itemSchema = new Schema<Item>({
    // Schema will follow the type declared. 
  })

 ```