import { Header } from '../components/Header'
import { Introduction } from '../components/Introduction'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-background py-4 text-center">
        <p>&copy; 2023 Nikhila Etikyala. All rights reserved.</p>
      </footer>
    </div>
  )
}

