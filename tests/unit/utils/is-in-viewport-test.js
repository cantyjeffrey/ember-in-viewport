import isInViewport from 'ember-in-viewport/utils/is-in-viewport';
import { module, test } from 'qunit';

let fakeRectNotInViewport, fakeRectInViewport, fakeWindow, fakeNoTolerance, fakeTolerance;

module('isInViewport', {
  beforeEach() {
    fakeRectNotInViewport = {
      top    : 450,
      left   : 150,
      bottom : 550,
      right  : 1130
    };

    fakeRectInViewport = {
      top    : 300,
      left   : 150,
      bottom : 400,
      right  : 1130
    };

    fakeWindow = {
      innerHeight : 400,
      innerWidth  : 1280
    };

    fakeNoTolerance = {
      top    : 0,
      left   : 0,
      bottom : 0,
      right  : 0
    };

    fakeTolerance = {
      top    : 200,
      bottom : 200
    };
  }
});

test('returns true if dimensions are within viewport', function(assert) {
  const { innerHeight, innerWidth } = fakeWindow;
  const result = isInViewport(fakeRectInViewport, innerHeight, innerWidth, fakeNoTolerance);
  assert.ok(result);
});

test('returns false if dimensions not within viewport', function(assert) {
  const { innerHeight, innerWidth } = fakeWindow;
  const result = isInViewport(fakeRectNotInViewport, innerHeight, innerWidth, fakeNoTolerance);
  assert.ok(!result);
});

test('returns true if dimensions not within viewport but within tolerance', function(assert) {
  const { innerHeight, innerWidth } = fakeWindow;
  const result = isInViewport(fakeRectNotInViewport, innerHeight, innerWidth, fakeTolerance);
  assert.ok(result);
});
