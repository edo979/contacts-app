import { useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError() as Error

  return (
    <div className="vstack h-100 align-items-center justify-content-center">
      <p className="display-6 alert alert-danger" role={'alert'}>
        An error is occurred!
      </p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  )
}
