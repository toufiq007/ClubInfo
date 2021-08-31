
const searchClubInfo = ()=>{
  let inputInfoButton = document.getElementById("btnInfo")
  inputInfoButton.addEventListener("click",()=>{
    let inputClub = document.getElementById("inputClub");
    let inputClubValue = inputClub.value;
    
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputClubValue}`)
    .then(res=> res.json())
    .then(data=> showClubInfo(data.teams[0]))

    inputClub.value = ''
  })
}

searchClubInfo()

let showClubInfo = (clubs)=>{
  let clubInfo = document.getElementById("sportsCentre");
  clubInfo.innerHTML = `
      

      <div class=" col-md-4 bg-info" style="cursor:pointer">
        <img class="card-img-top img-fluid w-75" src="${clubs.strTeamBadge}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">League: ${clubs.strSport}</h5>
          <h5>Club Name:  ${clubs.strTeam}</h5>
          <h5>Team short: ${clubs.strTeamShort}</h5>
          <h5>league: ${clubs.strLeague}</h5>
          <h5>Stadium: ${clubs.strStadium}</h5>
          <button type="button" id="btn" class="btn btn-primary" onclick="showModal('paris')" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Info</button>
        </div>
      </div>
  `
  // showModal(clubs)
}

let showModal = (club)=>{
  console.log(club)
  let btn = document.getElementById("btn");
  // btn.addEventListener("click",()=>{
  //   console.log(club)
  // })
}
