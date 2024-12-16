import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    'Java', 'Python', 'React', 'TypeScript', 'Node.js', 'CSS', 'PHP', 'C/C++', 'SQL', 'HTML',
    'Groovy', 'JavaScript', 'Kubernetes', 'Flask', 'Docker', 'Spring Boot', 'Tailwind CSS',
    'pandas', 'MySQL', 'MongoDB', 'Google Cloud', 'REST API', 'AWS', 'Bootstrap', 'Grails',
    'JUnit', 'DevOps', 'J2EE', 'CI/CD', 'LLMs', 'PyTorch/TensorFlow'
  ]

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 bg-background text-primary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

