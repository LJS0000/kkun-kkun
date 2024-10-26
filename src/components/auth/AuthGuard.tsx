'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '../../../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (loading) {
        setLoading(false)
      }
      if (!user) {
        router.push('/login')
      }
    })

    return () => unsubscribe()
  }, [loading, router])

  if (loading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default AuthGuard
