/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman("123")).toBe(false)
  expect(convertBytesToHuman({})).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman('f')).toBe(false)
  expect(convertBytesToHuman(new Map())).toBe(false)
  expect(convertBytesToHuman(new Set())).toBe(false)
  expect(convertBytesToHuman(Date())).toBe(false)
});

test('Целое число в результате', () => {
  expect(convertBytesToHuman(1)).toBe('1 B')
  expect(convertBytesToHuman(500)).toBe('500 B')
  expect(convertBytesToHuman(500.001)).toBe('500 B')

  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(500 * 1024)).toBe('500 KB')
  expect(convertBytesToHuman(500.001 * 1024)).toBe('500 KB')

  expect(convertBytesToHuman(1024 * 1024)).toBe('1 MB')
  expect(convertBytesToHuman(500 * 1024 * 1024)).toBe('500 MB')
  expect(convertBytesToHuman(500.001 * 1024 * 1024)).toBe('500 MB')

  expect(convertBytesToHuman(1024 * 1024 * 1024)).toBe('1 GB')
  expect(convertBytesToHuman(500 * 1024 * 1024 * 1024)).toBe('500 GB')
  expect(convertBytesToHuman(500.001 * 1024 * 1024 * 1024)).toBe('500 GB')

  expect(convertBytesToHuman(1024 * 1024 * 1024 * 1024)).toBe('1 TB')
  expect(convertBytesToHuman(500 * 1024 * 1024 * 1024 * 1024)).toBe('500 TB')
  expect(convertBytesToHuman(500.001 * 1024 * 1024 * 1024 * 1024)).toBe('500 TB')

  expect(convertBytesToHuman(1024 * 1024 * 1024 * 1024 * 1024)).toBe('1 PB')
  expect(convertBytesToHuman(500 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('500 PB')
  expect(convertBytesToHuman(500.001 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('500 PB')

  expect(convertBytesToHuman(1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('1024 PB')
  expect(convertBytesToHuman(500 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('512000 PB')
});

test('Нецелое число в результате', () => {
  expect(convertBytesToHuman(0.1)).toBe('0.1 B')
  expect(convertBytesToHuman(0.12)).toBe('0.12 B')
  expect(convertBytesToHuman(0.123)).toBe('0.12 B')
  expect(convertBytesToHuman(0.129)).toBe('0.13 B')

  expect(convertBytesToHuman(500.1)).toBe('500.1 B')
  expect(convertBytesToHuman(500.12)).toBe('500.12 B')
  expect(convertBytesToHuman(500.123)).toBe('500.12 B')
  expect(convertBytesToHuman(500.129)).toBe('500.13 B')

  expect(convertBytesToHuman(500.1 * 1024)).toBe('500.1 KB')
  expect(convertBytesToHuman(500.12 * 1024)).toBe('500.12 KB')
  expect(convertBytesToHuman(500.123 * 1024)).toBe('500.12 KB')
  expect(convertBytesToHuman(500.129 * 1024)).toBe('500.13 KB')

  expect(convertBytesToHuman(500.1 * 1024 * 1024)).toBe('500.1 MB')
  expect(convertBytesToHuman(500.12 * 1024 * 1024)).toBe('500.12 MB')
  expect(convertBytesToHuman(500.123 * 1024 * 1024)).toBe('500.12 MB')
  expect(convertBytesToHuman(500.129 * 1024 * 1024)).toBe('500.13 MB')

  expect(convertBytesToHuman(500.1 * 1024 * 1024 * 1024)).toBe('500.1 GB')
  expect(convertBytesToHuman(500.12 * 1024 * 1024 * 1024)).toBe('500.12 GB')
  expect(convertBytesToHuman(500.123 * 1024 * 1024 * 1024)).toBe('500.12 GB')
  expect(convertBytesToHuman(500.129 * 1024 * 1024 * 1024)).toBe('500.13 GB')

  expect(convertBytesToHuman(500.1 * 1024 * 1024 * 1024 * 1024)).toBe('500.1 TB')
  expect(convertBytesToHuman(500.12 * 1024 * 1024 * 1024 * 1024)).toBe('500.12 TB')
  expect(convertBytesToHuman(500.123 * 1024 * 1024 * 1024 * 1024)).toBe('500.12 TB')
  expect(convertBytesToHuman(500.129 * 1024 * 1024 * 1024 * 1024)).toBe('500.13 TB')

  expect(convertBytesToHuman(500.1 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('500.1 PB')
  expect(convertBytesToHuman(500.12 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('500.12 PB')
  expect(convertBytesToHuman(500.123 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('500.12 PB')
  expect(convertBytesToHuman(500.129 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('500.13 PB')

  expect(convertBytesToHuman(500.1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('512102.4 PB')
  expect(convertBytesToHuman(500.12 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toBe('512122.88 PB')
});
