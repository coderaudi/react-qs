/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from '../RctPageLoader/RctPageLoader';

// dashboard
const AsyncDashboardComponent = Loadable({
	loader: () => import("../../routes/dashboard"),
	loading: () => <RctPageLoader />,
});

const AsyncHomeComponent = Loadable({
	loader: () => import("../../routes/home/index"),
	loading: () => <RctPageLoader />,
});

const AsyncPostComponent = Loadable({
	loader: () => import("../../routes/post/index"),
	loading: () => <RctPageLoader />,
});

const AsyncAllPostComponent = Loadable({
	loader: () => import("../../routes/home/showposts"),
	loading: () => <RctPageLoader />,
});

export {
	AsyncDashboardComponent,
	AsyncHomeComponent,
	AsyncPostComponent,
	AsyncAllPostComponent
};
