import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      company: "Radical AI",
      position: "Software Engineer Intern",
      date: "May 2024 - Jul 2024",
      location: "Remote, US",
      responsibilities: [
        "Deployed Kafka (Kraft) Clusters for event-driven architecture supporting 20 GB/hour throughput.",
        "Optimized database interactions using JPA Stored Procedures.",
        "Designed and implemented a Jenkins pipeline for automating build and deployment of Spring Boot microservices.",
        "Developed and optimized JPA-based stored procedures for complex data processing and retrieval."
      ]
    },
    {
      company: "Openprise Technologies",
      position: "Software Engineer",
      date: "Jan 2022 - Dec 2022",
      location: "Hyderabad, India",
      responsibilities: [
        "Developed Google Calendar functionality within Openprise's data orchestration platform using Groovy and Grails.",
        "Designed and implemented OAuth2 authentication flow for secure Google Calendar access.",
        "Conducted ETL processes on datasets exceeding 10 million records using Elasticsearch and Groovy.",
        "Led API testing and documentation for Google Calendar integration using Postman.",
        "Enhanced calendar data processing using GORM, reducing query execution time by 40%.",
        "Optimized database schemas using SQL, accelerating query performance by 35%.",
        "Increased efficiency of Openprise's DataMarketplace functionality by 43% through Grails-based process enhancements.",
        "Developed custom APIs for data provider authentication, rate limiting, and response caching."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{exp.position}</CardTitle>
                <CardDescription>{exp.company} | {exp.location} | {exp.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

