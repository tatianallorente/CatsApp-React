
export const getBreeds = async(currentPage, limit = '') => {

    const api_key = '3a6c399a-f92b-4e8c-b5a5-142c8effa2f1';

    let url_breeds = `https://api.thecatapi.com/v1/breeds?api_key=${api_key}`;

    if (limit !== '') {
        url_breeds = `https://api.thecatapi.com/v1/breeds?api_key=${api_key}&limit=${limit}&page=${currentPage}&order=Asc`;
    }

    const resp = await fetch(url_breeds);
    const data = await resp.json();

    //console.log(resp.headers)

    for (let pair of resp.headers.entries()) {
    //console.log(pair[0])
        switch (pair[0]) {
            case 'pagination-count':
                data['paginationCount'] = pair[1];
            break;
            case 'pagination-limit':
                data['paginationLimit'] = pair[1];
            break;
            case 'pagination-page':
                data['paginationPage'] = pair[1];
            break;
            default:
                break;
        }
    }

    //console.log(data)
    //console.log(url_breeds)

    return data;
}

