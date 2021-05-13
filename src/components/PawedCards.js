import React,{useState} from 'react'
import '../components/Cards.css'
import CardView from 'react-tinder-card';

function Cards() {

    const number = [1,2,43,54,4,6,5,0]
    const [dogs, setDogs] = useState([  
    {
        name:"Missy",
        url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"
    },
    {
        name:"Boxy",
        url:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
    },
    {
        name:"Sophie",
        url:"https://thehappypuppysite.com/wp-content/uploads/2019/09/Fluffy-Dogs-HP-long.jpg"
    
    }]);

    const swiped = (direction , dogName)=>{
        console.log("remove"+dogName)
    }

    const outOfFrame = (dogName)=>{
        console.log(dogName+"left the screen")
    }

    return (
        <div  classname='pawed_cards'>
            <div className="cardContainers">
                {
                    
                    dogs.map((character)=>{
                        return(
                        <CardView
                        className="swipe"
                        key={character.key}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=> swiped(dir, character.name )}
                        onCardLeftScreen = {()=>outOfFrame(character.name)}
                        >
                            <div style={{backgroundImage: `url(${character.url})`}}
                            className="card">
                                <h3>{character.name}</h3>
                            </div>

                        </CardView>
                        )

                    })
                    
                }


            </div>
            
        </div>
    )
}

export default Cards
