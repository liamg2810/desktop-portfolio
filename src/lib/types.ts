import type { Component } from 'svelte';

export type App = {
	app: Component;
	id: string;
	minimized: boolean;
	position: { x: number; y: number };
};
