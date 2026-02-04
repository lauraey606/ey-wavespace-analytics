import { trackEvent } from '../src/analytics';

test('trackEvent logs correctly', () => {
  expect(() => trackEvent('test', {})).not.toThrow();
});