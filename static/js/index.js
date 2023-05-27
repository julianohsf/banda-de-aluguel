function populateSongsTable() {
  const tableBody = document.getElementById("songs-table");
  
  for (let song of songs) {
    const row = document.createElement("tr");
    row.classList.add("song")
    
    const songNameCell = row.insertCell()
    songNameCell.insertAdjacentText('afterbegin', song.name)

    const songArtistCell = row.insertCell()
    songArtistCell.insertAdjacentText('afterbegin', song.artist)

    const songFirstLineCell = row.insertCell()
    songFirstLineCell.insertAdjacentText('afterbegin', song.firstLine)

    const songIdCell = row.insertCell()
    songIdCell.insertAdjacentText('afterbegin', song.id)

    tableBody.insertAdjacentElement('beforeend', row)
  }
}