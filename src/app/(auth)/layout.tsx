import PublicHeader from '@/components/layout/PublicHeader'
import PublicFooter from '@/components/layout/PublicFooter'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main style={{ minHeight: 'calc(100vh - 112px)' }}>
        {children}
      </main>
      <PublicFooter />
    </>
  )
}
