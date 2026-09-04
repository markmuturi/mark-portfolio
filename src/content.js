// Everything in this file is either a fact you gave me, or an explicit
// PLACEHOLDER for you to replace. Search this file for "PLACEHOLDER" before
// you ship.

export const profile = {
  name: 'Mark',
  location: 'Nairobi, Kenya',
  role: 'Full-stack developer & brand designer',
  availability: 'Open to Work',
  email: 'muturimark16@gmail.com', // PLACEHOLDER — your real contact email
  github: 'https://github.com/markmuturi', // PLACEHOLDER
  linkedin: 'https://linkedin.com/in/mark-muturi/', // PLACEHOLDER
  cvUrl: '/Mark_Muturi_Resume.pdf', // PLACEHOLDER — link to a hosted CV/resume file
}

// Copy shifts slightly depending on which "mode" the visitor has selected.
// This isn't decorative — CompTech Solutions and SuaveCre8ive are two real,
// separately-run practices, so the toggle lets a visitor self-select which
// side of the work they came for.
export const heroCopy = {
  dev: {
    eyebrow: 'Full-stack Engineer',
    line1: 'I build the',
    accent: 'systems',
    line2: 'behind the product.',
    body: 'React and Next.js on the front end, Node, Express and MongoDB underneath. Final-year Business Innovation & Technology Management student at JKUAT, building production work achieiving my degree honours.',
  },
  design: {
    eyebrow: 'SuaveCre8ive — visual & brand design',
    line1: 'I build the',
    accent: 'identity',
    line2: 'people remember.',
    body: 'Brand systems, layout, and visual direction for founders and small teams who need work that looks considered, not templated.',
  },
}

export const practice = [
  {
    id: '01',
    key: 'dev',
    name: 'CompTech Solutions',
    tag: 'Full-Stack Development',
    description:
      'Freelance full-stack engineering. Front end in React and Next.js, back end in Node.js and Express, data in MongoDB. WordPress for clients who need a CMS rather than a custom build.',
    stack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'WordPress'],
  },
  {
    id: '02',
    key: 'design',
    name: 'SuaveCre8ive',
    tag: 'Graphic Design',
    description:
      'Graphic design and brand work — the visual layer a lot of freelance developers skip. From Video Editing, Illustrations and animations, design is a language I speak Natively.',
    stack: ['Adobe Creative Suite', 'Canva', 'Figma'],
  },
]

// Skills section (dev tab). One-liners are grounded in what's already true
// elsewhere in this file — Python is here because Footy Predictor (below)
// actually uses it, not because it was added for padding. Edit freely.
export const skills = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Primary tool for building interfaces — this site included.',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    description: 'Reached for when a project needs routing or server rendering out of the box.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description: 'Runtime for everything on the back end.',
  },
  {
    id: 'express',
    name: 'Express',
    category: 'Backend',
    description: 'Usual choice for routing and API structure on top of Node.',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Data',
    description: "Default database for projects that don't need strict relational structure.",
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'CMS',
    description: 'For clients who need to manage their own content after handoff.',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Scripting',
    description:
      "Handled the match-outcome logic behind Footy Predictor — data-facing work outside the usual JS stack.",
  },
]

// Design-tab content. This tab is a deliberately different site (not just a
// recolor) — reconstructed from the light-theme, Bebas Neue/Nunito, orbit-ring
// version of this portfolio, with spencergabor.work as a reference point for
// the hover/shadow treatment on work cards. If the original build had exact
// copy or palette values, replace what's here — this is a rebuild, not a copy
// of a file I had access to.
export const designPalette = [
  { id: 'coral', hex: '#FF5A4E' },
  { id: 'teal', hex: '#1FB6A8' },
  { id: 'violet', hex: '#7C5CFC' },
  { id: 'gold', hex: '#F5B324' },
]

export const designHero = {
  eyebrow: 'SuaveCre8ive — visual & brand design',
  heading: 'Design with a pulse.',
  body: 'Brand systems, layout, and visual direction for people who want work that looks considered, not templated. PLACEHOLDER: rewrite this in your own voice.',
}

export const work = [
  {
    id: 'naj26',
    title: 'Nairobi Arts Jamboree 2026',
    tag: 'Client site',
    mode: 'dev',
    description:
      'Festival website for NAJ26. PLACEHOLDER: add what you actually built (stack, key features, timeline) and the outcome — traffic, ticket signups, client feedback, whatever you can point to.',
    href: 'https://nairobiartsjamboree.ke',
    image: '/images/work/naj26.png',
    placeholder: false,
  },
  {
    id: 'trashsense',
    title: 'TrashSense',
    tag: 'Public Welfare',
    mode: 'dev',
    description:
      'A platform designed to assist the general public to report illegal dumpsites in the neighborhoods by sending photos and a live location tag.',
    href: 'https://trash-sense.vercel.app/',
    image: '/images/work/trashsense.png',
    placeholder: false,
  },
  {
    id: 'footypredictor',
    title: 'Footy Predictor',
    tag: 'Sports',
    mode: 'dev',
    description:
      'A simple predictor App that uses Python to predict match outcomes based on past results.',
    href: 'https://footy-predictor-jade.vercel.app/',
    image: '/images/work/footypredictor.png',
    placeholder: false,
  },
  {
    id: 'liminalexp',
    title: 'Liminal Experience 1st Edition',
    tag: 'Community Event',
    mode: 'design',
    description:
      'Designed promotional materials for both editions of the Liminal Experience',
    href: 'https://www.behance.net/gallery/235622173/Liminal-Experience-KE-Promotional-Materials',
    placeholder: false,
  },
  {
    id: 'mygxs',
    title: 'MY G XS LIVE CONCERT',
    tag: 'Community Event',
    mode: 'design',
    description:
      'Designed promotional materials for My G Xs Live Concert',
    href: '',
    placeholder: false,
  },
  {
    id: 'liminalexp-2',
    title: 'Liminal Experience 2nd Edition',
    tag: 'Community Event',
    mode: 'design',
    description:
      'Designed promotional materials for both editions of the Liminal Experience',
    href: 'https://www.behance.net/gallery/255085495/Liminal-Experience-2nd-Edition',
    placeholder: false,
  },
]

export const process = [
  {
    id: '01',
    title: 'Discover',
    duration: 'Async / call',
    description: 'Scope, constraints, and whether the timeline is realistic — before anything is quoted.',
  },
  {
    id: '02',
    title: 'Build',
    duration: 'Varies',
    description: 'Working previews shared as they exist, not one reveal at the end.',
  },
  {
    id: '03',
    title: 'Ship',
    duration: '1–2 days',
    description: 'Deploy, hand over the codebase, and stay reachable for the small fixes that follow launch.',
  },
]
