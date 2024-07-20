const myKey = "BQ4j8NNJBk8ckkGMTy39QQWgqr6Uv"
const theInput = document.getElementById('md5')
const theLabel = document.getElementById('the-label')
const theButton = document.getElementById('the-button')

theButton.addEventListener('click', async function(){
    let myLink = await annasApi.generateLink(theInput.value, myKey)
    console.log(await myLink.info)
    theLabel.textContent = await myLink.link
})