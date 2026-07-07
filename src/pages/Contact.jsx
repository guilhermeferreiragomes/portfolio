import React, { useState } from 'react'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'gffgomes04@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  const overlayColor = copied ? '#22c55e' : '#b7a0e5'

  return (
    <div>
      <h2 className='text-white text-5xl font-extrabold mb-10 text-center'>Contact Me</h2>
        <p className='text-white text-xl font-normal mb-8 text-center'>Have a question or want to work together? Send me an email! <br />I'd love to hear from you.</p>
      <div className="flex justify-center">
        <button
          onClick={handleCopy}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden px-8 py-4 rounded-xl border border-amber-50/20 bg-[#1a191b] text-white text-lg font-medium cursor-pointer"
        >
          <span
            className="relative z-10 flex items-center gap-3 transition-opacity duration-300"
            style={{ opacity: isHovered || copied ? 0 : 1 }}
          >
            <FiMail /> {email}
          </span>

          <span
            className="absolute inset-0 flex items-center justify-center font-bold transition-all duration-300"
            style={{
              opacity: isHovered || copied ? 1 : 0,
              backgroundColor: overlayColor,
              color: '#120F17',
            }}
          >
            {copied ? 'Copiado!' : 'Copiar'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default Contact