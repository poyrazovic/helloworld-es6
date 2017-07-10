import greetings from './lib/greetings.json';

export default function (language = 'english') {
  if (typeof language !== 'string') {
    throw new TypeError('Argument language must be of type string');
  }

  return greetings[language.toLowerCase()];
}
