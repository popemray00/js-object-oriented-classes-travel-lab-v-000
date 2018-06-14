class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  }

  startDate() {
    let d = new Date()
    return d instanceof Date()
  }

  yearsExperienceFromBeginningOf(year) {
    return year - startDate
  }
}
