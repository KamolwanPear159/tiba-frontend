'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// ─── Check icon ───────────────────────────────────────────────────────────────

function CheckIcon({ color = '#126f38' }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="11" fill={color} />
      <path d="M7 12l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Arrow right icon ─────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 6L15 12.0001L9 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Feature lists ────────────────────────────────────────────────────────────

const GENERAL_FEATURES = [
  'เข้าถึงข้อมูลทั่วไปของเว็บไซต์',
  'อัพเดตข่าวสารต่างๆ ก่อนใคร',
  'รับสิทธิสมัครคอร์สอบรมของทางสมาคม',
]

const ASSOC_FEATURES = [
  'เข้าถึงข้อมูลทั่วไปของเว็บไซต์',
  'อัพเดตข่าวสารต่างๆ ก่อนใคร',
  'รับสิทธิสมัครคอร์สอบรมของทางสมาคม',
  'ได้รับการขึ้นโลโก้ของสมาคมในหน้าสมาชิก',
  'สามารถดาวน์โหลดประกาศต่างๆ ของสมาคมได้',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RegisterPage() {
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
        backgroundImage: 'url(/assets/membership-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark + green overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(18,111,56,0.7)', zIndex: 0 }} />

    <div
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 64,
        width: '100%',
        maxWidth: 1024,
      }}
    >
      {/* Title row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h1
          style={{
            fontFamily: 'var(--font-thai)',
            fontWeight: 700,
            fontSize: 32,
            lineHeight: '100%',
            color: '#fff',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          เลือกประเภทของสมาชิกที่ต้องการสมัคร
        </h1>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          gap: 48,
          alignItems: 'stretch',
          justifyContent: 'center',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {/* Card 1 — สมาชิกทั่วไป */}
        <div
          style={{
            borderRadius: 16,
            boxShadow: '0px 0px 24px rgba(0,0,0,0.10)',
            width: 464,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(200.34deg, #126f38 0%, #51ba7c 100%)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-thai)',
                fontWeight: 500,
                fontSize: 32,
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
                lineHeight: '100%',
              }}
            >
              สมาชิกทั่วไป
            </p>
            <p
              style={{
                fontFamily: 'var(--font-thai)',
                fontWeight: 700,
                fontSize: 48,
                color: '#fff',
                margin: 0,
                lineHeight: '100%',
              }}
            >
              สมัครฟรี
            </p>
          </div>

          {/* Body */}
          <div
            style={{
              background: '#fff',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              gap: 24,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p
                style={{
                  fontFamily: 'var(--font-thai)',
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: '30px',
                  color: '#0a0a0a',
                  margin: 0,
                }}
              >
                เหมาะสำหรับ บุคคลทั่วไปที่ต้องการอัพเดตข่าวสารของสมาคมก่อนใคร
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {GENERAL_FEATURES.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <CheckIcon color="#126f38" />
                    <span
                      style={{
                        fontFamily: 'var(--font-thai)',
                        fontWeight: 600,
                        fontSize: 16,
                        color: 'rgba(0,0,0,0.5)',
                        lineHeight: '20px',
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => router.push('/register/normal')}
              style={{
                height: 48,
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                background: 'linear-gradient(186.58deg, #126f38 0%, #51ba7c 100%)',
                fontFamily: 'var(--font-thai)',
                fontWeight: 600,
                fontSize: 16,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              ลงทะเบียน
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Card 2 — สมาชิกสมาคม */}
        <div
          style={{
            borderRadius: 16,
            boxShadow: '0px 0px 24px rgba(0,0,0,0.10)',
            width: 464,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(200.34deg, #1f4488 0%, #6f8aba 100%)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-thai)',
                fontWeight: 500,
                fontSize: 32,
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
                lineHeight: '100%',
              }}
            >
              สมาชิกสมาคม
            </p>
            <p
              style={{
                fontFamily: 'var(--font-eng, var(--font-thai))',
                fontWeight: 700,
                fontSize: 48,
                color: '#fff',
                margin: 0,
                lineHeight: '100%',
              }}
            >
              20,000.-
            </p>
          </div>

          {/* Body */}
          <div
            style={{
              background: '#fff',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
              flex: 1,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p
                style={{
                  fontFamily: 'var(--font-thai)',
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: '30px',
                  color: '#0a0a0a',
                  margin: 0,
                }}
              >
                เหมาะสำหรับ การก้าวสู่การเป็นนายหน้าประกันมืออาชีพ
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {ASSOC_FEATURES.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <CheckIcon color="#1f4488" />
                    <span
                      style={{
                        fontFamily: 'var(--font-thai)',
                        fontWeight: 600,
                        fontSize: 16,
                        color: 'rgba(0,0,0,0.5)',
                        lineHeight: '20px',
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => router.push('/register/association')}
              style={{
                height: 48,
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                background: 'linear-gradient(186.58deg, #1f4488 0%, #6f8aba 100%)',
                fontFamily: 'var(--font-thai)',
                fontWeight: 600,
                fontSize: 16,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginTop: 'auto',
              }}
            >
              ลงทะเบียน
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Back to login */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-thai)',
            fontSize: 16,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          มีบัญชีอยู่แล้ว?
        </span>
        <Link
          href="/login"
          style={{
            fontFamily: 'var(--font-thai)',
            fontSize: 16,
            color: '#fff',
            fontWeight: 600,
            textDecoration: 'underline',
          }}
        >
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
    </div>
  )
}
