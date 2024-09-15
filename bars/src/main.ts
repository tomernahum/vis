import { Counter} from './counter'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
    <h1 style="margin-bottom: 0;">Bars</h1>

    <p style="margin-bottom: 2rem;">Selecting highest value to drain. Bars recover when not being drained</p>
    
    <div id="bar">
    
    </div>

    <p style="margin-top: 2rem;">Could be a metaphor for activities with different levels of engagingness</p>

  </div>
`

const counters = [
  new Counter("counter", {maxCount: 120}), 
  new Counter("counter2", {color: "purple", maxCount: 89}), 
  new Counter("counter3", {color: "green", maxCount: 65}),
  new Counter("counter4", {color: "pink", maxCount: 79}),
  new Counter("counter5", {color: "orange", maxCount: 53}),
]

counters.forEach(counter => {
  document.querySelector<HTMLDivElement>('#bar')!.appendChild(
    counter.getElement()
  )
})

setInterval(() => {
  counters.forEach(counter => {
    counter.tick()
    counter.updateElement()
  })

  if (Math.random() < 0.05) {
    const maxCounter = counters.reduce((prev, current)=> {
      return (prev.count > current.count) ? prev : current
    }) 
    maxCounter.select()
  }


}, 100)
