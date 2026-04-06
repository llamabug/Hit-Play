const emotions = {
    "mad": "red.html",
    "angry": "red.html",
    "furious": "red.html",
    "rage": "red.html",
    "red": "red.html",
    "agitated": "red.html",
    "annoyed": "red.html",
    "frustrated": "red.html",
    "fuming": "red.html",
    "resentful": "red.html",
    "outraged": "red.html",
    "livid": "red.html",
    "party": "orange.html",
    "cheer": "orange.html",
    "joy": "orange.html",
    "high": "orange.html",
    "fun": "orange.html",
    "amusement": "orange.html",
    "charm": "orange.html",
    "ectasy": "orange.html",
    "jubilant": "orange.html",
    "crazy": "orange.html",
    "lively": "orange.html",
    "festive": "orange.html",
    "happy": "yellow.html",
    "wonder": "yellow.html",
    "delight": "yellow.html",
    "glad": "yellow.html",
    "pleased": "yellow.html",
    "hope": "yellow.html",
    "cheerful": "yellow.html",
    "optimistic": "yellow.html",
    "upbeat": "yellow.html",
    "light": "yellow.html",
    "merry": "yellow.html",
    "sunny": "yellow.html",
    "focused": "green.html",
    "concentrated": "green.html",
    "attentive": "green.html",
    "fixated": "green.html",
    "thinking": "green.html",
    "thoughtful": "green.html",
    "studious": "green.html",
    "reflective": "green.html",
    "serious": "green.html",
    "academic": "green.html",
    "smart": "green.html",
    "stressed": "green.html",
    "sad": "blue.html",
    "depressed": "blue.html",
    "upset": "blue.html",
    "down": "blue.html",
    "pessimistic": "blue.html",
    "unhappy": "blue.html",
    "low": "blue.html",
    "hurt": "blue.html",
    "grieving": "blue.html",
    "distressed": "blue.html",
    "bad": "blue.html",
    "worried": "blue.html",
    "confident": "purple.html",
    "glory": "purple.html",
    "fashionable": "purple.html",
    "certain": "purple.html",
    "chic": "purple.html",
    "assertive": "purple.html",
    "proud": "purple.html",
    "smug": "purple.html",
    "cool": "purple.html",
    "important": "purple.html",
    "pride": "purple.html",
    "trendy": "purple.html",
    "love": "pink.html",
    "affection": "pink.html",
    "fond": "pink.html",
    "devoted": "pink.html",
    "appreciated": "pink.html",
    "devotion": "pink.html",
    "adored": "pink.html",
    "valued": "pink.html",
    "like": "pink.html",
    "valued": "pink.html",
    "treasured": "pink.html",
    "crush": "pink.html",
}


function search() {
    var input = document.getElementById("search").value.toLowerCase().trim();

    if (Object.hasOwn(emotions, input)) {
        window.location.href = emotions[input];
    }

    else {
        alert('Sorry! That mood is not recognised. Try changing the tense of the word, eg. from "stress" to "stressed"');
    }

    
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Replace with your specific action
    search()
  }
});
