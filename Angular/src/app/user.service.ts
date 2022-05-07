import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  docSnapshots,
  query, where
} from '@angular/fire/firestore';
import { User } from '../app/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collection = 'users';

  constructor(private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionData( collection(this.firestore, this.collection) );
  }

  create(item: User) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: User) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: User, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
      email: item.email,
      password: item.password,
      name: item.name,
      surname: item.surname,
      address: item.address,
    });
  }

}
