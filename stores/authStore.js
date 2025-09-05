import { writable } from 'svelte/store';

// Basic auth store structure that students will enhance
const authStore = writable({
  isLoggedIn: false,
  user: null,
  firebaseControlled: false
});

export default authStore;