"use client";

import { useState } from "react";
import { TextInput, Textarea, Button, Stack, Title, Text } from "@mantine/core";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    error?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ success: true });
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus({ error: "Failed to send message. Please try again." });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus({ error: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Title order={2} c="#34A853" mb="lg">
          Send a Message
        </Title>
        {submitStatus.success && (
          <Text c="#34A853" fw={500} mb="md">
            Thank you for your message! I&apos;ll get back to you soon.
          </Text>
        )}
        {submitStatus.error && (
          <Text c="red" fw={500} mb="md">
            {submitStatus.error}
          </Text>
        )}
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
          loading={isSubmitting}
          style={{
            backgroundColor: "#34A853",
            "&:hover": {
              backgroundColor: "#2d9147",
            },
          }}
        >
          Send Message
        </Button>
      </Stack>
    </form>
  );
}
