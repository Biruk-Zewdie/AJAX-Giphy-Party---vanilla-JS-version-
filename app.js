
  // get a random gif among the list
  //create an image element on the DOM and get the src of the image 
  function displayGifs (res){

    const numOfRes = res.data.length;
    if (numOfRes){
        const randomID = Math.floor(Math.random()*numOfRes)
        const body = document.querySelector('body')
        const gifsList = document.createElement('img')
        gifsList.classList.add('img', 'container', 'w-25', 'h-50')
        gifsList.src = res.data[randomID].images.original.url;
        body.appendChild(gifsList);
    }
}

// get the search input value save as 'searchValue' and insert as a string query with api key.
//call displayGif function
async function search() {
    const searchInput = document.querySelector('#searchInput')
    const searchValue = searchInput.value;
    const res = await axios.get('http://api.giphy.com/v1/gifs/search?', { params: { q:searchValue, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' } })
    displayGifs(res.data);
}

// get the search form and add event listener on it to submit the input as an input value and this input value became a part of a string query.
// to do that search function is called.
const form = document.querySelector('#searchForm')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    search();
})

//add a click event listener on remove button to remove the Gifs from the DOM
const removeBtn = document.querySelector('#removeBtn')
removeBtn.addEventListener('click', function(e){
    e.preventDefault();
    const GIFs = document.querySelector('.img')
    GIFs.remove();
})