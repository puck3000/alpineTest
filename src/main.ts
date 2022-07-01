import './style.css'
import dummyData from './dummyData.json'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.store('data', {
  name: 'DummyData',
  datasets: dummyData,
})
Alpine.store('standorte', {
  standorte: ['Zürich', 'Basel', 'Bern', 'Genf', 'Lausanne'],
})

Alpine.start()
