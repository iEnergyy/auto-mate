export function ReturnOfInvestment() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Test Automation ROI
          </h2>
          <p className="max-w-[600px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Investing in test automation can provide significant returns for
            your organization. Here's a breakdown of the potential benefits:
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Improved Efficiency</h3>
            <p className="text-secondary-foreground">
              Automated tests can be executed faster and more consistently than
              manual tests, leading to significant time savings and increased
              productivity.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Reduced Costs</h3>
            <p className="text-secondary-foreground">
              Automating repetitive testing tasks can help eliminate the need
              for manual testing, reducing labor costs and freeing up resources
              for other important tasks.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Improved Quality</h3>
            <p className="text-secondary-foreground">
              Automated tests can catch bugs and regressions earlier in the
              development process, leading to higher-quality software and fewer
              post-release issues.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Faster Time-to-Market</h3>
            <p className="text-secondary-foreground">
              Automated testing can help accelerate the development and
              deployment process, allowing your organization to bring new
              features and updates to market more quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
