import { ArrowClockwise, ChatCircle, Heart } from "@phosphor-icons/react";
import './Tweet.css'
import { Link } from "react-router-dom";



interface TweetProps{
    content:string
}
export function Tweet(props: TweetProps) {
    return (
        <Link to="/status" className="tweet">
        <img src="https://github.com/osnaelle.png" alt="Foto de perfil Osnaelle" />
        <div className="tweetContent">
            <div className="tweetHeader">
                
                <strong>Osnaelle </strong>
                <span>@Naaelly</span>

            </div>
          
                <p>

                    {props.content}
               


                </p>

            
             <div className="tweetContentfooter">
                <button type="button">
                    <ChatCircle />
                    20
                </button>
                <button type="button">
                    <ArrowClockwise />
                   32
                </button>
                <button type="button">
                    <Heart/>
                  32
                </button>

            </div>
            </div>
        
     
            </Link>
           
    )
}