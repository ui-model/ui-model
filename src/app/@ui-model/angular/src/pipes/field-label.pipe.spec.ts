import { FieldLabelPipe } from './field-label.pipe';
import { NameMapper } from '../services/name-mapper.service';

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
    expect(pipe.transform({label: 'ABC', name: 'def'})).toEqual('ABC');
  });

  it('should return label if it is blank', () => {
    expect(pipe.transform({label: '', name: 'def'})).toEqual('');
  });

  it('should return mapped name if label is undefined', () => {
    expect(pipe.transform({name: 'def'})).toEqual('Def');
  });
});
