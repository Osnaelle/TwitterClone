
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Tweet } from '../components/Tweet'

import './Status.css'
import { PaperPlaneRight } from '@phosphor-icons/react'
/**
 * Fluxo de renderização:
 * 
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
 */

/**
 * Algoritmo de reconciliação:
 * 
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answer, setAnswers] = useState([
        'opa'
    ])

    function createNewAnswer(event: FormEvent) {


        event.preventDefault()
        setAnswers([newAnswer, ...answer])
        setNewAnswer('')



    }
    function handlehotkeySubmit(event: KeyboardEvent) {
        if (event.key == 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answer])
            setNewAnswer('')


        }
    }
    return (
        <main className="status">

            <Header title="Tweet" />

            <Tweet content="teste" />
            <div className="separator" />
            <form onSubmit={createNewAnswer} className="answerTweetForm">
                <label htmlFor="tweet">
                    <img src="https://github.com/osnaelle.png" alt="Foto de perfil Osnaelle" />
                    <textarea placeholder="tweet your answer" id="tweet"
                        value={newAnswer}
                        onKeyDown={handlehotkeySubmit}
                        onChange={(event) => {
                            setNewAnswer(event.target.value)
                        }}
                    />
                </label>

                <button type="submit">
                    <PaperPlaneRight />
                    <span>Answer</span>
                </button>
            </form>
            {answer.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}


        </main >

    )
}