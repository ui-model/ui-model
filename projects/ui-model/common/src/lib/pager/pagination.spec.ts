import { Pagination } from './pagination';

describe('Pagination', () => {
  it('hasPrevMore && hasFirst', () => {
    const pagination = new Pagination().setSize(10).setViewport(5);
    pagination.totalItems = 100;
    pagination.goTo(0);
    expect(pagination.hasPrevMore).toBeFalsy();
    expect(pagination.hasFirst).toBeFalsy();
    pagination.goTo(3);
    expect(pagination.hasPrevMore).toBeFalsy();
    expect(pagination.hasFirst).toBeTruthy();
    pagination.goTo(4);
    expect(pagination.hasPrevMore).toBeTruthy();
    expect(pagination.hasFirst).toBeTruthy();
  });
  it('hasNextMore && hasLast', () => {
    const pagination = new Pagination().setSize(10).setViewport(5);
    pagination.totalItems = 100;
    pagination.goTo(9);
    expect(pagination.hasNextMore).toBeFalsy();
    expect(pagination.hasLast).toBeFalsy();
    pagination.goTo(7);
    expect(pagination.hasLast).toBeFalsy();
    pagination.goTo(6);
    expect(pagination.hasNextMore).toBeFalsy();
    expect(pagination.hasLast).toBeTruthy();
    pagination.goTo(5);
    expect(pagination.hasNextMore).toBeTruthy();
    expect(pagination.hasLast).toBeTruthy();
  });
  it('hasNextMore && hasLast: mini', () => {
    const pagination = new Pagination().setSize(10).setViewport(5);
    pagination.totalItems = 50;
    pagination.goTo(0);
    expect(pagination.hasNextMore).toBeFalsy();
    expect(pagination.hasLast).toBeFalsy();
    pagination.goTo(1);
    expect(pagination.hasNextMore).toBeFalsy();
    expect(pagination.hasLast).toBeFalsy();
  });
  it('pages', () => {
    const pagination = new Pagination().setSize(10).setViewport(5);
    pagination.totalItems = 100;
    expect(pagination.pages).toEqual([0, 1, 2, 3, 4]);
  });
  it('one page', () => {
    const pagination = new Pagination().setSize(10).setViewport(5);
    pagination.totalItems = 1;
    expect(pagination.pages).toEqual([0]);
  });
  it('no page', () => {
    const pagination = new Pagination().setSize(10).setViewport(5);
    expect(pagination.pages).toEqual([]);
  });
});
