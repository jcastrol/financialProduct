import { objectToTransform ,TransformedObject,transformObject} from "../../src/adapters/transformObject";



describe('transformObject', () => {
  it('should transform object correctly when arrays have elements', () => {
    const input: objectToTransform = {
      key1: ['value1', 'value2'],
      key2: ['value3'],
      key3: ['value4', 'value5', 'value6'],
    };

    const expectedOutput: TransformedObject = {
      key1: 'value1',
      key2: 'value3',
      key3: 'value4',
    };

    expect(transformObject(input)).toEqual(expectedOutput);
  });

  it('should transform object correctly when arrays are empty', () => {
    const input: objectToTransform = {
      key1: [],
      key2: ['value3'],
      key3: [],
    };

    const expectedOutput: TransformedObject = {
      key1: '',
      key2: 'value3',
      key3: '',
    };

    expect(transformObject(input)).toEqual(expectedOutput);
  });

  it('should handle an empty object', () => {
    const input: objectToTransform = {};

    const expectedOutput: TransformedObject = {};

    expect(transformObject(input)).toEqual(expectedOutput);
  });
});