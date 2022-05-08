import { Injectable } from '@angular/core';
import {addDoc, collection, collectionSnapshots, deleteDoc, doc, docSnapshots, Firestore, updateDoc} from "@angular/fire/firestore";
import {Review} from "./review.model";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  collection = 'reviews';

  constructor(private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionSnapshots( collection(this.firestore, this.collection) );
  }

  create(item: Review) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: Review) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: Review, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
      user: item.user,
      image: item.image,
      text: item.text,
      created_at: item.created_at,
    });
  }
}
