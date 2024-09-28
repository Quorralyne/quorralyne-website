import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import heroImage from "../../public/images/heather-contact.webp";

export default function Contact() {
  return (
    <div className="contact">
      <div className="hero">
        <Image
         src={heroImage}
         alt="Hero image"
         layout="fill"
         objectFit="cover"
         objectPosition="66% 25%"
        />
        <div className="hero-content">
          <h1>Contact Heather</h1>
        </div>
      </div>
      <p>Are you interested in working with me? Drop me a line.</p>
      <ContactForm />
    </div>
  )
}