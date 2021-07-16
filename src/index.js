/*
 * @Author: Stevie
 * @Date: 2021-07-09 15:13:57
 * @LastEditTime: 2021-07-16 14:32:00
 * @LastEditors: Stevie
 * @Description:
 */
import './index.less'

class Main {
  constructor() {
    this.render()
  }

  renderTitle() {
    const div = document.createElement('div')
    div.className = 'chocolate'
    div.style.textAlign = 'center'
    div.innerHTML = 'Title'
    document.body.appendChild(div)
  }

  render() {
    this.renderTitle()
  }
}
new Main()
