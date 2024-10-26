'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '../../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (error) {
      console.error('로그인 오류:', error)
    }
  }

  return (
    <div>
      <h2>로그인 페이지</h2>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='이메일'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>로그인</button>
      </form>
    </div>
  )
}

export default LoginPage
