const responseForm = document.querySelector('[data-response-form]');
if (responseForm) {
  responseForm.addEventListener('change', () => {
    const selected = responseForm.querySelector('input[name="choice"]:checked')?.value;
    for (const [selector, active] of [['[data-questionnaire]', selected === 'questionnaire'], ['[data-appearance]', Boolean(selected && selected !== 'questionnaire')]]) {
      const section = responseForm.querySelector(selector);
      section.hidden = !active;
      section.querySelectorAll('input, select, textarea').forEach(field => { field.disabled = !active; });
    }
  });
  responseForm.dispatchEvent(new Event('change'));

}
