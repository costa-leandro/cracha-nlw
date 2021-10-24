const LinksSocialMedia = {
  github: 'costa-leandro',
  facebook: 'leandrocos7a',
  instagram: 'leandrocos7a',
  twitter: 'leandrocos7a'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` //template string ``
  }
}

changeSocialMediaLinks()
/*
let changeColorEnter = document.getElementById('github')
changeColorEnter.addEventListener('mouseenter', function () {
  changeColorEnter.style.color = 'orange'
})

let changeColorLeft = document.getElementById('github')
changeColorLeft.addEventListener('mouseout', function () {
  changeColorLeft.style.color = ''
})
*/
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      github.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
