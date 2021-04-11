export const stript = {
  charges: {
    // Return a promise that automatically resolves to an object,
    // just like the actual create function
    create: jest.fn().mockResolvedValue({}),
  },
};
