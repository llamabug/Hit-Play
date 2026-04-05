function search() {
    var input = document.getElementById("search").value.toLowerCase().trim();

    if (input === 'mad') {
        window.location.href = "red.html"
    }

    else if (input === 'party') {
        window.location.href = "orange.html"
    }

    else if (input === 'happy') {
        window.location.href = "yellow.html"
    }

    else if (input === 'focus') {
        window.location.href = "green.html"
    }

    else if (input === 'sad') {
        window.location.href = "blue.html"
    }

    else if (input === 'confident') {
        window.location.href = "purple.html"
    }

    else if (input === 'love') {
        window.location.href = "pink.html"
    }

    else {
        alert('Mood not recognised');
    }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Replace with your specific action
    search()
  }
});
