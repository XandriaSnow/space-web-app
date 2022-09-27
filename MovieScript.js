const apiKey = '7d7d2f018c5ad4b7c69596d6bf215e0e'
const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
// const trendingUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

const movies = document.getElementsByClassName['movies']

const search = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}`


//::::::::::::::::::::::::::::::::::::::::::::::::::::


async function fetData(url){
    const dataFetct = await fetch(url)
    const data = await dataFetct.json()
   
    data.results.map((movie)=>{
       let div = document.createElement('div')
       div.classList.add('card')
   
       div.innerHTML = `
               <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='${movie.name}'/>
               <div class='hover'>
                   <h3>${movie.original_name?movie.original_name: movie.original_title }</h3>
                   <p>${movie.overview }</p>
               </div>
       `
       div.addEventListener('click',()=>{
           location.href='./movieDetails.html'
           let data = JSON.stringify(movie)
           localStorage.setItem('movie', data)
       })
   
       movies.append(div)
    })
   
   }    








// async function fetchData(url){
//     const dataFetch = await fetch(url)
//     const data = await dataFetch.json()

//     console.log(fetchData)
//     data.results.map((movie)=>{
        
//         let div = document.createElement('div')
//         div.classList.add('popMovies')
        
//         movies.innerHtml = `
//         <img src = 'https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='${movie.name}'/>

//         `
        
//         div.addEventListener('click', ()=>{

//         })