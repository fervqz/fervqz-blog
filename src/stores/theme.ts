import { atom } from 'nanostores'

export const $isDark = atom<boolean>(false)

export function setIsDark(newIsDark: boolean) {
  $isDark.set(newIsDark);
}

export function getIsDark() {
  return $isDark.get();
}