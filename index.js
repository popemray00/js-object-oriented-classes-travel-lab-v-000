class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  }

  startDate() {
    driver.startDate = new Date()
  }

  yearsExperienceFromBeginningOf(year) {
    return year - startDate
  }
}
