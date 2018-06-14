class Driver {
  constructor(name, joined) {
    this.name = name
    this.joined = joined
  }

  startDate() {
    let d = Driver.new Date()
  }

  yearsExperienceFromBeginningOf(year) {
    return startDate() - year
  }
}
