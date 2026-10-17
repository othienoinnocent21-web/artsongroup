
import { useEffect, useState } from 'react';
import { checkBackendHealth } from '../services/api';

function ApiStatus() {
  const [status, setStatus] = useState('Checking backend...');

  useEffect(() => {
    checkBackendHealth()
      .then((data) => {
        setStatus(
          data.status === 'ok'
            ? 'Backend connected'
            : 'Backend returned an unexpected response'
        );
      })
      .catch(() => {
        setStatus('Backend unavailable');
      });
  }, []);

  return (
    <p className="fixed bottom-3 right-3 z-20 m-0 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs text-slate-600 shadow-sm" role="status" aria-live="polite">
      API status: <strong className="font-semibold text-slate-900">{status}</strong>
    </p>
  );
}

export default ApiStatus;
