export function setCSSVar(name: string, value: string): void {
  const root = document.documentElement;
  root.style.setProperty(name, value);
}
