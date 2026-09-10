export function showInstructionsPopup(text) {
  const popup = document.getElementById('instructionsPopupOverlay');
  const input = document.getElementById('instructionsPopupInput');
  if (popup && input) {
    input.value = text;
    popup.style.display = 'flex';
    input.focus();
  } else {
    console.error('Instructions pop-up elements (instructionsPopupOverlay or instructionsPopupInput) not found. Ensure HTML is present.');
    alert('Error: Instructions input dialog is missing. Cannot proceed without a instructions if fetch fails.');
  }
}
export function hideInstructionsPopup() {
  const popup = document.getElementById('instructionsPopupOverlay');
  if (popup) {
    popup.style.display = 'none';
  }
}
