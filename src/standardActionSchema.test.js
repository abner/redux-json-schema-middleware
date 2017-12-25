import createMiddleware from '.';

const middleware = createMiddleware();

describe('standard action schema', () => {
  it('raises an error for invalid actions', () => {
    expect(() => {
      middleware(undefined)(undefined)(undefined);
    }).toThrow();
  });

  it('expects actions to be objects', () => {
    expect(() => {
      middleware(undefined)(undefined)('notaction');
    }).toThrow(/data should be object/);
  });

  it('expects actions to have a type', () => {
    expect(() => {
      middleware(undefined)(undefined)({ });
    }).toThrow(/data should have required property 'type'/);
  });

  it('expects the type to be a string', () => {
    expect(() => {
      middleware(undefined)(undefined)({ type: { } });
    }).toThrow(/data\.type should be string/);
  });
});