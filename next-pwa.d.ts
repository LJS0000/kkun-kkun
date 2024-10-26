declare module 'next-pwa' {
  import { NextConfig } from 'next'

  type PWAConfig = {
    dest: string
    disable?: boolean
  }

  function withPWA(config: PWAConfig): (nextConfig: NextConfig) => NextConfig

  export default withPWA
}
