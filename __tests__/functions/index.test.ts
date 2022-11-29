import { classNames, formatPrice } from '../../src/functions'

describe('testing functions', () => {
  describe('formatPrice', () => {
    it('formatPrice with 0', () => {
      expect(formatPrice(0)).toEqual('R$ 0,00')
    })
    it('formatPrice with value greater than 0', () => {
      expect(formatPrice(10)).toEqual('R$ 10,00')
    })
    it('formatPrice with value less than 0', () => {
        expect(formatPrice(-2)).toEqual('')
      })
  })
  describe('classNames', () => {
    it('called classNames function', () => {
      expect(classNames("teste")).toEqual('teste')
    })
  })
})
