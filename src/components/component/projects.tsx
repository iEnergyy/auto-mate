export function Projects() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Projects
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Take a look at some of the projects I've worked on to showcase my
            skills in SDET and QA Automation.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <div>
            <div>
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="text-muted-foreground">
                Developed a comprehensive test automation framework using
                Selenium, Cypress, and Playwright to ensure reliable and
                scalable end-to-end testing.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-muted-foreground">
                Implemented a CI/CD pipeline with Jenkins and containerization
                using Docker to streamline the deployment and testing process.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-xl font-bold">Project 3</h3>
              <p className="text-muted-foreground">
                Designed and executed a comprehensive test strategy that
                included unit, integration, and performance testing to ensure
                the quality of a complex web application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
