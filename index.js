class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  }

  startDate() {
    new Date()
  }

  yearsExperienceFromBeginningOf(year) {
    return year - startDate
  }
}
