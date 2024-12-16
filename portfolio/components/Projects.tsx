import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "BookStore",
      description: "Developed a scalable RESTful API using Spring Boot, supporting 1,000+ daily requests. Optimized SQL database schema for 100,000+ book records, reducing query time by 30%. Designed advanced search functionality using Spring Data JPA Specifications.",
      date: "May 2024 - Jun 2024",
      link: "https://github.com/nikhilae/LibraVerse_backend"
    },
    {
      title: "Patient Monitoring using Java WebSockets",
      description: "Architected a real-time patient monitoring system using Java WebSockets. Optimized system performance by 75% through efficient use of asynchronous WebSocket protocols. Integrated failover mechanisms for uninterrupted health event alerts.",
      date: "Oct 2023 - Nov 2023",
      link: "https://github.com/nikhilae/Patient-Monitoring-project-using-Java-Websockets"
    },
    {
      title: "Harvest",
      description: "Designed and implemented a sustainable agriculture management system. Focused on optimizing crop yields and resource allocation through data-driven insights.",
      date: "2022",
      link: "https://github.com/nikhilae/Harvest"
    },
    {
      title: "Project Chatbot",
      description: "Created an intelligent chatbot system capable of natural language processing and automated responses. Integrated machine learning algorithms for continuous improvement of user interactions.",
      date: "2022",
      link: "https://github.com/nikhilae/Project_Chatbot"
    },
    {
      title: "Inventory Management System through CRUD",
      description: "Developed a comprehensive inventory management system implementing CRUD operations. Utilized modern web technologies for efficient stock tracking and order management.",
      date: "2021",
      link: "https://github.com/nikhilae/Inventory-Management-system-through-CRUD"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

