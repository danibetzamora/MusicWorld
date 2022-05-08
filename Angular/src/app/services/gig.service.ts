import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionSnapshots, docSnapshots, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Gig } from "./gig.model";

@Injectable({
  providedIn: 'root'
})
export class GigService {

  collection = 'gigs';

  constructor(private firestore: Firestore) {}

  getDocument(id: string) {
    return docSnapshots( doc(this.firestore, `${this.collection}/${id}`) );
  }

  getList() {
    return collectionSnapshots( collection(this.firestore, this.collection) );
  }

  create(item: Gig) {
    return addDoc( collection(this.firestore, this.collection), item );
  }

  delete(item: Gig) {
    return deleteDoc( doc(this.firestore, `${this.collection}/${item.id}`) );
  }

  update(item: Gig, id: string) {
    return updateDoc( doc(this.firestore, `${this.collection}/${id}`), {
      name: item.name,
      impressions: item.impressions,
      clicks: item.clicks,
      orders: item.orders,
      cancellations: item.cancellations,
      status: item.status,
      user_name: item.user_name,
      image: item.image,
      user_image: item.user_image,
      desc: item.desc,
      gig_category: item.gig_category,
      gig_description: item.gig_description,
      gig_genres: item.gig_genres,
      gig_purposes: item.gig_purposes,
      user_from: item.user_from,
      user_registration: item.user_registration,
      user_desc: item.user_desc,
      gig_faq: item.gig_faq,
      gig_reviews_1: item.gig_reviews_1,
      gig_reviews_2: item.gig_reviews_2,
      gig_reviews_3: item.gig_reviews_3,
      gig_reviews_4: item.gig_reviews_4,
      gig_reviews_5: item.gig_reviews_5,
      gig_reviews_all: item.gig_reviews_all,
    });
  }
}
