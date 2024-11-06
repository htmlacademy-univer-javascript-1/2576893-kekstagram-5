function isMeetingWithinWorkingHours(startWorkDay, endWorkDay, startMeeting, meetingDuration) {
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  const startWorkDayMinutes = timeToMinutes(startWorkDay);
  const endWorkDayMinutes = timeToMinutes(endWorkDay);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + meetingDuration;
  return startMeetingMinutes >= startWorkDayMinutes && endMeetingMinutes <= endWorkDayMinutes;
}
