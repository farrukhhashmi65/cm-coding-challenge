import { useState, useEffect } from 'react'

// Custom hook to use the fetch - wanted to use that one but now using the older approach

const useFetch = (url: any, options: any): any => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const doFetch = async (): Promise<any> => {
      setLoading(true)
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
      } catch (e: any) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    void doFetch()
  }, [])
  return { response, error, loading }
}

export default useFetch
