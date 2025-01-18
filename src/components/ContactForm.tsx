'use client'

import { useState } from 'react'
import { TextInput, Textarea, Button, Stack, Title } from '@mantine/core'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Title order={2} c="#34A853" mb="lg">
          Send a Message
        </Title>
        <TextInput
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          size="md"
        />
        <TextInput
          label="Email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          size="md"
        />
        <Textarea
          label="Message"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minRows={4}
          size="md"
        />
        <Button 
          type="submit" 
          size="md"
          style={{ 
            backgroundColor: '#34A853',
            '&:hover': {
              backgroundColor: '#2d9147'
            }
          }}
        >
          Send Message
        </Button>
      </Stack>
    </form>
  )
}