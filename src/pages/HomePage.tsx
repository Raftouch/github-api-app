import { useSearchUsersQuery } from '../store/github/github.api'

export default function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('paulbaker')

  return (
    <div className="pt-28 flex justify-center mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong</p>
      )}
    </div>
  )
}
