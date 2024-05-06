import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '巨鲸喷织',
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: '牛津布品类',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '公司简介',
					autogenerate: { directory: 'about' }
				}
			],
		}),
	],
});
