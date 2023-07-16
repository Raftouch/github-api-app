import { Link } from 'react-router-dom'
import { IRepo } from '../models/models'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { useState } from 'react'

interface RepoProps {
  repo: IRepo
}

export default function RepoCard({ repo }: RepoProps) {
  const { addFavourite, removeFavourite } = useActions()
  const { favourites } = useAppSelector((state) => state.github)

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

  const addToFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFav(true)
  }

  const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }

  return (
    <div className="border py-3 px-5 rounded mb-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <Link to={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {!isFav && (
          <button
            className="py-2 px-4 bg-green-600 rounded text-white mt-3"
            onClick={addToFavourites}
          >
            Add to Favourites
          </button>
        )}

        {isFav && (
          <button
            className="py-2 px-4 bg-red-600 rounded text-white mt-3"
            onClick={removeFromFavourites}
          >
            Remove from Favourites
          </button>
        )}
      </Link>
    </div>
  )
}
