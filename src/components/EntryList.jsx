import React, {useContext} from 'react'
import journalContext from '../jornalContext'

export default function EntryList( {cat_id} ) {
    const { state: { entries} } = useContext(journalContext)

    return (
        <div>
            <ul>
                {entries
                    .filter(entry => entry.category_id == cat_id)
                    .map( (entry) => <li key={entry.id}> {entry.content} </li>)}
            </ul>
        </div>
    )
}
