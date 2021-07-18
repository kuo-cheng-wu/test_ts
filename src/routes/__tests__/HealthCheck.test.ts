import request from 'supertest';
import app from '../../app';

describe('Health Check endpoint', () => {
  describe('GET', () => {
    it('should return 200 - ok', async () => {
      // Arrange
      // Act
      const response = await request(app.callback()).get('/healthz');

      // Assert
      expect(response.status).toBe(200);
      expect(response.text).toBe('OK');
    });
  });
});
