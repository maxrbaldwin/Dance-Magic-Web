import React, { useEffect } from 'react'

import SEO from '@components/seo'

const registrationFormURL = 'https://forms.gle/WsqNSNqMyanbiWSL6'

const Registration = () => {
  useEffect(() => {
    window.location.href = registrationFormURL
  }, [])
  return (
    <SEO title='Dance Magic Registration' />
  )
}

export default Registration
