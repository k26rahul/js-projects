import { reactive, computed } from 'vue';
import { dishes } from '@/assets/dishes';

const store = reactive({
  orders: {
    'Masala Dosa': 2,
    Samosa: 10,
  },
  dishes: dishes,
  totalAmount: computed(() => {
    let total = 0;
    for (let dishName in store.orders) {
      let qty = store.orders[dishName];
      let price = store.dishes[dishName].price;
      total += qty * price;
    }
    return total;
  }),
});

export default store;
