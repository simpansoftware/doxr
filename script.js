document.querySelectorAll('.doxrgithub, .doxrgitlab, .doxrdiscord, .doxrspotify').forEach(element => {
    element.onclick = () => {
      if (element.classList.contains('doxrgithub')) {
        window.location.href = 'https://github.com/DoxrGitHub?tab=repositories';
      } else if (element.classList.contains('doxrgitlab')) {
        window.location.href = 'https://gitlab.com/doxrgitlab/';
      } else if (element.classList.contains('doxrdiscord')) {
        window.location.href = 'https://discord.com/users/1162193398879502336';
      } else if (element.classList.contains('doxrspotify')) {
        window.location.href = 'https://open.spotify.com/user/31gcrb5ld7t6dwfyxyzzklsakntm';
      }
    };
  });
  
  const pfpImage = document.querySelector('.pfpimage');
  
  const images = {
    doxrdiscord: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0arBHeKNo3byLD3EqSSJHFzkE16G36Ye6w&s',
    doxrgithub: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    doxrgitlab: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png',
    doxrspotify: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    default: 'https://avatars.githubusercontent.com/u/132623420?v=4'
  };
  
  document.querySelectorAll('.doxrgithub, .doxrgitlab, .doxrdiscord, .doxrspotify').forEach(element => {
    element.addEventListener('mouseenter', () => {
      const brand = element.classList[0];
      pfpImage.src = images[brand] || images.default;
      pfpImage.style.transition = 'opacity 0.2s ease-in-out';
      pfpImage.style.opacity = 0.9;
    });
  
    element.addEventListener('mouseleave', () => {
      pfpImage.src = images.default;
      pfpImage.style.transition = 'opacity 0.2s ease-in-out';
      pfpImage.style.opacity = 1;
    });
  });
  