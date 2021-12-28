import AuthView from '../views/auth/AuthView';

import YieldFarming from '../views/YieldFarming';

import BuySlate from '../views/BuySlate';


import slateStake from'../views/slatestake';

let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	// {
	// 	path: '/dashboard',
	// 	name: 'Dashboard',
	// 	component: Dashboard,
	// 	layout: 'main',
	// },
	// {
	// 	path: '/vault',
	// 	name: 'Vault',
	// 	component: Vault,
	// 	layout: 'main',
	// },
	// {
	// 	path: '/swap',
	// 	name: 'Swap',
	// 	component: Swap,
	// 	layout: 'main',
	// },
	// {
	// 	path: '/governance',
	// 	name: 'Governance',
	// 	component: Governance,
	// 	layout: 'main',
	// },
	// {
	// 	path: '/carbon-yield',
	// 	name: 'Carbon Yield',
	// 	component: SmartYield,
	// 	layout: 'main',
	// },
	{
		path: '/yield-farming',
		name: 'Yield Farming',
		component: YieldFarming,
		layout: 'main',
	},

	{
		path: '/Buy-slate',
		name: 'Buy slate',
		component: BuySlate,
		layout: 'main',
	},
	// {
	// 	path: '/burn-vault',
	// 	name: 'Burn Vault',
	// 	component: BurnVault,
	// 	layout: 'main',
	// },
	{
		path: '/slate-stake',
		name: 'slate stake',
		component: slateStake,
		layout: 'main',
	},
	// {
	// 	path: '/black-stake',
	// 	name: 'black stake',
	// 	component: blackStake,
	// 	layout: 'main',
	// },
	// {
	// 	path: '/lp-stake',
	// 	name: 'lp stake',
	// 	component: lpStake,
	// 	layout: 'main',
	// },
];
export default routes;
