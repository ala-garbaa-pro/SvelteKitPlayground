// popup.js

// popup.js

export function showPopup() {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      .popup-container {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 20px;
        border-radius: 5px;
        transition: opacity 0.3s ease-in-out;
      }
  
      .popup-content {
        text-align: center;
      }
  
      .popup-container.show {
        display: block;
        opacity: 1;
      }
    `;
  
    // Append style to the head
    document.head.appendChild(style);
  
    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
  
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = 'This is a popup!';
  
    // Append content to container
    popupContainer.appendChild(popupContent);
  
    // Append container to the body
    document.body.appendChild(popupContainer);
  
    // Add animation class for fade-in effect
    setTimeout(() => {
      popupContainer.classList.add('show');
    }, 100);
  
    // Close popup when clicked outside
    popupContainer.addEventListener('click', () => {
      popupContainer.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(popupContainer);
      }, 300); // Adjust the timing based on your animation duration
    });
  }
  