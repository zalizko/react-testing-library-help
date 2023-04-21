/*
Hi! Need help with React Testing Library? The best way to get it is by forking
this repository, making a reproduction of your issue (or showing what you're
trying to do), and posting a link to your fork on our Discord chat:

https://testing-library.com/discord
*/

// here's an example
import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'


class Counter extends React.Component {
  result

  constructor() {
    super()
    this.state = {
      loaded: true,
    }
  }

  async componentDidMount() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(false), 250)
    })

    const result = await promise

    this.setState({
      loaded: result,
    })
  }

  render() {
    if (!this.state.loaded) {
      return null
    }
    return <div>hello</div>
  }
}

test('counter shouldn\'t render', async () => {
  render(<Counter />)
  screen.debug();

  await new Promise((resolve)=> {
    setTimeout(()=> screen.debug(), 500);
  });

})
