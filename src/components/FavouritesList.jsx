import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


function FavouritesList() {
    const favourites = useSelector((state) => state.main.favourites)
    return (
        <>
            <h1 className='text-center'>Preferiti</h1>
            <ul>
                {
                    favourites.map((m, i) => {
                        return (
                            <li key={i}><Link to={`/jobs/${m}`}>{m}</Link></li>
                        )

                    })
                }
            </ul>
        </>
    )
}

export default FavouritesList