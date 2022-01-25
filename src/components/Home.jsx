
import { useContext, Fragment } from 'react'
import journalContext from '../jornalContext'
import { Link } from 'react-router-dom'
import EntryList from './EntryList'

export default function Home() {
    // this one is fancy and same as following
    // const { state: {entries, categories} } = useContext(journalContext)
    const { state } = useContext(journalContext)
    const { categories } = state

    return categories ? (
        <div>
            <h1>Home</h1>
            {categories.map((cat) => (
                <Fragment key={cat.id}>
                    <h3>{cat.name}</h3>
                    <EntryList  cat_id={cat.id} />
                </Fragment>
            ))}
            <Link to="/category" >
                <button>Create New Entry</button>
            </Link>
        </div>
    ) : (<p>Loading .... </p>)
}
