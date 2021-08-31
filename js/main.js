
const searchClubInfo = ()=>{
  let inputInfoButton = document.getElementById("btnInfo")
  inputInfoButton.addEventListener("click",()=>{
    let inputClub = document.getElementById("inputClub");
    let inputClubValue = inputClub.value;
    
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputClubValue}`)
    .then(res=> res.json())
    .then(data=> {
      showClubInfo(data.teams[0]);
      showModal(data.teams[0]);
    })

    inputClub.value = ''
  })
}
searchClubInfo()

let showModal = (club)=>{
  let modalSection = document.getElementById("modal-section")
  modalSection.innerHTML = `
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Club's full information</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h5>Stadium: ${club.strStadium}</h5><img src="${club.strStadiumThumb}" class="img-fluid">
              <h5 class="card-title">League: ${club.strSport}</h5>
              <h5>Club Name:  ${club.strTeam}</h5>
              <h5>Formated year: ${club.intFormedYear}</h5>
              <h5>league: ${club.strLeague}</h5>
              <h5>Stadium-location: ${club.strStadiumLocation}</h5>
              <h5>Stadium-Capacity: ${club.intStadiumCapacity}</h5>
              <h5>Joursey: </h5><img src="${club.strTeamJersey}" class="img-fluid">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
  `
}

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
          <button type="button" id="btn" class="btn btn-primary" onclick="showModal()" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Info</button>
        </div>
      </div>
  `
  // showModal(clubs)
}

