/*
 * @Author: Stevie
 * @Date: 2021-07-09 15:13:57
 * @LastEditTime: 2021-07-29 17:42:59
 * @LastEditors: Stevie
 * @Description:
 */
import './index.less'
import webpackLogo from './../public/assets/images/webpack-logo.svg'

class Main {
  constructor() {
    this.render()
  }

  renderTitle() {
    const div = document.createElement('div')
    div.className = 'title'
    div.innerHTML = 'webpack最佳实践'
    document.body.appendChild(div)
  }

  renderSVG() {
    const logoContainer = document.createElement('div')
    logoContainer.style.textAlign = 'center'
    const img = document.createElement('img')
    img.src = webpackLogo
    img.height = 200
    logoContainer.appendChild(img)
    document.body.appendChild(logoContainer)
  }

  render() {
    this.renderTitle()
    this.renderSVG()
  }
}
new Main()
