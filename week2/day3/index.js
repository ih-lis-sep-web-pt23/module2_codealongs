//fetch - javascript method that comes with Node
// fetches...
// API

/* fetch('https://api.spacexdata.com/v4/launches')
.then((response) => response.json())
.then((data) => {
  console.log(data)
  data.forEach((launch) => {
    const patchImage = launch.links.patch.small;
    const imgElement = document.createElement('img')

    imgElement.setAttribute('src', patchImage)
    imgElement.setAttribute('width', 200)
    document.body.appendChild(imgElement)

  })
}).catch((err) => console.log(err)) */
//we need .json  because response contains tons of metadata that we don't need

const getMissions = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches')
    const data = await response.json()

    data.forEach((launch) => {
      const patchImage = launch.links.patch.small;
      const imgElement = document.createElement('img')
  
      imgElement.setAttribute('src', patchImage)
      imgElement.setAttribute('width', 200)
      document.body.appendChild(imgElement)
  
    })
  } catch (error) {
    console.log(error)
  }
}

getMissions();