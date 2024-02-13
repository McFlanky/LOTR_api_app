import React, { useEffect, useState } from 'react'
import styles from './dash_board.module.css'
import Options from './Options'
import useFetchData from '../hooks/useFetchData'
import Characters from './Characters'
import Book from './Book'
import Movies from './Movies'
import Loader from './Loader'


export default function Dash_Board() {
    const [selection, setSelection] = useState(null)
    const { data, loading, error } = useFetchData(selection)

  

    function onClickHandler(clickedButton) {
        return () => {
            setSelection(clickedButton)
        }
    }

    const dataRender = {
        'character': <Characters data={data}/>,
        'book': <Book data={data}/>,
        'movie': <Movies data={data}/>,
        }

    return (
    <div className={styles.dashboard}>
        <div className={styles.layout}>
            <h1 style={{margin: '0 auto'}}>LOTR INFO</h1>
            <Options selection={selection} setSelection=
            {onClickHandler} />
            {loading && (
                <Loader />  
            )}
            {(data && !loading) && (
                dataRender[selection]
            )}
        </div>

    </div>
  )
}
