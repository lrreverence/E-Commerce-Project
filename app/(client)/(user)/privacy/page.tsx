import Container from '@/components/Container'
import React from 'react'

const PrivacyPage = () => {
  return (
    <Container className='max-w-3xl sm:px-6 lg:px-8 py-12'>
      <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>
      <div className='space-y-4'>
        <section>
          <h2 className='text-xl font-semibold mb-2'>1. Overview</h2>
          <p>
            This Privacy Policy explains how Vulos collects, uses, and protects your personal information when you use our services.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and usage data to improve our services.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>3. How We Use Your Information</h2>
          <p>
            Your information is used to provide, maintain, and improve our services, as well as to communicate with you regarding updates or support.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>4. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information, subject to applicable legal requirements.
          </p>
        </section>
      </div>
    </Container>
  )
}

export default PrivacyPage