export function Skills() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Skills
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the key skills I've developed as a top-level
            SDET/QA Automation Engineer.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Test Automation</h3>
          <p className="text-muted-foreground">
            Proficient in Selenium, Cypress, and Playwright for end-to-end
            testing. Experienced in creating robust and scalable test automation
            frameworks.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">CI/CD and DevOps</h3>
          <p className="text-muted-foreground">
            Expertise in setting up and maintaining CI/CD pipelines using tools
            like Jenkins, GitHub Actions, and containerization with Docker.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Performance Testing</h3>
          <p className="text-muted-foreground">
            Experienced in conducting performance testing using tools like
            JMeter, Gatling, and New Relic to identify and address performance
            bottlenecks.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Agile Methodologies</h3>
          <p className="text-muted-foreground">
            Proficient in Agile software development practices, including Scrum,
            Kanban, and Test-Driven Development (TDD).
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Debugging and Troubleshooting</h3>
          <p className="text-muted-foreground">
            Skilled in identifying and resolving complex issues through thorough
            investigation, root cause analysis, and effective problem-solving
            techniques.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Continuous Learning</h3>
          <p className="text-muted-foreground">
            Passionate about staying up-to-date with the latest technologies,
            tools, and best practices in the SDET/QA Automation field.
          </p>
        </div>
      </div>
    </div>
  )
}
