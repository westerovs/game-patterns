class Counter {
  count = 0

  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance
    }

    Counter.instance = this
    return Counter.instance
  }

  get getCount() {
    console.log(this.count)
    return this.count
  }

  minus() {
    this.count--
  }

  plus() {
    this.count++
  }
}

const counter = new Counter()
counter.plus()
counter.plus()
counter.plus()

const counter2 = new Counter()
counter2.minus()

new Counter().getCount
new Counter().getCount
new Counter().getCount
new Counter().getCount
new Counter().getCount


