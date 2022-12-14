import { useState } from 'react';

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const symbol = ['!', '#', '$', '%', '&', '*', '-', '+', '_', '='];

const CreatePassword = () => {
  const [pass, setPass] = useState('Click the button');
  const [buttonText, setButtonText] = useState('Copy');
  const [disablet, setDisablet] = useState(true);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let randomLetter = alphabet[getRandomInt(alphabet.length)];
  let randomNumber = getRandomInt(9);
  let randomSymbol = symbol[getRandomInt(symbol.length)];
  let randomLetter2 = alphabet[getRandomInt(alphabet.length)];
  let randomNumber2 = getRandomInt(9);
  let randomSymbol2 = symbol[getRandomInt(symbol.length)];
  let randomLetter3 = alphabet[getRandomInt(alphabet.length)];
  let randomNumber3 = getRandomInt(9);
  let randomSymbol3 = symbol[getRandomInt(symbol.length)];

  let randomPass = [
    randomLetter.toUpperCase(),
    randomNumber,
    randomSymbol,
    randomLetter2,
    randomNumber2,
    randomSymbol2,
    randomLetter3,
    randomNumber3,
    randomSymbol3,
  ];
  randomPass.sort(() => Math.random() - 0.5);

  const handleClick = () => {
    let finalResoltPass = randomPass.join('');
    setPass(finalResoltPass);
    pass === 'Click the button' && setDisablet(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(pass);
    setButtonText('Copied!');
    setTimeout(() => {
      setButtonText('Copy');
    }, 2000);
  };

  return (
    <div className='password-box'>
      {pass === 'Click the button' ? (
        <div className='paragraphs'>
          <p className='password-paragraph'>Click the button</p>
        </div>
      ) : (
        <div className='paragraphs'>
          <p className='password-paragraph '>Your password:</p>
          <p className='password-paragraph pass-box'>{pass}</p>
        </div>
      )}
      <div className='buttons'>
        <button className='password-button' onClick={handleClick}>
          Generate
        </button>
        <button className='password-button' onClick={copy} disabled={disablet}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CreatePassword;
