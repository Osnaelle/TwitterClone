
import { FormEvent, useState,KeyboardEvent } from 'react';
import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import './Timeline.css'



export function Timeline() {

    const[newTweet, setNewTweet] = useState('')
    const [tweets, setTweets]= useState([
         'opa'
    ])

    function createNewTweet(event: FormEvent){


     event.preventDefault()
      setTweets([newTweet,...tweets])
      setNewTweet('')
        


    }

    function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
          setTweets([newTweet, ...tweets])
          setNewTweet('')
        }
      }
    return (
      <main className="timeline">
           
       <Header title='Home'/>
            <form onSubmit={createNewTweet}className="newTweetForm">
                <label htmlFor="tweet">
                    <img src="https://github.com/osnaelle.png" alt="Foto de perfil Osnaelle" />
                    <textarea placeholder="What's happening?" id="tweet"
                    value={newTweet}
                    onKeyDown={handleHotkeySubmit}
                     onChange={(event)=>{
                      setNewTweet(event.target.value)
                    }}></textarea>
                </label>

                <button  type="submit">Tweet</button>
            </form>
            <div className="separator" />
           {tweets.map(tweet =>{
            return<Tweet key={tweet} content ={tweet}/>
           })}

        </main >
     
    )
}
