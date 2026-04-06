const emotions = {
    "mad": "pages/red.html",
    "angry": "pages/red.html",
    "furious": "pages/red.html",
    "rage": "pages/red.html",
    "red": "pages/red.html",
    "agitated": "pages/red.html",
    "annoyed": "pages/red.html",
    "frustrated": "pages/red.html",
    "fuming": "pages/red.html",
    "resentful": "pages/red.html",
    "outraged": "pages/red.html",
    "livid": "pages/red.html",
    "party": "pages/orange.html",
    "cheer": "pages/orange.html",
    "joy": "pages/orange.html",
    "high": "pages/orange.html",
    "fun": "pages/orange.html",
    "amusement": "pages/orange.html",
    "charm": "pages/orange.html",
    "ectasy": "pages/orange.html",
    "jubilant": "pages/orange.html",
    "crazy": "pages/orange.html",
    "lively": "pages/orange.html",
    "festive": "pages/orange.html",
    "happy": "pages/yellow.html",
    "wonder": "pages/yellow.html",
    "delight": "pages/yellow.html",
    "glad": "pages/yellow.html",
    "pleased": "pages/yellow.html",
    "hope": "pages/yellow.html",
    "cheerful": "pages/yellow.html",
    "optimistic": "pages/yellow.html",
    "upbeat": "pages/yellow.html",
    "light": "pages/yellow.html",
    "merry": "pages/yellow.html",
    "sunny": "pages/yellow.html",
    "focused": "pages/green.html",
    "concentrated": "pages/green.html",
    "attentive": "pages/green.html",
    "fixated": "pages/green.html",
    "thinking": "pages/green.html",
    "thoughtful": "pages/green.html",
    "studious": "pages/green.html",
    "reflective": "pages/green.html",
    "serious": "pages/green.html",
    "academic": "pages/green.html",
    "smart": "pages/green.html",
    "stressed": "pages/green.html",
    "sad": "pages/blue.html",
    "depressed": "pages/blue.html",
    "upset": "pages/blue.html",
    "down": "pages/blue.html",
    "pessimistic": "pages/blue.html",
    "unhappy": "pages/blue.html",
    "low": "pages/blue.html",
    "hurt": "pages/blue.html",
    "grieving": "pages/blue.html",
    "distressed": "pages/blue.html",
    "bad": "pages/blue.html",
    "worried": "pages/blue.html",
    "confident": "pages/purple.html",
    "glory": "pages/purple.html",
    "fashionable": "pages/purple.html",
    "certain": "pages/purple.html",
    "chic": "pages/purple.html",
    "assertive": "pages/purple.html",
    "proud": "pages/purple.html",
    "smug": "pages/purple.html",
    "cool": "pages/purple.html",
    "important": "pages/purple.html",
    "pride": "pages/purple.html",
    "trendy": "pages/purple.html",
    "love": "pages/pink.html",
    "affection": "pages/pink.html",
    "fond": "pages/pink.html",
    "devoted": "pages/pink.html",
    "appreciated": "pages/pink.html",
    "devotion": "pages/pink.html",
    "adored": "pages/pink.html",
    "valued": "pages/pink.html",
    "like": "pages/pink.html",
    "valued": "pages/pink.html",
    "treasured": "pages/pink.html",
    "crush": "pages/pink.html",
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
