import { FILTERWITHPRIORITY, FILTERWITHSTATUS } from './actionIdentifiers';

export const filterWithStatus = (status) => {
	return {
		type: FILTERWITHSTATUS,
		payload: status,
	};
};

export const filterWithPriority = (color, actionType) => {
	return {
		type: FILTERWITHPRIORITY,
		payload: {
			color,
			actionType,
		},
	};
};
