import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("LduoyUPBppUgECdOQnbo")
  .collection("cartitems")
  .doc("ZhDvtu0rDKVOCYh2dVB3");

firestore.doc("/users/LduoyUPBppUgECdOQnbo/cartItems/ZhDvtu0rDKVOCYh2dVB3");
