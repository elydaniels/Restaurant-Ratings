
const restaurantRatings = document.querySelector('.restaurant-ratings')

fetch('http://localhost:5500')
  .then(serverRes => serverRes.json())
  .then(data => {
    let html = ''

    data.forEach(eachItem => {
      console.log('each item', eachItem)
      let htmlItem = `
          <div class="restaurant__ratings">
              <img src="${eachItem.photoUrl}">
              <div>
                <h3>${eachItem.name}</h3>
                <p>
                ${eachItem.address} 
                </p>
                <p> 
                ${eachItem.numRatings}
                </p>
                <p>
                  ${eachItem.ratings}
                </p>
                <p>
                ${eachItem.reting}
                </p>
                <p>
                ${eachItem.id}
                </p>
          
              </div>
    `
      html += htmlItem
    })
    restaurantRatings.innerHTML = html
  })
  .catch(err => console.error(err))