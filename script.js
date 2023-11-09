// Simulate data for the dashboard
const activeUsers = document.getElementById('active-users');
const completedChallenges = document.getElementById('completed-challenges');
const averageScore = document.getElementById('average-score');
const progress = document.getElementById('student-progress');
const achievementsList = document.getElementById('achievements-list');

activeUsers.textContent = '1200';
completedChallenges.textContent = '800';
averageScore.textContent = '85%';

let progressValue = 70; // Example progress value (out of 100)
progress.style.width = `${progressValue}%`;

const achievementsData = ['Code Master', 'Challenge Champion', 'Top Performer'];

achievementsData.forEach(achievement => {
    const achievementItem = document.createElement('li');
    achievementItem.textContent = achievement;
    achievementsList.appendChild(achievementItem);
});


// Simulate gamification data
const userPoints = document.getElementById('user-points');
const badgesList = document.getElementById('badges-list');
const leaderboardList = document.getElementById('leaderboard-list');

userPoints.textContent = '350';

const badgesData = ['Code Master', 'Challenge Champion', 'Top Performer'];
const leaderboardData = [
    { name: 'User1', points: 450 },
    { name: 'User2', points: 380 },
    { name: 'User3', points: 320 }
];

badgesData.forEach(badge => {
    const badgeItem = document.createElement('li');
    badgeItem.textContent = badge;
    badgesList.appendChild(badgeItem);
});

leaderboardData.forEach(entry => {
    const leaderboardItem = document.createElement('li');
    leaderboardItem.textContent = `${entry.name} - ${entry.points} points`;
    leaderboardList.appendChild(leaderboardItem);
});
