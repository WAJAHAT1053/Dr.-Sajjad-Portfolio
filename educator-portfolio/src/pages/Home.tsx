import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

export default function Home() {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const section = document.getElementById('contact')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <>
      <motion.section className="relative isolate" initial={fadeIn.initial} whileInView={fadeIn.withinView} />
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

        <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
            Dr. Mohammed Sajjad Hussain
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 sm:text-xl">
            Educational Leader & Principal
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            “With over 20 years of experience across India and Saudi Arabia, I am dedicated to fostering academic
            excellence, teacher development, and inclusive learning environments.”
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
              Download CV
            </a>
            <button
              onClick={handleContactClick}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
      

      
      <motion.section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16" initial={fadeIn.initial} whileInView={fadeIn.whileInView} transition={fadeIn.transition} viewport={fadeIn.viewport}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2">
            <div className="relative mx-auto h-56 w-56 md:h-64 md:w-64">
              <img src="/assets/profile.png" alt="Dr. Mohammed Sajjad Hussain" className="h-full w-full object-contain drop-shadow-xl" />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-900">About</h2>
            <div className="mt-4 space-y-4 text-slate-700">
              <p>
                I’ve had the privilege of leading schools across India and Saudi Arabia as Principal and Vice Principal,
                guiding institutions through growth, accreditation, and meaningful community impact with a student-centered approach.
              </p>
              <p>
                My educational philosophy centers on inclusive learning, continuous teacher development, and innovation in pedagogy.
                I believe in building strong professional learning cultures where every learner and educator can thrive.
              </p>
              <p>
                Holding a Ph.D. in Education, I remain committed to lifelong learning and transforming schools through evidence-based
                leadership, collaboration, and a vision rooted in excellence and equity.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16" initial={fadeIn.initial} whileInView={fadeIn.whileInView} transition={fadeIn.transition} viewport={fadeIn.viewport}>
        <h2 className="text-2xl font-semibold tracking-tight text-blue-900">Experience</h2>
        <ol className="mt-8 relative border-l border-slate-200 pl-6">
          {/* Vice Principal — International Indian School, Al Jubail (2016–2025) */}
          <li className="mb-10 ml-2">
            <span className="absolute -left-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-blue-900">
              <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            </span>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-base font-semibold text-slate-900">Vice Principal</h3>
              <span className="text-slate-500">— International Indian School, Al Jubail</span>
              <span className="ml-auto w-full md:w-auto text-sm text-slate-500">2016–2025</span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Led academic operations for a large multicultural student body.</li>
              <li>Coordinated accreditation, compliance, and quality assurance processes.</li>
              <li>Strengthened teacher mentoring and professional learning communities.</li>
              <li>Drove data-informed improvements in student outcomes and wellbeing.</li>
            </ul>
          </li>

          {/* Principal — Wisdom The School, Telangana (2013–2016) */}
          <li className="mb-10 ml-2">
            <span className="absolute -left-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-blue-900">
              <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            </span>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-base font-semibold text-slate-900">Principal</h3>
              <span className="text-slate-500">— Wisdom The School, Telangana</span>
              <span className="ml-auto w-full md:w-auto text-sm text-slate-500">2013–2016</span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Implemented school-wide instructional and assessment reforms.</li>
              <li>Built partnerships with parents and the local community.</li>
              <li>Introduced teacher appraisal and growth pathways.</li>
            </ul>
          </li>

          {/* Principal — Ideal High School (2002–2013) */}
          <li className="mb-10 ml-2">
            <span className="absolute -left-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-blue-900">
              <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            </span>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-base font-semibold text-slate-900">Principal</h3>
              <span className="text-slate-500">— Ideal High School</span>
              <span className="ml-auto w-full md:w-auto text-sm text-slate-500">2002–2013</span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Expanded enrollment and program offerings aligned to community needs.</li>
              <li>Established systems for student support and inclusive practices.</li>
              <li>Mentored emerging leaders to strengthen middle management.</li>
            </ul>
          </li>

          {/* Teacher — Mahbubnagar Grammar School & St. Ann’s Public School (1995–2002) */}
          <li className="ml-2">
            <span className="absolute -left-2.5 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-blue-900">
              <span className="h-2 w-2 rounded-full bg-blue-900"></span>
            </span>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-base font-semibold text-slate-900">Teacher</h3>
              <span className="text-slate-500">— Mahbubnagar Grammar School & St. Ann’s Public School</span>
              <span className="ml-auto w-full md:w-auto text-sm text-slate-500">1995–2002</span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Delivered engaging instruction focused on core competencies.</li>
              <li>Supported co-curricular programs and student leadership.</li>
              <li>Collaborated with colleagues to enhance teaching practices.</li>
            </ul>
          </li>
        </ol>
      </motion.section>
      <motion.section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16" initial={fadeIn.initial} whileInView={fadeIn.whileInView} transition={fadeIn.transition} viewport={fadeIn.viewport}>
        <h2 className="text-2xl font-semibold tracking-tight text-blue-900">Education</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-900">Ph.D. in Education</h3>
            <p className="text-sm text-slate-600">Shri JJTU, Rajasthan • 2019–2023</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-900">M.A. in English</h3>
            <p className="text-sm text-slate-600">Kakatiya University • 2003–2005</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-900">M.Ed.</h3>
            <p className="text-sm text-slate-600">Osmania University • 1997–1998</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-900">B.Ed.</h3>
            <p className="text-sm text-slate-600">Osmania University • 1994–1995</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
            <h3 className="font-semibold text-slate-900">B.Sc.</h3>
            <p className="text-sm text-slate-600">Osmania University • 1990–1993</p>
          </div>
        </div>
      </motion.section>
      <motion.section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16" initial={fadeIn.initial} whileInView={fadeIn.whileInView} transition={fadeIn.transition} viewport={fadeIn.viewport}>
        <h2 className="text-2xl font-semibold tracking-tight text-blue-900">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            'Educational Leadership',
            'Curriculum Development',
            'Teacher Training',
            'Student Counseling',
            'Administrative Expertise',
            'Educational Technology',
            'Event Coordination',
            'Conflict Resolution',
            'Parent-Teacher Communication',
          ].map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-900"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow md:p-6">
            <div className="text-lg font-semibold text-slate-900">Led 200+ Educators</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow md:p-6">
            <div className="text-lg font-semibold text-slate-900">90%+ Board Results</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow md:p-6">
            <div className="text-lg font-semibold text-slate-900">50+ Teacher Workshops</div>
          </div>
        </div>
      </motion.section>
      <motion.section id="publications" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16" initial={fadeIn.initial} whileInView={fadeIn.whileInView} transition={fadeIn.transition} viewport={fadeIn.viewport}>
        <h2 className="text-2xl font-semibold tracking-tight text-blue-900">Publications</h2>
        <div className="mt-8 space-y-4">
          <article className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div>
              <h3 className="font-medium text-slate-900">“Empirical Approach for Development of Parental Preferences to Admit Children in Schools”</h3>
              <p className="text-sm text-slate-600">Scholarly Research Journal, 2022</p>
            </div>
            <a href="#" className="inline-flex shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-slate-50">View Paper</a>
          </article>
          <article className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div>
              <h3 className="font-medium text-slate-900">“Study and Development in Enhancing the Awards for Students in Private and Government High Schools”</h3>
              <p className="text-sm text-slate-600">Scholarly Research Journal, 2022</p>
            </div>
            <a href="#" className="inline-flex shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-slate-50">View Paper</a>
          </article>
        </div>
      </motion.section>
      <motion.section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16" initial={fadeIn.initial} whileInView={fadeIn.whileInView} transition={fadeIn.transition} viewport={fadeIn.viewport}>
        <h2 className="text-2xl font-semibold tracking-tight text-blue-900">Contact</h2>
        <p className="mt-2 text-slate-600">Feel free to reach out for collaborations or professional opportunities.</p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm text-slate-600">Email</div>
              <a href="mailto:mshussain1053@yahoo.com" className="mt-1 block font-medium text-blue-900 hover:underline">mshussain1053@yahoo.com</a>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm text-slate-600">LinkedIn</div>
              <a href="https://www.linkedin.com/in/dr-mohammed-sajjad-hussain-150a2129/" target="_blank" rel="noreferrer" className="mt-1 block font-medium text-blue-900 hover:underline">View Profile</a>
            </div>
          </div>
          <div className="md:col-span-3">
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don’t fill this out: <input name="bot-field" /></label>
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  )
}


