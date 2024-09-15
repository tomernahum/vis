
export let selectedBarId = "None"

export class Counter {
  id = "counterBar"
  count : number;

  upSpeed: number;
  downSpeed: number;

  maxCount: number;

  /*style*/
  color: string;

  constructor(id: string, params:any) {
    this.id = id
    this.color = params?.color ?? "brown"

    this.count = params?.count ?? 100

    this.upSpeed = params?.upSpeed ?? 0.3
    this.downSpeed = params?.downSpeed ?? 1

    this.maxCount = params?.maxCount ?? 100

  }

  tick() {
    if (selectedBarId === this.id) {
      if (this.count > this.downSpeed) {
        this.count -= this.downSpeed
      }
      else {
        this.count = 0
        selectedBarId = "None"
      }
    }
    else {
      if (this.count < this.maxCount - this.upSpeed) {
        this.count += this.upSpeed
      }
      else {
        this.count = this.maxCount
      }
    }
  }

  select() {
    selectedBarId = this.id
  }

  getElement() {
    const el = document.createElement("div")
    
    el.className = this.id

    const textEl = document.createElement("p")
    textEl.style.margin = "0"
    textEl.innerText = this.count.toString()
    el.appendChild(textEl)
    
    el.style.width = `${18 * (this.maxCount / 100)}rem`
    // el.style.height = "3rem"
    el.style.border = `2px solid ${this.color}`
    el.style.margin = "1rem"

    const innerEl = document.createElement("div")
    innerEl.style.backgroundColor = this.color
    innerEl.style.height = "2rem"
    // innerEl.style.border = `1px solid purple`
    innerEl.style.width = `${(this.count / this.maxCount) * 100}%`

    el.appendChild(innerEl)

    el.addEventListener("click", () => {
      selectedBarId = this.id
    })

    return el
  }

  updateElement(){
    const elems = document.getElementsByClassName(this.id)
    for (const el of elems) {
      el.querySelector("p")!.innerText = Math.floor(this.count).toString()
      el.querySelector("div")!.style.width = `${this.count / this.maxCount * 100}%`
      
    }
  }
}
