import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [faqOpen, setFaqOpen] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Messaggio inviato! Sarai ricontattato a breve.')
    setForm({ name: '', email: '', message: '' })
  }

  const faqs = [
    { q: 'Come si svolge una seduta?', a: 'Le sedute hanno una durata di circa 50 minuti e si svolgono in un ambiente riservato e accogliente.' },
    { q: 'Quanto dura un percorso terapeutico?', a: 'La durata varia in base agli obiettivi e alle necessità individuali.' },
    { q: 'Posso fare sedute online?', a: 'Sì, è possibile svolgere colloqui online tramite piattaforme sicure e riservate.' }
  ]

  return (
    <div className='min-h-screen bg-[#f5f1ec] text-[#404040] flex flex-col'>
      <Head>
        <title>Psicologa Psicoterapeuta - Nome Cognome</title>
        <meta name='description' content='Psicologa psicoterapeuta, sostegno psicologico, terapia individuale e di coppia.' />
      </Head>
      <header className='bg-[#ead9d0] p-6 shadow-md flex justify-between items-center sticky top-0 z-50'>
        <div className='flex items-center gap-4'>
          <img src='/profilo.jpg' alt='Foto professionale' className='w-14 h-14 rounded-full object-cover' />
          <div>
            <h1 className='text-3xl font-bold'>Dott.ssa Nome Cognome</h1>
            <p className='text-lg'>Psicologa Psicoterapeuta</p>
          </div>
        </div>
        <nav className='space-x-4 hidden md:block'>
          <a href='#home'>Home</a>
          <a href='#chisono'>Chi Sono</a>
          <a href='#servizi'>Servizi</a>
          <a href='#faq'>FAQ</a>
          <a href='#contatti'>Contatti</a>
        </nav>
      </header>
      <main className='flex-grow p-6 max-w-5xl mx-auto grid gap-12'>
        <section id='home' className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Benvenuti</h2>
          <p className='max-w-2xl mx-auto mb-6'>Offro supporto psicologico e psicoterapia per aiutarti a ritrovare il tuo benessere emotivo e psicologico.</p>
          <Button className='bg-[#5b8174] text-white px-6 py-3 rounded-2xl text-lg hover:opacity-90'>Prenota un Colloquio</Button>
        </section>
      </main>
    </div>
  )
}
