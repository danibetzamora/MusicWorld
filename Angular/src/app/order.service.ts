import { Injectable } from '@angular/core';
import {Firestore, collectionData, collection, doc, addDoc, deleteDoc, updateDoc, docSnapshots} from '@angular/fire/firestore';
import { Order } from '../app/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  collection = 'orders';

  constructor(private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionData( collection(this.firestore, this.collection) );
  }

  create(item: Order) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: Order) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: Order, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
      name: item.name,
      total: item.name,
      status: item.name,
      due_on: item.name,
      order_date: item.name,
      image: item.name,
    });
  }
}
