import { useAppSelector } from '../hooks/redux'

export default function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github)

  if (favourites.length === 0)
    return <p className="text-center">No favourites yet</p>

  return (
    <div className="pt-28 flex justify-center mx-auto min-h-screen px-5">
      <ul className="list-none flex flex-col gap-3">
        {favourites.map((fav) => (
          <li key={fav}>
            <a href={fav} target="_blank">
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
