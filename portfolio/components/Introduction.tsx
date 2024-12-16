import { Button } from "@/components/ui/button"

export function Introduction() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-primary">Hello, I'm Nikhila Etikyala</h1>
        <p className="text-xl mb-6 text-muted-foreground">I'm a passionate Software Engineer pursuing my Master's in Computer Science at George Mason University. With a strong background in Java, Python, and web technologies, I specialize in developing scalable and efficient software solutions.</p>
        <div className="flex space-x-4">
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/nikhila-etikyala-8995561b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/nikhilae" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

