for (const form of document.querySelectorAll('form[action^="https://formsubmit.co/"]')) {
  const destination = form.querySelector('input[name="_next"]');
  if (destination) destination.value = new URL('thank-you.html', window.location.href).href;
}
