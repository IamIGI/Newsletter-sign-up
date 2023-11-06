import { writable } from 'svelte/store';

const newsletterStore = writable<string>('', (set) => {
	return () => {
		set('');
	};
});

export default newsletterStore;
