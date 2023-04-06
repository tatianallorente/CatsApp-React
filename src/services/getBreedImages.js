import { API_KEY } from "../helpers/constants"


export const getBreedImages = async (breed_id) => {

	const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_id=${breed_id}&size=thumb&limit=6`;

	try {
		const response = await fetch(url);

		if (response.ok) {
			const data = await response.json();
			const images = data.map((value, index) => data[index].url);

			return images;
		} else {
			return [];
		}
	} catch (error) {
		console.error(error);
		return [];
	}
}