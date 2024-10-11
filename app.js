const Utils = (() => {
    const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 98) + 1;
      return randomNumber < 10 ? `0${randomNumber}` : `${randomNumber}`;
    };
  
    const sortNumbers = (numbers, order) => {
      if (order === 'asc') {
        return numbers.sort((a, b) => a - b);
      } else if (order === 'desc') {
        return numbers.sort((a, b) => b - a);
      }
    };
  
    return {
      generateRandomNumber,
      sortNumbers
    };
  })();

  const App = (() => {
    const htmlElements = {
      generateBtn: document.getElementById('generate-btn'),
      ascBtn: document.getElementById('asc-btn'),
      descBtn: document.getElementById('desc-btn'),
      numberGrid: document.getElementById('number-grid')
    };
  
    const handlers = {
      onGenerateClick() {
        const randomNumber = Utils.generateRandomNumber();
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = randomNumber;
        htmlElements.numberGrid.appendChild(gridItem);
        numbers.push(parseInt(randomNumber));
      },
      onAscClick() {
        const sortedNumbers = Utils.sortNumbers(numbers, 'asc');
        htmlElements.numberGrid.innerHTML = '';
        sortedNumbers.forEach((number) => {
          const gridItem = document.createElement('div');
          gridItem.className = 'grid-item';
          gridItem.textContent = number < 10 ? `0${number}` : `${number}`;
          htmlElements.numberGrid.appendChild(gridItem);
        });
      },
      onDescClick() {
        const sortedNumbers = Utils.sortNumbers(numbers, 'desc');
        htmlElements.numberGrid.innerHTML = '';
        sortedNumbers.forEach((number) => {
          const gridItem = document.createElement('div');
          gridItem.className = 'grid-item';
          gridItem.textContent = number < 10 ? `0${number}` : `${number}`;
          htmlElements.numberGrid.appendChild(gridItem);
        });
      }
    };
  
    let numbers = [];
  
    const bindEvent = () => {
      htmlElements.generateBtn.addEventListener('click', handlers.onGenerateClick);
      htmlElements.ascBtn.addEventListener('click', handlers.onAscClick);
      htmlElements.descBtn.addEventListener('click', handlers.onDescClick);
    };
  
    return {
      init() {
        bindEvent();
      }
    };
  })();
  
  App.init();