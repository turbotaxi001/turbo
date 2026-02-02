// Додаємо бульбашки для більшої атмосфери алхімії
document.addEventListener('DOMContentLoaded', function () {
  const bubblesContainer = document.getElementById('bubbles')

  // Створюємо 15 бульбашок
  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div')
    bubble.classList.add('bubble')

    // Випадкові розміри та позиції
    const size = Math.random() * 20 + 5
    const left = Math.random() * 100
    const animationDuration = Math.random() * 4 + 3
    const animationDelay = Math.random() * 5

    bubble.style.width = `${size}px`
    bubble.style.height = `${size}px`
    bubble.style.left = `${left}%`
    bubble.style.animationDuration = `${animationDuration}s`
    bubble.style.animationDelay = `${animationDelay}s`

    bubblesContainer.appendChild(bubble)
  }

  // Додаємо ефект міццання тексту
  const alchemyText = document.querySelector('.alchemy-text')
  let hue = 120 // Початковий зелений колір

  function changeTextColor() {
    hue = (hue + 1) % 360
    alchemyText.style.color = `hsl(${hue}, 70%, 60%)`
    alchemyText.style.textShadow = `0 0 10px hsl(${hue}, 70%, 40%)`
    requestAnimationFrame(changeTextColor)
  }

  // Запускаємо плавну зміну кольору
  changeTextColor()
})
