const audio = document.getElementById('audio');
      const playPauseBtn = document.getElementById('playPauseBtn');
      audio.volume = 0.1;
      audio.loop;

      playPauseBtn.addEventListener('click', () => {
          if (audio.paused) {
              audio.play();
              playPauseBtn.textContent = 'Desactivar música';
          } else {
              audio.pause();
              playPauseBtn.textContent = 'Activar música';
          }
      });