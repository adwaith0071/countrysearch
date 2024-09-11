const getCountry= async()=>{
    const res= await fetch('https://restcountries.com/v3.1/name/aruba?fullText=true')
    const jsres=await res.json()
    result=""

    jsres.forEach(items=>{
        result+=`
        <div class="card" style="width: 18rem;">
  <img src= ${items.flags.png} height='200px' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${items.name.common}</h5>
    <p class="card-text">${items.capital}</p>
        <p class="card-text"> ${items.population}</p>

    
  </div>
</div>

        
        
        
        `
    })
    root.innerHTML=result
}
getCountry()