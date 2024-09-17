function renderSearchResults(data) {
  data.Search.forEach((item, index) => {
    const article = document.createElement('article');

    const img = document.createElement('img');
    img.src = item.Poster;
    img.setAttribute('alt', item.Title);
    img.classList.add('mb-6')

    article.appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerText = item.Title;
    h2.classList.add('text-4xl');
    article.appendChild(h2);


    const hr = document.createElement('hr');
    hr.className = 'my-2';
    article.appendChild(hr);

    const div = document.createElement('div');
    div.className = "flex justify-between items-center mb-4"

    const year = document.createElement('p');
    year.innerText = item.Year;
    year.classList.add('text-2xl');
    div.appendChild(year)

    const ganre = document.createElement('p');
    ganre.innerText = item.Type;
    ganre.classList.add('text-2xl');
    div.appendChild(ganre)

    article.appendChild(div);

    const link = document.createElement('a');
    link.className = 'duration-300 hover:underline hover:text-yellow-500'
    link.href = `${window.location.origin}/movie.html?id=${item.imdbID}`;
    link.innerText = 'Read more >'

    article.appendChild(link);

    document.querySelector('#searchResults').appendChild(article)
  })
}

export {
  renderSearchResults
}