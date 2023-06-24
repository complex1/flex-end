// vue directive for tooltip

const tooltip = document.createElement('div')
tooltip.className = 'tooltip'
document.body.appendChild(tooltip)

const showTooltip = (el, value, direction) => {
  const { top, left, width, height } = el.getBoundingClientRect()
  tooltip.innerHTML = value
  tooltip.classList.add('active')
  tooltip.classList.add(direction)
  switch (direction) {
    case 'top':
      tooltip.style.top = `${top - tooltip.offsetHeight - 10}px`
      tooltip.style.left = `${left + width / 2 - tooltip.offsetWidth / 2}px`
      break
    case 'bottom':
      tooltip.style.top = `${top + height + 10}px`
      tooltip.style.left = `${left + width / 2 - tooltip.offsetWidth / 2}px`
      break
    case 'left':
      tooltip.style.top = `${top + height / 2 - tooltip.offsetHeight / 2}px`
      tooltip.style.left = `${left - tooltip.offsetWidth - 10}px`
      break
    case 'right':
      tooltip.style.top = `${top + height / 2 - tooltip.offsetHeight / 2}px`
      tooltip.style.left = `${left + width + 10}px`
      break
    default:
      break
  }
  if (tooltip.offsetLeft < 0) {
    tooltip.style.left = '0'
  }
  if (tooltip.offsetTop < 0) {
    tooltip.style.top = '0'
  }
  if (tooltip.offsetLeft + tooltip.offsetWidth > window.innerWidth) {
    tooltip.style.left = `${window.innerWidth - tooltip.offsetWidth}px`
  }
  if (tooltip.offsetTop + tooltip.offsetHeight > window.innerHeight) {
    tooltip.style.top = `${window.innerHeight - tooltip.offsetHeight}px`
  }
}

const hideTooltip = () => {
  tooltip.classList.remove('active')
  tooltip.classList.remove('top')
  tooltip.classList.remove('bottom')
  tooltip.classList.remove('left')
  tooltip.classList.remove('right')
}


export const Tooltip = {
  bind(el, binding) {
    const modifiers = binding.modifiers
    const direction = Object.keys(modifiers)[0] || 'top'
    const text = binding.value
    el.addEventListener('mouseenter', () => {
      showTooltip(el, text, direction)
    })
    el.addEventListener('mouseleave', () => {
      hideTooltip()
    })
  }
}
