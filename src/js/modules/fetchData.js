async function fetchData(searchParams) {
  const API_KEY = '21eac196';

  let request = `http://www.omdbapi.com/?apikey=${API_KEY}`

  for(let key in searchParams) {
    request += `&${key}=${searchParams[key]}`
  }

  const res = await fetch(request)
  return await res.json()
}


export {
  fetchData
}