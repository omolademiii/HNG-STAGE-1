document.addEventListener('DOMContentLoaded', function () {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const currentDate = new Date()
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()]
    const utcTime = currentDate.toUTCString()
  
    document.querySelector(
      '[data-testid="currentDayOfTheWeek"]',
    ).textContent = dayOfWeek
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime
  })