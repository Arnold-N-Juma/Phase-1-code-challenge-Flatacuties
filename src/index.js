// Your code here
document.addEventListener('DOMContentLoaded',()=>{
    //initialises application when DOM is loaded
    fetchanimals();
    const form =document.getElementById('votes-form')
    form.addEventListener("submit",(event)=>{
      votecount(event)
    })
  })
  
  let animals
  function fetchanimals(){   //function to fetch and display characters in the character bar
    fetch("http://localhost:3000/characters")
    .then((resp)=>resp.json())
    .then((resp)=>{
      animals=resp
      characterBar=document.getElementById("character-bar")
       animals.forEach(animal => {
        const animaldiv=document.createElement("div")
        animaldiv.setAttribute("id", animal.id)
        animaldiv.addEventListener("click", (event)=>{
          fetchdetails(event.target.id)
        })
        animaldiv.append(animal.name)
        characterBar.append(animaldiv)
       
      });
    })
  }
  
  //function to fetch and display character details
  function fetchdetails(id){
    fetch(`http://localhost:3000/characters/${id}`)
    .then((resp)=>resp.json())
    .then((resp)=>{
      animals=resp
     const imagetag=document.getElementById("image")
     imagetag.setAttribute("src", resp.image)
     const votetag=document.getElementById('vote-count')
     votetag.textContent=resp.votes
      });
    }
   
    //function to perfom vote count
    function votecount(event){
      event.preventDefault()
      const votetag=document.getElementById("vote-count")
      const form=document.getElementById("votes-form")
      votetag.textContent=form.elements[0].value
    
      form.reset()
    }