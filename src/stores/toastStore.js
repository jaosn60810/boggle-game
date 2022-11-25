import { writable } from 'svelte/store';

const toastStore = writable(null);

export default toastStore;
