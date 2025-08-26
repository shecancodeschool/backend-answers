/*
 Question 1A: Differences between localStorage and sessionStorage
 - localStorage stores data with no expiration (persists after browser close).
 - sessionStorage stores data only for the current tab/session (cleared when tab closed).
 - localStorage is shared across all tabs of the same origin, sessionStorage is not.
 - Both store key-value pairs, around 5–10MB limit.
*/

/*
 Question 1B: Purpose and usage of async and await
 - async declares a function that returns a Promise.
 - await pauses execution until the Promise resolves/rejects.
 - Makes asynchronous code easier to read and maintain.
*/

// Example:
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
