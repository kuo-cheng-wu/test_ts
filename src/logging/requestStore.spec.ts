import { get, getStore, set } from './requestStore';

describe('Request store', () => {
  it('should return saved item from the store', () => {
    // Arrange
    const store = getStore();
    store.run(() => {
      const setValue = set<number>('test', 1);

      // Act
      const result = get<number>('test');

      // Assert
      expect(result).toBe(setValue);
    });
  });

  it('should not return missing item from the store', () => {
    // Arrange
    const store = getStore();
    store.run(() => {
      set<number>('test', 1);

      // Act
      const result = get<number>('missing');

      // Assert
      expect(result).toBeUndefined();
    });
  });

  it('should return saved item from the store in proper LSC', () => {
    // Arrange
    const store = getStore();
    store.run(() => {
      const setValue = set<number>('test', 1);

      // Act
      const result = get<number>('test');

      // Assert
      expect(result).toBe(setValue);
    });

    store.run(() => {
      const setValue = set<number>('test', 2);

      // Act
      const result = get<number>('test');

      // Assert
      expect(result).toBe(setValue);
    });
  });
});
