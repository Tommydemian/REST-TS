import Item from '../models/item.model'
import { Car } from '../types/car.interface'

const insertItem = async(item: Car) => {
  const itemCreated = await Item.create(item)
  return itemCreated;
}   

export { insertItem }