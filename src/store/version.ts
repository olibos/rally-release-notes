import { writable } from 'svelte/store';

export const major = writable(+(localStorage.getItem("rn-major") ?? 1));
export const minor = writable(+(localStorage.getItem("rn-minor") ?? 0));
export const patch = writable(+(localStorage.getItem("rn-patch") ?? 0));

major.subscribe(major => localStorage.setItem("rn-major", major.toString()));
minor.subscribe(minor => localStorage.setItem("rn-minor", minor.toString()));
patch.subscribe(patch => localStorage.setItem("rn-patch", patch.toString()));