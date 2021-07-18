import { healthCheckService } from '..';

describe('Health check service', () => {
  it('returns Ok', () => {
    // Act
    const response = healthCheckService();

    // Assert
    expect(response).toBe('OK');
  });
});
