document.addEventListener('mousemove', (e) => {
    const pointer = document.querySelector('.pointer');
    pointer.style.left = `${e.pageX}px`;
    pointer.style.top = `${e.pageY}px`;

    const colors = ['red', 'green', 'blue', 'orange'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    pointer.style.borderColor = colors[colorIndex];
  });
  
  // Create and append the custom pointer element
  const pointer = document.createElement('div');
  pointer.className = 'pointer';
  document.body.appendChild(pointer);