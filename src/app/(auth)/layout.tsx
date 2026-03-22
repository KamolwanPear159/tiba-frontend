import PublicHeader from '@/components/layout/PublicHeader'
import PublicFooter from '@/components/layout/PublicFooter'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main
        className="flex items-center justify-center p-[80px]"
        style={{ background: 'linear-gradient(1.37deg, #1f4488 2.37%, #6f8aba 97.82%)', minHeight: 'calc(100vh - 112px)' }}
      >
        {children}
      </main>
      <PublicFooter />
    </>
  )
}
