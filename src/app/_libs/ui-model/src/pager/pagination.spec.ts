import {expect} from 'chai';
import {Pagination} from './pagination';

describe('Pagination', () => {
  it('hasPrevMore && hasFirst', () => {
    const pagination = new Pagination(10, 5);
    pagination.totalItems = 100;
    pagination.goTo(0);
    expect(pagination.hasPrevMore).to.be.false;
    expect(pagination.hasFirst).to.be.false;
    pagination.goTo(3);
    expect(pagination.hasPrevMore).to.be.false;
    expect(pagination.hasFirst).to.be.true;
    pagination.goTo(4);
    expect(pagination.hasPrevMore).to.be.true;
    expect(pagination.hasFirst).to.be.true;
  });
  it('hasNextMore && hasLast', () => {
    const pagination = new Pagination(10, 5);
    pagination.totalItems = 100;
    pagination.goTo(9);
    expect(pagination.hasNextMore).to.be.false;
    expect(pagination.hasLast).to.be.false;
    pagination.goTo(7);
    expect(pagination.hasLast).to.be.false;
    pagination.goTo(6);
    expect(pagination.hasNextMore).to.be.false;
    expect(pagination.hasLast).to.be.true;
    pagination.goTo(5);
    expect(pagination.hasNextMore).to.be.true;
    expect(pagination.hasLast).to.be.true;
  });
  it('hasNextMore && hasLast: mini', () => {
    const pagination = new Pagination(10, 5);
    pagination.totalItems = 50;
    pagination.goTo(0);
    expect(pagination.hasNextMore).to.be.false;
    expect(pagination.hasLast).to.be.false;
    pagination.goTo(1);
    expect(pagination.hasNextMore).to.be.false;
    expect(pagination.hasLast).to.be.false;
  });
  it('pages', () => {
    const pagination = new Pagination(10, 5);
    pagination.totalItems = 100;
    expect(pagination.pages).to.eql([0, 1, 2, 3, 4]);
  });
  it('one page', () => {
    const pagination = new Pagination(10, 5);
    pagination.totalItems = 1;
    expect(pagination.pages).to.eql([0]);
  });
  it('no page', () => {
    const pagination = new Pagination(10, 5);
    expect(pagination.pages).to.eql([]);
  });
});
