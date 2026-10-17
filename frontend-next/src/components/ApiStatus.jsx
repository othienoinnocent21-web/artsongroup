'use client'

import { useEffect, useState } from 'react'

const API_BASE_URL = 'http://localhost:8080'

async function checkBackendHealth() {
  const response = await fetch(`${API_BASE_URL}/api/health`)
  if (!response.ok) throw new Error(`Backend request failed: ${response.status}`)
  return response.json()
}

const ApiStatus = () => {
  const [status, setStatus] = useState('Checking backend...')

  useEffect(() => {
    checkBackendHealth()
      .then((data) => {
        setStatus(
          data.status === 'ok' ? 'Backend connected' : 'Backend returned an unexpected response'
        )
      })
      .catch(() => setStatus('Backend unavailable'))
  }, [])

  return (
    <p
      className="fixed bottom-3 right-3 z-20 m-0 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs text-slate-600 shadow-sm"
      role="status"
      aria-live="polite"
    >
      API status: <strong className="font-semibold text-slate-900">{status}</strong>
    </p>
  )
}

export default ApiStatus
