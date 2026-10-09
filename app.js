document.addEventListener('DOMContentLoaded', () => {
  const keys = ['chatgpt', 'gemini', 'grok', 'copilot'];

  keys.forEach((key) => {
    const textarea = document.getElementById(`input-${key}`);
    if (!textarea) return;

    const storageKey = `fk_cmd_room_${key}`;

    try {
      const savedValue = localStorage.getItem(storageKey);
      if (savedValue !== null) {
        textarea.value = savedValue;
      }
    } catch (e) {
      console.error(`Failed to restore data for ${key}:`, e);
    }

    textarea.addEventListener('input', () => {
      try {
        localStorage.setItem(storageKey, textarea.value);
      } catch (e) {
        console.error(`Failed to save data for ${key}:`, e);
      }
    });
  });
});
