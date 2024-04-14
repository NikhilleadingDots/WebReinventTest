import Register from './Screens/Auth/Register';


describe('Authentication Service', () => {
  test('login with valid credentials should return true', async () => {
    const result = await Register('test@example.com', 'password');
    expect(result).toBe(true);
  });

  test('login with invalid credentials should return false', async () => {
    const result = await Register('invalid@example.com', 'password');
    expect(result).toBe(false);
  });

  test('login with empty email should throw an error', async () => {
    await expect(Register('', 'password')).rejects.toThrow('Email is required');
  });

  test('login with empty password should throw an error', async () => {
    await expect(Register('test@example.com', '')).rejects.toThrow('Password is required');
  });
});
