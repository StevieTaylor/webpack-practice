/*
 * @Author: Stevie
 * @Date: 2021-07-09 15:13:57
 * @LastEditTime: 2021-07-29 16:43:42
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
    div.className = 'title'
    div.innerHTML = '标题'
    document.body.appendChild(div)
  }

  render() {
    this.renderTitle()
  }
}
new Main()
