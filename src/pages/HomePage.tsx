import { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'
import { useDebounce } from '../hooks/debounce'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  })

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length > 0)
  }, [debounced, data])

  return (
    <div className="pt-28 flex justify-center mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong</p>
      )}

      <div className="relative w-[600px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[40px] mb-2"
          placeholder="Search for Github username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {dropdown && (
          <ul className="absolute list-none top-[40px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-slate-900 hover:text-slate-100 transition-colors cursor-pointer"
                key={user.id}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
