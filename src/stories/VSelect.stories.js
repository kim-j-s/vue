import VSelect from '../components/element/VSelect.vue';

export default {
	title: 'Component/Select',
	component: VSelect,
	tags: ['autodocs'],
};

export const Opts = {
	args: {
		//👇 The args you need here will depend on your component
		options: [
			{
				value: 'o1',
				text: '옵션 1',
			},
			{
				value: 'o2',
				text: '옵션 2',
			},
		],
	},
};
