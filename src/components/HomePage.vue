<template>
  <div>
    <div
      v-if="requestFailed"
      class="alert alert-danger mb-4"
      role="alert"
    >
      Error: {{ requestFailed }}
    </div>
    <div class="container">
      <div class="col">
        <h2>User list</h2>
        <user-item 
          v-for="user in users"
          v-bind:key="user.id"
          :user="user"
          :showOrder="showOrder"
        />
      </div>
      <div class="col">
        <h2>Order list for {{ currentUser }}</h2>
        <order-item 
          v-for="order in orderlist"
          v-bind:key="order.id"
          :order="order"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import UserItem from "./UserItem"
import OrderItem from "./OrderItem"

export default {
  name: "HomePage",
  components: {
    UserItem,
    OrderItem
  },
  data() {
    return {
      selectedUser: 1
    }
  },
  created() {
    this.loadUsers()
    this.loadOrders()
  },
  computed: {
    ...mapState(["users", "orders", "requestFailed"]),
    orderlist() {
      return this.orders.filter(order => order.userId === this.selectedUser)
    },
    currentUser() {
      if (this.users.length > 0) {
        return this.users[this.selectedUser - 1].name 
      } else {
        return ""
      }
    }
  },
  methods: {
    ...mapActions(["loadUsers", "loadOrders"]),
    showOrder(userId) {
      this.selectedUser = userId
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;    
  height: 100vh;
}

.container .col {
  flex: 1;
  height: 100%;
}

</style>
