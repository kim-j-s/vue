import VTab from '../components/element/VTab.vue';

export default {
	title: 'Component/Tab',
	component: VTab,
	tags: ['autodocs'],
};

export const Tabs = {
	args: {
		//👇 The args you need here will depend on your component
		tabs: [
			{
				text: '탭 1',
				isActive: true,
			},
			{
				text: '탭 2',
			},
			{
				text: '탭 3',
			},
		],
	},
};
