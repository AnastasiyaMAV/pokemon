function copyFallback(content: string) {
  const fakeTextarea = document.createElement('textarea');
  fakeTextarea.value = content;

  fakeTextarea.style.top = '0';
  fakeTextarea.style.left = '0';
  fakeTextarea.style.position = 'fixed';

  document.body.appendChild(fakeTextarea);
  fakeTextarea.focus();
  fakeTextarea.select();

  document.execCommand('copy');
  document.body.removeChild(fakeTextarea);
}

/**
 * Hook for copy string data to clipboard
 */
export function useClipboard() {
  return (content: string) => {
    navigator.clipboard && navigator.clipboard.writeText(content);
    navigator.clipboard || copyFallback(content);
  };
}
