import { URL_BREEDS } from "../helpers/constants"


export const getBreeds = async (currentPage, limit = '') => {

	let url_breeds = URL_BREEDS;

	if (limit !== '') {
		url_breeds = `${url_breeds}&limit=${limit}&page=${currentPage}&order=Asc`;
	}

	try {
		const resp = await fetch(url_breeds);

		if (resp.ok) {
			const breeds = await resp.json();

			for (let pair of resp.headers.entries()) {
				switch (pair[0]) {
					case 'pagination-count':
						breeds['paginationCount'] = pair[1];
					break;
					case 'pagination-limit':
						breeds['paginationLimit'] = pair[1];
					break;
					case 'pagination-page':
						breeds['paginationPage'] = pair[1];
					break;
					default:
						break;
				}
			}

			return breeds;
		} else {
			return [];
		}
	} catch (error) {
		console.error(error);
		return [];
	}
}