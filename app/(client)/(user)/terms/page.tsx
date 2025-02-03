import Container from '@/components/Container'
import React from 'react'

const TermsPage = () => {
  return (
    <Container className='max-w-3xl sm:px-6 lg:px-8 py-12'>
      <h1 className='text-3xl font-bold mb-6'>Terms and Conditions</h1>
      <div className='space-y-4'>
        <section>
          <h2 className='text-xl font-semibold mb-2'>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Vulos&apos; services, you agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>2. User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>3. Prohibited Activities</h2>
          <p>
            Users must not engage in any unlawful activities, including but not limited to fraud, harassment, or distribution of malicious software.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>4. Termination of Services</h2>
          <p>
            Vulos reserves the right to terminate or suspend access to its services at any time, without prior notice, for any violation of these terms.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-2'>5. Limitation of Liability</h2>
          <p>
            Vulos shall not be held liable for any indirect, incidental, or consequential damages arising from the use of its services.
          </p>
        </section>
      </div>
    </Container>
  )
}

export default TermsPage
