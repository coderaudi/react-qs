/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
// import RctPageLoader from '../RctPageLoader/RctPageLoader';

// dashboard
const AsyncWelcomePageComponent = Loadable({
	loader: () => import("../../routes/home/welcomepage"),
	loading: () => "Loading..." // use andy loader <RctPageLoader />,
});



export {
	AsyncWelcomePageComponent
};
