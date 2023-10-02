const numVowels = word => [...word].reduce( (count, char) => 'AEIOUaeiou'.includes(char) ? count + 1 : count, 0);

function longestWord( sentence ) {
    const words = sentence.split(" ");

    let longest = "";
    let vowelsCount = 0;
    for ( let i = 0; i < words.length; i++ ) {
        const curWord = words[i].replace(/[^a-zA-Z]/g, "");
        if ( curWord.length >= longest.length ) {
            if ( curWord.length !== longest.length ) {
                longest = curWord;
            }
            else if( numVowels(curWord) > vowelsCount ) {
                longest = curWord;
                vowelsCount = numVowels(curWord);
            }
        }
    }
    return longest;
}

  