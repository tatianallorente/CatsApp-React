

export const getBreedImages = async(breed_id) => {

    const api_key = '3a6c399a-f92b-4e8c-b5a5-142c8effa2f1';

    let url = `https://api.thecatapi.com/v1/images/search?api_key=${api_key}&breed_id=${breed_id}&size=thumb&limit=6`;
  
    const resp = await fetch(url);
    const data = await resp.json();

    const images = data.map( (value, index) => data[index].url);

    return images;
}
