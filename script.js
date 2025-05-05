function selectMood(mood) {
    const preview = document.getElementById('preview');
    preview.innerHTML = `Você está se sentindo: <strong>${mood}</strong>`;
  }