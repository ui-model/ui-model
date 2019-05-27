import { PropertyMetadata } from '@ui-model/angular';
import { NameMapper } from '../services/name-mapper.service';
import { FieldLabelPipe } from './field-label.pipe';

describe('FieldLabelPipe', () => {
  let pipe: FieldLabelPipe;
  beforeEach(() => {
    const mapper = new NameMapper();
    pipe = new FieldLabelPipe(mapper);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return label if it is defined', () => {
    const field = new PropertyMetadata();
    field.label = 'ABC';
    field.name = 'def';
    expect(pipe.transform(field)).toEqual('ABC');
  });

  it('should return label if it is blank', () => {
    const field = new PropertyMetadata();
    field.label = '';
    field.name = 'def';
    expect(pipe.transform(field)).toEqual('');
  });

  it('should return mapped name if label is undefined', () => {
    const field = new PropertyMetadata();
    field.name = 'def';
    expect(pipe.transform(field)).toEqual('Def');
  });
});
