import { inject, TestBed } from '@angular/core/testing';

import { titleOf, titleOfRoot, titleTemplateOf, UpdateTitleGuard } from './update-title.guard';

describe('UpdateTitleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTitleGuard],
    });
  });

  let api: UpdateTitleGuard;

  beforeEach(inject([UpdateTitleGuard], (_api_: UpdateTitleGuard) => {
    api = _api_;
  }));

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  it('should return title if no template', () => {
    const route = { data: { title: 'Abc' } };
    expect(titleOf(route)).toEqual('Abc');
  });

  it('should return title template which first met', () => {
    const route1 = { data: { title: 'Abc', titleTemplateForChildren: '<%= current %> - <%= parent %>' } };
    const route2 = { data: { title: 'Def' }, parent: route1 };
    const route3 = { data: { title: 'Ghi' }, parent: route2 };
    expect(titleTemplateOf(route1)).toEqual('<%= current %> - <%= parent %>');
    expect(titleTemplateOf(route2)).toEqual('<%= current %> - <%= parent %>');
    expect(titleTemplateOf(route3)).toEqual('<%= current %> - <%= parent %>');
  });

  it('should return default template if no template', () => {
    const route1 = { data: { title: 'Abc' } };
    const route2 = { data: { title: 'Def' }, parent: route1 };
    const route3 = { data: { title: 'Ghi' }, parent: route2 };
    expect(titleTemplateOf(route1)).toEqual('<%= current %>');
    expect(titleTemplateOf(route2)).toEqual('<%= current %>');
    expect(titleTemplateOf(route3)).toEqual('<%= current %>');
  });

  it('should return title with template - parent', () => {
    const route = { data: { title: 'Abc', titleTemplateForChildren: '<%= current %> - <%= parent %>' } };
    const subRoute = { data: { title: 'Def' }, parent: route };
    expect(titleOf(subRoute)).toEqual('Def - Abc');
  });

  it('should return title with template - nested parent', () => {
    const route1 = { data: { title: 'Abc', titleTemplateForChildren: '<%= current %> - <%= parent %>' } };
    const route2 = {
      data: { title: 'Def', titleTemplateForChildren: '<%= current %>@<%=parent%>' },
      parent: route1,
    };
    const route3 = { data: { title: 'Ghi' }, parent: route2 };
    expect(titleOf(route3)).toEqual('Ghi@Def - Abc');
  });

  it('should return title with template - nested and inherited data', () => {
    const root = { data: {} };
    const route1 = { data: { title: 'Abc', titleTemplateForChildren: '<%= current %> - <%= parent %>' } };
    const route2 = {
      data: { title: 'Abc', titleTemplateForChildren: '<%= current %> - <%= parent %>' },
      parent: route1,
    };
    const route3 = { data: { title: 'Ghi' }, parent: route2, root: root };
    expect(titleOf(route3)).toEqual('Ghi - Abc');
  });

  it('should return title with template - root', () => {
    const root = { data: {} };
    const route1 = { data: { title: 'Abc', titleTemplateForChildren: '<%= current %> - <%= root %>' }, root: root };
    const route2 = { data: { title: 'Def' }, parent: route1, root: root };
    const route3 = { data: { title: 'Ghi' }, parent: route2, root: root };
    expect(titleOf(route3, titleOfRoot(route3))).toEqual('Ghi - Abc');
  });
});
