import { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'
import { useDebounce } from '../hooks/debounce'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  })

  useEffect(() => {
    console.log(debounced)
  }, [debounced])

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
        <div className="absolute top-[40px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          corrupti quidem laborum culpa, nihil distinctio optio a quae? Numquam
          quos eaque dicta ipsam velit quae explicabo maiores odit! Reiciendis,
          consequuntur.
        </div>
      </div>
    </div>
  )
}
