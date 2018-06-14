class Driver {
  constructor(name, joined) {
    this.name = name
    this.joined = joined
  }

  startDate() {
    let d = new Date()
  }

  yearsExperienceFromBeginningOf(year) {
    return year - startDate()
  }
}
