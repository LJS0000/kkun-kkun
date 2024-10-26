import AuthGuard from '@/components/auth/AuthGuard'

const HomePage = () => {
  return (
    <AuthGuard>
      <h1>Home Page</h1>
    </AuthGuard>
  )
}

export default HomePage
