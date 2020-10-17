(function() {
  window.SH_WIDGET = {
    init: callback => {
      const containers = document.querySelectorAll('[data-widget-type]')
      containers.forEach(container => {
        const widget = generateWidgetByType(container.dataset.widgetType, container)
        container.appendChild(widget)
      })

      typeof callback === 'function' && callback()
    }
  }

  function generateWidgetByType(widgetType, node) {
    const widget = document.createElement('div')
    switch(widgetType) {
      case 'productList': 
        widget.innerHTML = `<span>Add a ${node.dataset.productType} product list here</span>`
        break
      case 'productDetail':
        widget.innerHTML = `<span>Add product details for id ${node.dataset.productId}</span>`
        break
      default:
        widget.innerHTML = '<span>Awesome!</span>'
        break
    }
    return widget
  }
})()
