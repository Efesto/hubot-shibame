const sinon = require('sinon')
const chai = require('chai').use(require('sinon-chai'));

const expect = chai.expect

describe('shibame', () => {
  let robot;

  beforeEach(() => {
    robot = {
      respond: sinon.spy(),
      hear: sinon.spy()
    }
    require('../src/shibame')(robot)
  })

  it('registers a "shiba me" listener', () => {
    expect(robot.respond).to.have.been.calledWith(/shiba me/i)
  });
});
