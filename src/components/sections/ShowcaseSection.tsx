'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const FLOW_STEPS = [
  {
    id: '01',
    title: 'WhatsApp Message Arrives',
    icon: '💬',
    color: '#25d366',
    description:
      'User sends a message via WhatsApp Business API. The webhook fires to our FastAPI ingestion service, parsing intent, language, and context in real-time.',
    tech: ['WhatsApp Business API', 'FastAPI', 'Webhook Handler'],
  },
  {
    id: '02',
    title: 'LLM Reasoning Layer',
    icon: '🧠',
    color: '#3b9eff',
    description:
      'The message payload hits the LLM orchestration layer (OpenAI GPT-4o / Google Gemini 1.5). The model decides: generate a text reply, or trigger the voice pipeline? Intent classification happens here.',
    tech: ['OpenAI GPT-4o', 'Google Gemini 1.5', 'LangChain', 'Intent Routing'],
  },
  {
    id: '03',
    title: 'Voice Synthesis via ElevenLabs',
    icon: '🎙️',
    color: '#a78bfa',
    description:
      'When the voice path is chosen, the LLM-generated text response is passed to ElevenLabs streaming API. A cloned or multilingual voice renders the response as a high-fidelity WAV/MP3 audio stream.',
    tech: ['ElevenLabs Streaming API', 'Voice Cloning', 'Text-to-Speech', 'SSML'],
  },
  {
    id: '04',
    title: 'Twilio SIP Domain Routing',
    icon: '📞',
    color: '#f59e0b',
    description:
      'A Twilio SIP Domain is configured as the PSTN bridge. The audio stream is routed via TwiML — the call is initiated to the user\'s number with the ElevenLabs-generated voice. Real-time bidirectional audio over WebRTC/SIP.',
    tech: ['Twilio SIP Domains', 'TwiML', 'WebRTC', 'PSTN Bridge'],
  },
  {
    id: '05',
    title: 'User Receives Voice Call',
    icon: '📲',
    color: '#10b981',
    description:
      'The agent delivers the AI-generated voice response as a real phone call. The user can interact back (speech-to-text via Whisper), creating a full conversational loop — from text message to live phone AI agent.',
    tech: ['OpenAI Whisper STT', 'Real-time ASR', 'Conversation Memory', 'Context Window'],
  },
]

const CODE_SNIPPET = `# Simplified orchestration flow
async def handle_whatsapp_message(payload: WebhookPayload):
    # 1. Parse intent with LLM
    intent = await llm_router.classify(payload.body)
    
    if intent.requires_voice:
        # 2. Generate response text
        response = await openai_client.chat.completions.create(
            model="gpt-4o",
            messages=build_conversation(payload)
        )
        
        # 3. Synthesize voice via ElevenLabs
        audio_stream = await elevenlabs.generate(
            text=response.choices[0].message.content,
            voice="ankush-custom-voice",
            stream=True
        )
        
        # 4. Initiate Twilio SIP call
        call = twilio_client.calls.create(
            twiml=build_twiml(audio_stream),
            to=payload.from_number,
            from_=settings.TWILIO_SIP_DOMAIN
        )
        
        return {"call_sid": call.sid, "status": "voice_delivered"}
    
    return await send_whatsapp_reply(payload, intent.text_response)`

export function ShowcaseSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      id="showcase"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-[var(--surface-raised)]"
    >
      {/* BG effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">04 — Technical Showcase</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">
            Unified Multimodal
            <span className="gradient-text"> AI Agent</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[var(--ink-muted)] text-lg max-w-3xl mb-12 leading-relaxed"
        >
          Engineering the bridge between conversational text AI and real-time voice telephony.
          A complete system that transitions a WhatsApp chat into a live AI voice call — using
          Twilio SIP Domains, ElevenLabs, and LLM orchestration.
        </motion.p>

        {/* Architecture diagram — step flow */}
        <div className="mb-12">
          <h3 className="font-mono text-xs text-[var(--ink-faint)] uppercase tracking-widest mb-6">
            System Architecture Flow
          </h3>

          {/* Steps */}
          <div className="space-y-3">
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveStep(i === activeStep ? -1 : i)}
                className={`bento-card rounded-2xl border cursor-pointer transition-all duration-300 relative z-10 ${
                  activeStep === i
                    ? 'border-[var(--accent)] bg-[var(--accent-muted)]'
                    : 'border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/40'
                }`}
              >
                <div className="p-5 flex items-start gap-4">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: `${step.color}20` }}
                    >
                      {step.icon}
                    </div>
                    {i < FLOW_STEPS.length - 1 && (
                      <div className="w-px h-4 bg-[var(--surface-border)]" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-[var(--ink-faint)]">{step.id}</span>
                      <h3 className="font-semibold text-[var(--ink)] text-sm">{step.title}</h3>
                    </div>

                    <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {step.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md font-mono"
                          style={{ background: `${step.color}15`, color: step.color }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`flex-shrink-0 text-[var(--ink-faint)] transition-transform ${activeStep === i ? 'rotate-180' : ''}`}>
                    ↓
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl overflow-hidden border border-[var(--surface-border)]"
        >
          {/* Code header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--surface-border)] bg-[var(--surface-raised)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="font-mono text-xs text-[var(--ink-faint)]">orchestrator.py</span>
            <span className="font-mono text-xs text-[var(--accent)] px-2 py-0.5 rounded-md bg-[var(--accent-muted)]">Python</span>
          </div>

          {/* Code body */}
          <div className="overflow-x-auto">
            <pre className="code-block p-5 text-[var(--ink-muted)] leading-6 whitespace-pre">
              <code>
                {CODE_SNIPPET.split('\n').map((line, i) => (
                  <div key={i} className="flex">
                    <span className="select-none text-[var(--ink-faint)] opacity-40 w-8 text-right mr-4 flex-shrink-0 text-xs">
                      {i + 1}
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/&/g, '&amp;')
                          .replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;')
                          .replace(/(#.*)/g, '<span style="color:var(--ink-faint);opacity:0.7">$1</span>')
                          .replace(/(".*?")/g, '<span style="color:#86efac">$1</span>')
                          .replace(/\b(async|await|def|return|if)\b/g, '<span style="color:#93c5fd">$1</span>')
                          .replace(/\b(await|import)\b/g, '<span style="color:#c4b5fd">$1</span>'),
                      }}
                    />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Engineering highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            { icon: '⚡', title: 'Real-time streaming', desc: 'ElevenLabs audio streamed directly into Twilio TwiML — sub-2s latency voice delivery' },
            { icon: '🔁', title: 'Bidirectional loop', desc: 'Whisper STT captures user\'s spoken reply, routes back to LLM for context-aware follow-up' },
            { icon: '🌐', title: 'Multilingual ready', desc: 'ElevenLabs multilingual v2 + Gemini enable native voice responses in 29+ languages' },
          ].map(({ icon, title, desc }) => (
            <article key={title} className="glass rounded-xl p-4">
              <div className="text-2xl mb-2">{icon}</div>
              <h4 className="font-semibold text-sm text-[var(--ink)] mb-1">{title}</h4>
              <p className="text-xs text-[var(--ink-faint)] leading-relaxed">{desc}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
