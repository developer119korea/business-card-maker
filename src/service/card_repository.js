import firebaseApp from './firebase';
import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';
const database = getDatabase(firebaseApp);

class CardRepository {
  syncCards(userId, onUpdate) {
    const cardsRef = ref(database, `${userId}/cards`);
    onValue(cardsRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(cardsRef);
  }
  saveCard(userId, card) {
    set(ref(database, `${userId}/cards/${card.id}`), card);
  }
  removeCard(userId, card) {
    remove(ref(database, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository