import gwalaAxios from './axios';

const groupsAPI = {
	getGroupDetails: (groupId) =>
		gwalaAxios.get(`/user/group/getWebGroup/${groupId}`),
	addReport: (payload) => gwalaAxios.post('/user/group/AddReport', payload),
	generatePaymentReference: (payload) =>
		gwalaAxios.post(
			'/user/transaction/generatePublicPaymentReference',
			payload
		),
};

export default groupsAPI;
