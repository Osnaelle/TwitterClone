import { Sparkle } from "@phosphor-icons/react";

import './Header.css'


interface HeaderProps{
    title: string
}
export function Header(props :HeaderProps) {
    return (
   
            <div className="timelineHeader">
               {props.title}
              
                <Sparkle />
            </div>

    )
}